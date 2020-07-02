$(()=>{
     //渲染single
     let oUl=$(".single_list");
     $.getJSON("../../server/single.json",(data)=>{
         let html=data.map((item)=>{
             return `    
             <li class="list_item">
             <a href="">
                 <img src=${item.src} alt="">
                 <span>${item.title}</span>
                 <span>
                 <i><b>${item.money}</b>${item.price}</i>
                 <i class="line"><b>${item.money}</b>${item.priceL}</i>
                 </span>
             </a>
         </li>`
         }).join("");
         oUl.append(html);
     })
     //aside one
     $(".asideBtn_two1").click(function(){
         $(".aside_list .ulOne").css("left",`-110px`)
     })
     $(".asideBtn_one1").click(function(){
         $(".aside_list .ulOne").css("left","0px")
     })
     //aside two
     $(".asideBtn_two2").click(function(){
         $(".aside_list .ulTwo").css("left",`-110px`)
     })
     $(".asideBtn_one2").click(function(){
         $(".aside_list .ulTwo").css("left","0px")
     })
     //aside three
     $(".asideBtn_two3").click(function(){
         $(".aside_list .ulThree").css("left",`-110px`)
     })
     $(".asideBtn_one3").click(function(){
         $(".aside_list .ulThree").css("left","0px")
     })
    //渲染one
    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text text1">${data[0].title}</span>
                <span class="text text1">${data[0].title2}</span>
                <button class="btn btn_one">${data[0].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[0].src} alt=""></a></div>
    </div>
        `
        $(".center_one").append(html);
    })

    $.getJSON("../../server/one.json",(data)=>{
        let html=data.map((it)=>{
            return `
            <li class="center_item">
            <a href="">
                <span class="itemA">${it.title}</span>
                <span class="itemB">${it.price}</span>
                <img src=${it.src} alt="">
            </a>`
        }).join("");
        $(".center_one").append(html);
    })

    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text text1">${data[1].title}</span>
                <span class="text text1">${data[1].title2}</span>
                <button class="btn btn_one">${data[1].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[1].src} alt=""></a></div>
    </div>
        `
        $(".center_one").append(html);
    })

    //one-aside
    $.getJSON("../../server/publicAside.json",(data)=>{
        for(let i=0;i<data[0].length;i++){
            $(".aside_list .ulOne").append(`<li><img src=${data[0][i].src} alt=""></li>`)
        }
    })


    


    //two
    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text2 text">${data[2].title}</span>
                <span class="text2 text">${data[2].title2}</span>
                <button class="btn btn_two">${data[2].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[2].src} alt=""></a></div>
    </div>
        `
        $(".center_two").append(html);
    })

    $.getJSON("../../server/two.json",(data)=>{
        let html=data.map((it)=>{
            return `
            <li class="center_item">
            <a href="">
                <span class="itemA">${it.title}</span>
                <span class="itemB">${it.price}</span>
                <img src=${it.src} alt="">
            </a>`
        }).join("");
        $(".center_two").append(html);
    })

    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text2 text">${data[3].title}</span>
                <span class="text2 text">${data[3].title2}</span>
                <button class="btn btn_two">${data[3].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[3].src} alt=""></a></div>
    </div>
        `
        $(".center_two").append(html);
    })
    // two-aside
    $.getJSON("../../server/publicAside.json",(data)=>{
        for(let i=0;i<data[1].length;i++){
            $(".aside_list .ulTwo").append(`<li><img src=${data[1][i].src} alt=""></li>`)
        }
    })


    //three
        $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text3 text">${data[4].title}</span>
                <span class="text3 text">${data[4].title2}</span>
                <button class="btn btn_three">${data[4].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[4].src} alt=""></a></div>
    </div>
        `
        $(".center_three").append(html);
    })

    $.getJSON("../../server/three.json",(data)=>{
        let html=data.map((it)=>{
            return `
            <li class="center_item">
            <a href="">
                <span class="itemA">${it.title}</span>
                <span class="itemB">${it.price}</span>
                <img src=${it.src} alt="">
            </a>`
        }).join("");
        $(".center_three").append(html);
    })

    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text3 text">${data[5].title}</span>
                <span class="text3 text">${data[5].title2}</span>
                <button class="btn btn_three">${data[5].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[5].src} alt=""></a></div>
    </div>
        `
        $(".center_three").append(html);
    })

     // threeo-aside
     $.getJSON("../../server/publicAside.json",(data)=>{
        for(let i=0;i<data[2].length;i++){
            $(".aside_list .ulThree").append(`<li><img src=${data[2][i].src} alt=""></li>`)
        }
    })
})