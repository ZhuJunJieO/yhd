$(() => {
    $(".auto").click(function(){

        let isCheck = $(".auto").is(":checked");
        if (!isCheck) {
            $(".auto").next().next().removeClass("active");
        }else{
            $(".auto").next().next().addClass("active");
        }
    })
    $(".login").mouseenter(function(){
        $(".agree").css("display","block");
    })
    $(".login").mouseleave(function(){
        $(".agree").css("display","none");
    })
    /* 获取登录按钮，添加事件 */
    $(".login").click(function() {
        let username = $.trim($("#username").val());
        let password = $.trim($("#pwd").val());

        /* 先检查用户名和密码和是否勾选，都满足则发请求 */
        if (username.length == 0) {
            alert("用户名不能为空");
            return
        }

        if (password.length == 0) {
            alert("密码不能为空");
            return;
        }

        $.ajax({
            type: "post",
            url: "../../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${password}`
        }).done(data => {
            // alert(data.msg);
            /* 如果 */
            if (data.status == "success") {
                alert(data.msg);
                /* 跳转 */
                localStorage.setItem("user_id", data.userId);
                localStorage.setItem("user_name", data.username);
                location.href="../html/index.html"
            } else {
                alert(data.msg);
            }
        })

    })

})