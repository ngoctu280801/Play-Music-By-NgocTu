const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'NGOCTU_PLAYER';

const singer = document.querySelector("header h4");
const name = document.querySelector("header h2");
const img = document.querySelector(".cd .cd-thumb");
const audio = document.querySelector("#audio");
const cd = document.querySelector('.cd');
const player = document.querySelector('.player');
const playBtn = document.querySelector(".btn-toggle-play");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const repeatBtn = document.querySelector(".btn-repeat");
const randomBtn = document.querySelector(".btn-random");
const progressInput = document.querySelector("#progress");
const playlist = document.querySelector(".playlist");
const app = {
    currentIndex: 0,
    isRepeate:false,
    isPlaying: false, 
    isRandom: false, 
    config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
    setConfig: function(key,value){
        this.config[key]=value;
        console.log("config: " + JSON.stringify(this.config));
        localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config));
    },
    songs: [
        {
            name: "Đào Nương",
            singer: "Hoàng Vương",
            path: "./assets/music/DaoNuong-HoangVuong-7037330.mp3",
            img: "./assets/img/DaoNuong.jpg"
        },
        {
            name: "Đâu Ai Chung Tình Được Mãi",
            singer: "Đinh Tùng Huy",
            path: "./assets/music/AiChungTinhDuocMai-DinhTungHuyACV-7197858.mp3",
            img: "./assets/img/DauAiChungTinhDuocMai.jpg"
        },
        {
            name: "Đế Vương",
            singer: "Đình Dũng",
            path: "./assets/music/DeVuong-DinhDungACV-7121634.mp3",
            img: "./assets/img/DeVuong.jpg"
        },
        {
            name: "Phận Duyên Lỡ Làng",
            singer: "Phát Huy",
            path: "./assets/music/PhanDuyenLoLang-PhatHuyT4Trugz-7004538.mp3",
            img: "./assets/img/PhanDuyenLoLang.jpg"
        },
        {
            name: "See Tình",
            singer: "Hoàng Thùy Linh",
            path: "./assets/music/SeeTinh-HoangThuyLinh-7195809.mp3",
            img: "./assets/img/SeeTinh.jpg"
        },
        {
            name: "Thê Lương",
            singer: "Phúc Chinh",
            path: "./assets/music/TheLuong-PhucChinh-6971140.mp3",
            img: "./assets/img/TheLuong.jpg"
        },
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                    <div class="song" data-index="${index}">
                        <div class="thumb"
                            style="background-image: url('${song.img}')">
                            <i  class="btn-thumb-pause"></i>
                            <i class="fa-solid fa-play btn-thumb-play"></i>
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                            
                        </div>
                    </div>
                `
        })
        
        document.querySelector(".playlist").innerHTML = htmls.join('');
    },
    loadCurrentSong: function(){
        audio.src = this.currentSong.path;
        singer.innerText = this.currentSong.singer;
        name.innerText = this.currentSong.name;
        img.style.backgroundImage = `url(${this.currentSong.img})`;
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom ||false;
        this.isRepeate = this.config.isRepeat ||false;
        this.currentIndex = this.config.currentIndex||0;
        repeatBtn.classList.toggle("active",this.isRepeate);
        randomBtn.classList.toggle("active",this.isRandom);
    }
    ,
    nextSong: function(){
        if(this.currentIndex === this.songs.length - 1){
            this.currentIndex = -1;
        }
        this.currentIndex++;
        this.setConfig("currentIndex", this.currentIndex);
        this.loadCurrentSong();
        
    },
    prevSong: function(){
        if(this.currentIndex === 0){
            this.currentIndex = this.songs.length;
        }
        this.currentIndex--;
        this.setConfig("currentIndex", this.currentIndex);
        this.loadCurrentSong();
    },
    repeateSong: function(){
        audio.loop = true;
        this.isRepeate = true;
    },
    randomSong: function(){
        this.currentIndex = Math.floor(Math.random() * app.songs.length);
        this.setConfig("currentIndex", this.currentIndex);
        this.loadCurrentSong();
    },
    chooseSongInList: function(){
        const songChoosed = playlist.querySelectorAll('.song');
        for(let i = 0; i < songChoosed.length; i++) {
            songChoosed[i].onclick = function(){
                this.currentIndex = i;
                song = songChoosed[i];
            }
        };
        
        this.loadCurrentSong();
    },
    handlePlay: function(){
        if(app.isPlaying === false){
            audio.play();
        }
        else{
            app.isPlaying = false;
            audio.pause();
            player.classList.remove('playing');
        }
        audio.onpause = function(){
            
            app.isPlaying = false;
            player.classList.remove('playing');
            animateThumb.pause();
        };
        audio.onplay = function(){
            app.isPlaying = true;
            player.classList.add('playing');
            animateThumb.play();
        };
    },
    activeSong: function(){
        for(let j = 0; j < songChoosed.length; j++){
            if(j !== app.currentIndex){
                songChoosed[j].classList.remove('active-song');
            }
            else{
                songChoosed[j].classList.add('active-song');
            }
        }
    },
    handlePlayThumb: function(){
        const songChoosed = document.querySelectorAll('.song');
        for(let j = 0; j < songChoosed.length; j++){
            if(j !== app.currentIndex){
                songChoosed[j].classList.remove('active-song');
            }
            else{
                songChoosed[j].classList.add('active-song');
                const playThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-play');
                const pauseThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-pause');
                //qua bài xử lí hiển thị play/pause
                if( app.isPlaying){
                    playThumbBtn__.style.display = "none";
                    pauseThumbBtn__.style.display = "inline-block";
                }
                else{
                    playThumbBtn__.style.display = "inline-block";
                    pauseThumbBtn__.style.display = "none";
                }
            }
        }
        for(let j = 0; j < songChoosed.length; j++) {
            const playThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-play');
            const pauseThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-pause');
            if(j!== app.currentIndex){
                //khi không hover thì none cả 2 nút
                playThumbBtn__.style.display = "none";
                pauseThumbBtn__.style.display = "none";
            }
            
        }
    },
    scrollToActiveSong: function(){
        setTimeout(function(){
            const element = document.querySelector('.active-song');
            element.scrollIntoView({behavior: "smooth",  block: "nearest"});
        },300);
    },
    handleEvents:function(){
        //hóng to thu nhỏ
        let cdWidth = cd.offsetWidth;
        //xử lý cd quay, dừng
        var animateThumb =  img.animate([
            {
                transform: 'rotate(360deg)'
            }],
            {
                duration: 10000,
                iterations: Infinity,
            }
        )
        animateThumb.pause();

        //mặc định active bài hát mặc định
        const songChoosed_ = document.querySelectorAll('.song');
        console.log(songChoosed_ + ": songchoosed");
        songChoosed_[app.currentIndex].classList.add('active-song');
        const defaultPlayBtn = songChoosed_[app.currentIndex].querySelector('.btn-thumb-play');
        defaultPlayBtn.style.display = 'inline-block';

        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newWidth = cdWidth - scrollTop;
            if(cdWidth < scrollTop){
                cd.style.width = 0;
            }
            else{
                cd.style.width = newWidth;
            }
            cd.style.opacity = newWidth/ cdWidth;
        }

        //xử lí nút playlist
        playBtn.onclick = function(){
            //chọn element duoc active

            for(let j = 0; j < songChoosed.length; j++){
                if(j === app.currentIndex){
                    const playBtnThumb = songChoosed[j].querySelector('.btn-thumb-play');
                    const pauseBtnThumb = songChoosed[j].querySelector('.btn-thumb-pause');
                    if(app.isPlaying){
                        playBtnThumb.style.display = 'inline-block';
                        pauseBtnThumb.style.display = 'none';
                    }
                    else{
                        playBtnThumb.style.display = 'none';
                        pauseBtnThumb.style.display = 'inline-block';
                    }
                }
            }


            if(app.isPlaying === false){
                audio.play();
            }
            else{
                app.isPlaying = false;
                audio.pause();
                player.classList.remove('playing');
            }
            audio.onpause = function(){
                
                app.isPlaying = false;
                player.classList.remove('playing');
                animateThumb.pause();
            };
            audio.onplay = function(){
                app.isPlaying = true;
                player.classList.add('playing');
                animateThumb.play();
            };
            for(let j = 0; j < songChoosed.length; j++){
                if(j !== app.currentIndex){
                    songChoosed[j].classList.remove('active-song');
                }
                else{
                    songChoosed[j].classList.add('active-song');
                }
            }
        }
        
        //tua nhạc
        progressInput.oninput = function(e){
            const currentTime = e.target.value * audio.duration / 100;
            audio.currentTime = currentTime;
        };
        //đang chạy
        audio.ontimeupdate = function(){    
            if(audio.duration){
                const currentTime = audio.currentTime;
                const value = 100 * currentTime / audio.duration;
                //progressInput.style.width = value + '%';
                progressInput.value = value;
            }
        };
        //khi phát xong
        audio.onended = function(){
            if(app.isRepeate === false){
                if(app.isRandom === true){
                    app.randomSong();
                }else{
                    app.nextSong();
                }
                //app.nextSong();
                audio.play();
                animateThumb.cancel();
            }else{
                app.repeateSong();
                audio.play();
                animateThumb.cancel();
            }
            for(let j = 0; j < songChoosed.length; j++){
                if(j !== app.currentIndex){
                    songChoosed[j].classList.remove('active-song');

                }
                else{
                    songChoosed[j].classList.add('active-song');
                }
            }
        };
        //xử lí nút next
        nextBtn.onclick = function(){
            app.isRepeate = false;
            if(app.isRandom === true){
                app.randomSong();
            }else{
                app.nextSong();
            }
            audio.play();
            if(app.isPlaying === true){
                animateThumb.cancel();
            }
            else{
                app.isPlaying = true;
                animateThumb.cancel();
                player.classList.add('playing');
                animateThumb.play();
            }
            
            app.handlePlayThumb();
            app.scrollToActiveSong();
        }

        //xử lí nút tua ngược
        prevBtn.onclick = function(){
            this.isRepeate = false;
            app.prevSong();
            audio.play();
            if(app.isPlaying === true){
                animateThumb.cancel();
            }
            else{
                app.isPlaying = true;
                animateThumb.cancel();
                player.classList.add('playing');
                animateThumb.play();
            }
            for(let j = 0; j < songChoosed.length; j++){
                if(j !== app.currentIndex){
                    songChoosed[j].classList.remove('active-song');


                }
                else{
                    songChoosed[j].classList.add('active-song');
                }
            }
            app.handlePlayThumb();
            app.scrollToActiveSong();
        };
        //xử lí repeat
        repeatBtn.onclick = function(){
            repeatBtn.classList.toggle("active");
            //app.isRepeate = !app.isRepeate
            if(repeatBtn.classList.contains("active")){
                app.isRepeate = true;
            }
            else{
                app.isRepeate = false;
                audio.loop = false;
            }
            app.setConfig("isRepeat", app.isRepeate);
        }
        randomBtn.onclick = function(){
            randomBtn.classList.toggle("active");
            app.isRandom = !app.isRandom
            if(randomBtn.classList.contains("active")){
                app.isRandom = true;
            }
            else{
                app.isRandom = false;
            }
            app.setConfig("isRandom", app.isRandom);
            //app.randomSong();
        };

        //chọn bài
        const songChoosed = playlist.querySelectorAll('.song');
        for(let i = 0; i < songChoosed.length; i++) {



            //xử lí hiển thị nút play/pause khi hover playlist
            const playThumbBtn = songChoosed[i].querySelector('.btn-thumb-play');
            const pauseThumbBtn = songChoosed[i].querySelector('.btn-thumb-pause');

            songChoosed[i].onmouseover = function(e){
                for(let j = 0; j < songChoosed.length; j++) {
                    const playThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-play');
                    const pauseThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-pause');
                    console.log("active: " + songChoosed[i].classList.contains('active-song'));
                    if(songChoosed[j].classList.contains('active-song') === false){
                        //khi không hover thì none cả 2 nút
                        playThumbBtn__.style.display = "none";
                        pauseThumbBtn__.style.display = "none";
                    }
                    
                }
                //nếu bài nhạc đang isPlaying, currentIndex bằng bài được active, và app đang chạy thì đúng
                if(app.isPlaying &&app.currentIndex === i &&player.classList.contains("playing") ){
                    playThumbBtn.style.display = "none";
                    pauseThumbBtn.style.display = "inline-block";
                    console.log("hiển thị pause");

                }
                else{
                    console.log("hiển thị play");
                    console.log(playThumbBtn);
                    playThumbBtn.style.display = "inline-block";
                    pauseThumbBtn.style.display = "none";
                }
                e.stopPropagation();
                //bắt sự kiện click khi đang hover
                const playThumb_ = songChoosed[i].querySelector('.thumb');
                playThumb_.onclick = function(e){
                    e.stopPropagation();


                    if(!songChoosed[i].classList.contains('active-song')){
                        app.currentIndex = i;
                        const tempVal = progressInput.value;
                        app.loadCurrentSong();
                        progressInput.value = 0;
                        // player.classList.remove('playing');
                        animateThumb.cancel();
                        app.isPlaying = false;
                    }
                    
                    
                    
                    if(app.isPlaying === false){
                        console.log("play roi nhe Tu");
                        audio.play();
                        playThumbBtn.style.display = "none";
                        pauseThumbBtn.style.display = "inline-block";
                        app.isPlaying = true;
                        player.classList.add('playing');
                        animateThumb.play();
                    }
                    else{
                        console.log("chua play nhe Tu");
                        playThumbBtn.style.display = "inline-block";
                        pauseThumbBtn.style.display = "none";
                        app.isPlaying = false;
                        player.classList.remove('playing');
                        animateThumb.pause();
                        audio.pause();
                    }
                    app.handlePlayThumb();
                    for(let j = 0; j < songChoosed.length; j++){
                        if(j !== app.currentIndex){
                            songChoosed[j].classList.remove('active-song');


                        }
                    }
                    songChoosed[i].classList.add('active-song');

                };
                
                // const options = songChoosed[i].querySelector('.option');
                // options.onmouseover = function(){
                //     e.stopPropagation(); 
                //     console.log("options: " + i);
                // };
            };
            songChoosed[i].onmouseout = function(e){
                e.stopPropagation();
                playThumbBtn.style.display = "none";
                pauseThumbBtn.style.display = "none";
                if(songChoosed[i].classList.contains('active-song') === true){
                    console.log("playing: " + app.isPlaying);
                    if(app.isPlaying){
                        playThumbBtn.style.display = "none";
                        pauseThumbBtn.style.display = "inline-block";
                    }
                    else{
                        playThumbBtn.style.display = "inline-block";
                        pauseThumbBtn.style.display = "none";
                    }
                        
                }
               
            };
            //active bài hát khi click
            songChoosed[i].onclick = function(e){
                if(songChoosed[i].classList.contains("active-song")){
                    return;
                }
                app.currentIndex = i;
                app.setConfig("currentIndex",i);
                app.loadCurrentSong();
                //audio.play();
                progressInput.value = 0;
                player.classList.remove('playing');
                animateThumb.cancel();
                app.isPlaying = false;
                for(let j = 0; j < songChoosed.length; j++) {
                    const playThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-play');
                    const pauseThumbBtn__ = songChoosed[j].querySelector('.btn-thumb-pause');
                    if(j!== app.currentIndex){
                        //khi không hover thì none cả 2 nút
                        playThumbBtn__.style.display = "none";
                        pauseThumbBtn__.style.display = "none";
                    }
                    
                }

                for(let j = 0; j < songChoosed.length; j++){
                    if(j !== app.currentIndex){
                        songChoosed[j].classList.remove('active-song');}
                }
                songChoosed[i].classList.add('active-song');

                

                //nut play trong song duoc chon
                //xử lí khi nhấn nút play trong thumb
                const playThumb = songChoosed[i].querySelector('.thumb');
                console.log(playThumb);
               
    
        
                
            }
        };


        //xu li option
        playlist.onclick = function(e){
            e.stopPropagation();
            const listNode = e.target.closest('.song:not(.active-song)');
            if(e.target.closest('.option')){
                console.log(listNode);
            }
        }
    },
       
    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    start: function () {
        //load config
        this.loadConfig();
        //Định nghĩa thuộc tính
        this.defineProperties();
        //ném dữ liệu
        this.render();
        //nhạc 
        this.loadCurrentSong(); 

        console.log(this.isRandom);
        //chọn bài ngẫu nhiên
        //this.chooseSongInList();
        //Sự kiện
        this.handleEvents();
    }
}
app.start();
