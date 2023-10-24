//轮播图
(function (){
    let imgData= [
        {url:'image/1.jpg', title :'寻踪晋商' , color : 'rgb(67,52,44)'},
        {url:'image/2.png', title :'原来这才是“极限国度”！' , color : 'rgb(33,163,102)'},
        {url:'image/3.png', title :'游戏主播天团大集结' , color : 'rgb(254,165,227)'},
        {url:'image/4.png', title :'如何点评游戏角色身材' , color : 'rgb(0,0,0)'},
        {url:'image/5.png', title :'年轻人的青年大学习' , color : 'rgb(66,44,40)'},
        {url:'image/6.jpg', title :'翻唱的打开方式' , color : 'rgb(233,190,98)'},
        {url:'image/7.png', title :'快来吃火锅！' , color : 'rgb(143,31,30)'},
        {url:'image/8.png', title :'梅兰芳诞辰《绝代芳华》' , color : 'rgb(31,31,6)'},
    ]

    const next = document.querySelector('.next')
    const last = document.querySelector('.last')
    const picture = document.querySelector('.picture')
    const title = document.querySelector('.title p')
    const big_box = document.querySelector('.main_l_box')
    let index = 1
    picture.style.left = index * -554.4 + 'px'
    picture.style.transition = 'all .3s'
    next.addEventListener('click',function () {
        if(index>=8){
            picture.style.left = -4989.6 +'px'
            picture.style.transition = 'all .3s'
            title.innerHTML = imgData[0].title
            big_box.style.backgroundColor = imgData[0].color
            document.querySelector('.little_circle ul .active').classList.remove('active')
            document.querySelector(`.little_circle ul li:nth-child(1)`).classList.add('active')
            let timeId1 = setTimeout(()=>{
                picture.style.transition = 'null'
                index=1
                picture.style.left = index * -554.4 + 'px'
            },400)

        }else {
            index++
            picture.style.left = index * -554.4 + 'px'
            picture.style.transition = 'all .3s'
            title.innerHTML = imgData[index - 1].title
            big_box.style.backgroundColor = imgData[index - 1].color
            document.querySelector('.little_circle ul .active').classList.remove('active')
            document.querySelector(`.little_circle ul li:nth-child(${index})`).classList.add('active')
        }
    })
    last.addEventListener('click',function () {
        if(index<=1){
            picture.style.left = 0 + 'px'
            picture.style.transition = 'all .3s'
            title.innerHTML = imgData[7].title
            big_box.style.backgroundColor = imgData[7].color
            document.querySelector('.little_circle ul .active').classList.remove('active')
            document.querySelector(`.little_circle ul li:nth-child(8)`).classList.add('active')
            let timeId1 = setTimeout(()=>{
                picture.style.transition = 'null'
                index=8
                picture.style.left = index * -554.4 + 'px'
            },400)

        }else {
            index--
            picture.style.left = index * -554.4 + 'px'
            picture.style.transition = 'all .3s'
            title.innerHTML = imgData[index - 1].title
            big_box.style.backgroundColor = imgData[index - 1].color
            document.querySelector('.little_circle ul .active').classList.remove('active')
            document.querySelector(`.little_circle ul li:nth-child(${index})`).classList.add('active')
        }
    })

    let timeID2 = setInterval(()=>{
        next.click()
    },2000)

    big_box.addEventListener('mouseenter',()=>{
        clearInterval(timeID2)
    })
    big_box.addEventListener('mouseleave',()=>{
        timeID2 = setInterval(()=>{
            next.click()
        },2000)
    })

    let arr = document.querySelectorAll('.little_circle ul li')
    for (let i =0;i<=7;i++){
        arr[i].addEventListener('click',function (){
            index= i+1
            picture.style.transition = 'all .3s'
            picture.style.left = index * -554.4 + 'px'
            document.querySelector('.little_circle ul .active').classList.remove('active')
            document.querySelector(`.little_circle ul li:nth-child(${index })`).classList.add('active')
        })
    }
})();

//滚动导航栏浮现
(function (){
    const header_fix = document.querySelector('.header_nav_fixed')

    window.addEventListener('scroll',function (){
        let n = document.documentElement.scrollTop
        if(n>=155){
            header_fix.style.display='block'
        }
        else {
            header_fix.style.display='none'
        }
    })
})();
//视频悬停播放
(function (){
    const video = document.querySelector('.img_box video')
    const img_box = document.querySelector('.img_box')

    img_box.addEventListener('mouseenter',()=>{
        video.style.zIndex = 2
        video.play()
    })

    img_box.addEventListener('mouseleave',()=>{
        video.style.zIndex = -1
        video.pause()
        video.load()
    })
})();

//分类导航栏悬停下拉框
(function (){
    let timeID1 = 0
    let timeID2 = 0
    const chan = document.querySelector('.classify_nav_box li:nth-child(1)')
    const fj_box = document.querySelector('.classify_channel_fj_box')
    chan.addEventListener('mouseenter',()=>{
        clearInterval(timeID2)
        fj_box.style.display = 'block'
        let timeID = setTimeout(()=>{
            fj_box.style.transition = 'all .3s'
            fj_box.style.opacity = '1'
        },200)
    })

    chan.addEventListener('mouseleave',()=>{
            timeID1 = setTimeout(()=>{
                fj_box.style.opacity = '0'
                let timeID1 = setTimeout(()=>{
                    fj_box.style.display = 'none'
                },200)
            },500)
    })
    fj_box.addEventListener('mouseenter',()=>{
        clearInterval(timeID1)
    })
    fj_box.addEventListener('mouseleave',()=>{
        timeID2 = setTimeout(()=>{
            fj_box.style.opacity = '0'
            let timeID1 = setTimeout(()=>{
                fj_box.style.display = 'none'
            },200)
        },500)
    })
})();




