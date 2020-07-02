$(()=>{
    $(".menu").mouseenter(function(){
        $(this).children(".icon-jiantouxia").css("display","none");
        $(this).children(".icon-jiantoushang").css("display","block");

    })
    $(".menu").mouseleave(function(){
        $(this).children(".icon-jiantouxia").css("display","block");
        $(this).children(".icon-jiantoushang").css("display","none");
    })
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

    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text">${data[0].title}</span>
                <span class="text">${data[0].title2}</span>
                <button class="btn btn_one">${data[0].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[0].src} alt=""></a></div>
    </div>
        `
        $(".con_center").append(html);
    })

    //渲染one
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
        $(".con_center").append(html);
    })

    $.getJSON("../../server/public.json",(data)=>{
        html=`
        <div class="center_left center_left-one center">
        <div class="center_text">
            <a href="">
                <span class="text">${data[1].title}</span>
                <span class="text">${data[1].title2}</span>
                <button class="btn btn_one">${data[0].btn}</button>
            </a>
        </div>
        <div class="center_img"><a href=""><img src=${data[1].src} alt=""></a></div>
    </div>
        `
        $(".con_center").append(html);
    })
})