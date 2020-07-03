$(()=>{
    let imgCode;
    /*不传值，统一走默认值*/
    let captcha = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 2, //线条数量
        // dotR: 200, //点的半径
        // dotNum: 1000, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 40, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: '0123456789', //验证码内容
        length: 4 //验证码长度
    });

    captcha.draw(document.querySelector('#captcha'), r => {
        console.log('验证码', r);
        imgCode = r;

        /* 自动触发标签的事件 */
        $("#code").trigger("blur");
    });
    
    //事件委托验证
    let options = {
        "usernameID":{
            reg:`/^[a-zA-z]{2,6}$/.test(val)`,
            msg:"用户名不符合规范！"
        },
        "phoneID":{
            reg:`/^1[3-9][0-9]{9}$/.test(val)`,
            msg:"手机号码不符合规范！"
        },
        "pwdAID":{
            reg:`/^[a-zA-z0-9]{6,8}$.test(val)/`,
            msg:"密码不符合规范！"
        },
        "pwdBID":{
            reg:`val===$.trim($("#pwdAID").val())`,
            msg:"请两次密码保持一致"
        },
        "code": {
            reg: "val === imgCode",
            msg: "图形验证码不正确！"
        }
    }
    $(".main_con").on("blur","input",function() {
        let option_id = this.id;
        let val = $.trim($(this).val());

        if (eval(options[option_id].reg)) {
            $(this).next().text("");
        } else {
            $(this).next().text(options[option_id].msg);
        }
    })
    //    注册功能(获取参数并且发送网络请求， 在服务器端进行处理)
      $("#registerBtn").click(function() {
        /* [1] 检查表单验证是否全部都通过，如果有一个没有通过那么就return  */
        $("#phoneID,#usernameID,#pwdAID,#pwdBID,#code").trigger("blur");
        if($(".massage").text()!=""){
            return;
        }
        //判断是否勾选
        let isCheck = $("#protocol").is(":checked");
        if (!isCheck) {
            alert("请阅读并同意用户的注册协议!!!");
            return;
        }
        let data = {
            username: $.trim($("#usernameID").val()),
            phone: $.trim($("#phoneID").val()),
            password: ($.trim($("#pwdAID").val()))
        }
          $.ajax({
            url: "../../server/res.php",
            type: "post",
            data,
            dataType: "json",
        }).done(data => {
            if (data.status == "success") {
                alert("注册成功!");
                location.href = "../html/login.html";
            } else {
                alert(data.msg);
            }
        })
      })
})