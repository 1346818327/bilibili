// 点击盒子高度变大（过渡）
(function (){
    const list = document.querySelector('.collapse_list')
    const list_li = document.querySelector('.collapse_list_li')
    let i =1
    list.addEventListener('click',()=>{

        if(i%2===1){
            list_li.style.transition = 'all 0.3s'
            list_li.style.height = '376px'
            i++
        }else if(i%2===0){
            list_li.style.transition = 'all 0.3s'
            list_li.style.height = '0'
            i++
        }

    })
})();


(function (){
    const input = document.querySelector('.comment_input')
    const div = document.querySelector('.comment_input_btn')
    const list = document.querySelector('.comment ul')
    const sum = document.querySelector('.comment_sum')
    let index = 0
    input.addEventListener('focus',()=>{
        input.style.transition = 'all .3s'
        input.style.height = '65px'
        div.style.transition = 'all .3s'
        div.style.height = '65px'
    })
    input.addEventListener('blur',()=>{
        input.style.transition = 'all .3s'
        input.style.height = '50px'
        div.style.transition = 'all .3s'
        div.style.height = '50px'
    })
    div.addEventListener('mouseover',()=>{
        div.style.backgroundColor = 'rgb(0,174,236)'
    })
    div.addEventListener('mouseout',()=>{
        div.style.backgroundColor = '#7ed6f5'
    })

    let arr = JSON.parse(localStorage.getItem('data'))||[]
    render()
    console.log(arr)
    function render(){
        const NewArr = arr.map(e=>{
            return `
                    <li>
                        <div class="comment_self_box">
                            <div class="comment_player_head">
                                <div class="comment_self_head"></div>
                            </div>
                            <div class="reply">
                                <div class="reply_player_name">
                                    <a href="#">北宅北宅北_</a>
                                </div>
                            <div class="reply_content">
                                <span>
                                    ${e.content}
                                </span>
                            </div>
                                <div class="reply_bottom">
                                    <span>${e.time}&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;回复</span>
                                </div>
                            </div>

                        </div>
                    </li>
            `
        })

        list.innerHTML = NewArr.join('')
        sum.innerHTML = NewArr.length
    }
    const info = document.querySelector('.info')
    info.addEventListener('submit',(e)=> {
        e.preventDefault()
        if(info.value!==''){
            arr.push({
                content:input.value,
                time:new Date().toLocaleString()
            })
            render()
            info.reset()
            localStorage.setItem('data',JSON.stringify(arr))
        }

    })
})();


// 滚动出现画中画和fixed栏
(function (){
    const video_main = document.querySelector('.view_box video')
    const video_min_box = document.querySelector('.fixed_video')
    const video_min = document.querySelector('.fixed_video video')
    const fixed = document.querySelector('.fixed_box')
    const up = document.querySelector('.fix_box_3')
    window.addEventListener('scroll',()=>{
        let n = document.documentElement.scrollTop
        if(n>=500){
            video_min_box.style.display = 'block'
            fixed.style.display = 'flex'
            video_min.currentTime = video_main.currentTime
            if(video_main.paused===false){
                video_min.play()
            }else if(video_main.paused===true){
                video_min.pause()
            }
        }else{
            fixed.style.display = 'none'
            video_min_box.style.display = 'none'
        }
    })

    up.addEventListener('click',()=>{
        window.scrollTo(0,0)
    })

})();

