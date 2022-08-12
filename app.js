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
const lyrics = document.querySelector(".lyrics");
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
            name: "Dù Cho Mai về Sau",
            singer: "buitruonglinh x Freak D",
            path: "./assets/music/DuChoMaiVeSau.mp3",
            img: "./assets/img/DuChoMaiVeSau.jpg",
            lyric:`<div>Bầu trời đ&ecirc;m kh&ocirc;ng m&acirc;y kh&ocirc;ng sao<br>Trăng treo tr&ecirc;n cao khi l&ograve;ng anh vẫn nhớ nhung em nhiều<br>Anh l&agrave;m sao c&oacute; thể ngừng suy nghĩ đến đ&ocirc;i m&ocirc;i em d&ugrave; chỉ một gi&acirc;y</div>
            <p><br></p>
            <div>Mặc cho ta đi b&ecirc;n nhau bao l&acirc;u<br>Em đ&acirc;u hay anh cần bao c&acirc;u n&oacute;i anh y&ecirc;u em<br>Chỉ để em sẽ một lần nh&igrave;n thấy tr&aacute;i tim anh đang rung động biết bao</div>
            <p><br></p>
            <div>D&ugrave; lời n&oacute;i c&oacute; l&agrave; gi&oacute; bay<br>Anh vẫn mong sau n&agrave;y ch&uacute;ng ta trở th&agrave;nh của nhau<br>Mệt th&igrave; cứ ngo&aacute;i lại ph&iacute;a sau anh vẫn lu&ocirc;n đ&acirc;y m&agrave;</div>
            <p><br></p>
            <div>D&ugrave; thời gian kh&ocirc;ng chịu đứng y&ecirc;n<br>Để cho ch&iacute;nh anh kh&ocirc;ng c&ograve;n ngẩn ngơ cũng th&ocirc;i mơ mộng<br>Th&igrave; anh vẫn lu&ocirc;n d&agrave;nh những c&acirc;u ca trong l&ograve;ng anh cho người m&atilde;i th&ocirc;i</div>
            <p><br></p>
            <div>D&ugrave; cho mai về sau<br>M&igrave;nh kh&ocirc;ng b&ecirc;n cạnh nhau<br>L&agrave;m tim anh quặn đau<br>Anh tr&ocirc;ng ng&oacute;ng bao nhi&ecirc;u l&acirc;u<br>D&ugrave; vương vấn u sầu<br>M&ugrave;a thu c&oacute; phai m&agrave;u<br>Anh vẫn muốn y&ecirc;u em</div>
            <p><br></p>
            <div>D&ugrave; cho mu&ocirc;n tr&ugrave;ng phương<br>C&ograve;n bao nhi&ecirc;u lời thương<br>D&ugrave; m&ecirc;nh m&ocirc;ng đại dương<br>Phai đi sắc hương mơ m&agrave;ng<br>Anh vẫn y&ecirc;u m&igrave;nh em th&ocirc;i đấy<br>Em ơi đừng để t&igrave;nh anh dở dang</div>
            <p><br></p>
            <div>Rất nhiều c&acirc;u trả lời chỉ để em nhớ được điều n&agrave;y nữa th&ocirc;i<br>Anh vẫn lu&ocirc;n muốn ở cạnh em bất kể d&ugrave; cho nhiều ng&agrave;y nữa tr&ocirc;i<br>Hồi đầu giả vờ ngơ ngẩn một m&igrave;nh dưới t&aacute;n l&aacute; c&acirc;y m&agrave; ngắm trời<br>Ai biết quen được mấy th&aacute;ng mới ph&aacute;t hiện em cũng kh&aacute; nh&acirc;y v&agrave; lắm lời</div>
            <p><br></p>
            <div>Em th&igrave; vẫn đ&aacute;ng y&ecirc;u trừ những l&uacute;c dở chứng c&aacute;u gắt mắng đủ điều<br>Đ&aacute;ng y&ecirc;u từ c&aacute;i d&aacute;ng điệu dựa v&agrave;o anh mỗi khi trời tắt nắng buổi chiều<br>Biết l&agrave; l&agrave;m dược sĩ n&ecirc;n kh&oacute; t&iacute;nh hay nhắc nhắn nhủ nhiều<br>Như l&agrave; &ocirc;m quả bom nổ chậm v&igrave; anh m&agrave; y&ecirc;u em th&igrave; phải chắc chắn đủ liều</div>
            <p><br></p>
            <div>Cho thời gian đưa lối<br>Anh kh&ocirc;ng mong điều g&igrave; xa x&ocirc;i<br>Y&ecirc;u chỉ m&igrave;nh em th&ocirc;i khiến anh thức thao cứ mỗi đ&ecirc;m về</div>
            <p><br></p>
            <div>Em lại xinh như thế<br>Sao m&agrave; kh&ocirc;ng l&agrave;m cho anh m&ecirc; đắm như trong giấc mơ<br>Khi lắng nghe tiếng y&ecirc;u bấy l&acirc;u anh mong chờ</div>
            <p><br></p>
            <div>Em nhẹ ng&acirc;n c&acirc;u h&aacute;t<br>Theo điệu đ&agrave;n anh feel<br>Ta đi b&ecirc;n cạnh nhau bao nhi&ecirc;u thế nhưng vẫn lu&ocirc;n nhớ em hơn nhiều</div>
            <p><br></p>
            <div>Anh mong d&ugrave; mai n&agrave;y c&oacute; giận th&igrave; m&igrave;nh cũng đừng c&oacute; c&atilde;i lời nhau<br>Khi người anh thương chỉ lu&ocirc;n c&oacute; một</div>
            <p><br></p>
            <div>D&ugrave; cho mai về sau (d&ugrave; cho m&atilde;i về sau)<br>M&igrave;nh kh&ocirc;ng b&ecirc;n cạnh nhau<br>L&agrave;m tim anh quặn đau<br>Anh tr&ocirc;ng ng&oacute;ng bao nhi&ecirc;u l&acirc;u<br>D&ugrave; vương vấn u sầu<br>M&ugrave;a thu c&oacute; phai m&agrave;u<br>Anh vẫn muốn y&ecirc;u em</div>
            <p><br></p>
            <div>D&ugrave; cho mu&ocirc;n tr&ugrave;ng phương<br>C&ograve;n bao nhi&ecirc;u lời thương<br>D&ugrave; m&ecirc;nh m&ocirc;ng đại dương<br>Phai đi sắc hương mơ m&agrave;ng<br>Anh vẫn y&ecirc;u m&igrave;nh em th&ocirc;i đấy<br>Em ơi đừng để t&igrave;nh anh dở dang</div>
            <p><br></p>
            <div>D&ugrave; lời n&oacute;i c&oacute; l&agrave; gi&oacute; bay<br>D&ugrave; ng&agrave;y th&aacute;ng c&oacute; c&ograve;n đổi thay<br>Th&igrave; anh vẫn m&atilde;i muốn nắm đ&ocirc;i b&agrave;n tay dắt theo những hy vọng đong đầy</div>
            <div>D&ugrave; cho mai về sau<br>M&igrave;nh kh&ocirc;ng b&ecirc;n cạnh nhau<br>L&agrave;m tim anh quặn đau<br>Anh tr&ocirc;ng ng&oacute;ng bao nhi&ecirc;u l&acirc;u<br>D&ugrave; vương vấn u sầu<br>M&ugrave;a thu c&oacute; phai m&agrave;u<br>Anh vẫn muốn y&ecirc;u em</div>
            <p><br></p>
            <div>D&ugrave; cho mu&ocirc;n tr&ugrave;ng phương<br>C&ograve;n bao nhi&ecirc;u lời thương<br>D&ugrave; m&ecirc;nh m&ocirc;ng đại dương<br>Phai đi sắc hương mơ m&agrave;ng<br>Anh vẫn y&ecirc;u m&igrave;nh em th&ocirc;i đấy<br>Y&ecirc;u em m&agrave; chẳng một lời thở than</div>`
        },
        {
            name: "Ngày Đầu Tiên",
            singer: "Đức Phúc",
            path: "./assets/music/NgayDauTien.mp3",
            img: "./assets/img/NgayDauTien.jpg",
            lyric:`<div>Nhiều khi kiếm đ&acirc;u cổ t&iacute;ch tr&ecirc;n đời<br>Thật l&agrave; điều may mắn nếu như c&oacute; người<br>Cầm tay bước đi đến cuối con đường<br>Bao giờ th&igrave; sẽ tới?</div>
            <p><br></p>
            <div>Dẫu anh kh&ocirc;ng l&agrave; ch&agrave;ng ho&agrave;ng tử m&agrave; em đắm say<br>Chỉ l&agrave; giản đơn th&ocirc;i như h&igrave;nh h&agrave;i anh l&uacute;c n&agrave;y<br>Anh vẫn muốn quỳ gối trước n&agrave;ng c&ocirc;ng ch&uacute;a đẹp nhất đ&ecirc;m nay</div>
            <p><br></p>
            <div>Điều anh muốn l&agrave; lu&ocirc;n thấy em cười<br>Chẳng cần phải lo lắng v&igrave; anh ở đ&acirc;y rồi<br>Để anh che chở em hết qu&atilde;ng đường ng&agrave;y sau nh&eacute;</div>
            <p><br></p>
            <div>Ng&agrave;y đầu ti&ecirc;n c&ugrave;ng nhau sống suốt đời<br>C&ugrave;ng nh&igrave;n về ph&iacute;a trước cầm tay m&atilde;i kh&ocirc;ng rời<br>V&agrave; con tim c&ugrave;ng chung một nhịp khi ta c&oacute; đ&ocirc;i</div>
            <p><br></p>
            <div>Điều anh mong thật ra chẳng xa x&ocirc;i đ&acirc;u<br>Chỉ cần ta c&ugrave;ng nhau đến khi bạc đầu<br>D&ugrave; mai sao nhiều điều l&agrave;m ta lo &acirc;u</div>
            <p><br></p>
            <div>Yes I know<br>Yes I know</div>
            <p><br></p>
            <div>Dẫu anh kh&ocirc;ng l&agrave; ch&agrave;ng ho&agrave;ng tử m&agrave; em đắm say<br>Chỉ l&agrave; giản đơn th&ocirc;i như h&igrave;nh h&agrave;i anh l&uacute;c n&agrave;y<br>Anh vẫn muốn quỳ gối trước n&agrave;ng c&ocirc;ng ch&uacute;a đẹp nhất đ&ecirc;m nay</div>
            <p><br></p>
            <div>Điều anh muốn l&agrave; lu&ocirc;n thấy em cười<br>Chẳng cần phải lo lắng v&igrave; anh ở đ&acirc;y rồi<br>Để anh che chở em hết qu&atilde;ng đường ng&agrave;y sau nh&eacute;</div>
            <p><br></p>
            <div>Ng&agrave;y đầu ti&ecirc;n c&ugrave;ng nhau sống suốt đời<br>C&ugrave;ng nh&igrave;n về ph&iacute;a trước cầm tay m&atilde;i kh&ocirc;ng rời<br>V&agrave; con tim c&ugrave;ng chung một nhịp khi ta c&oacute; đ&ocirc;i</div>
            <p><br></p>
            <div>Ng&agrave;y h&ocirc;m nay tuyệt vời nhất tr&ecirc;n đời<br>V&igrave; l&agrave; ng&agrave;y đầu ti&ecirc;n m&agrave; ta c&oacute; nhau rồi<br>V&agrave; từ nay về sau sống chung trong một thế giới</div>
            <p><br></p>
            <div>Ng&agrave;y đầu ti&ecirc;n c&ugrave;ng nhau sống suốt đời<br>C&ugrave;ng nh&igrave;n về ph&iacute;a trước cầm tay m&atilde;i kh&ocirc;ng rời<br>V&agrave; con tim c&ugrave;ng chung một nhịp khi ta c&oacute; đ&ocirc;i</div>
            <div>Cuộc đời anh l&agrave; để cho em, ri&ecirc;ng em m&atilde;i th&ocirc;i</div>`
        },
        {
            name: "Rung Động",
            singer: "DƯƠNG EDWARD x VŨ KHẮC ANH",
            path: "./assets/music/RungDong.mp3",
            img: "./assets/img/RungDong.jpg",
            lyric:`<div>Anh chẳng biết thế n&agrave;o l&agrave; y&ecirc;u<br>Chỉ biết l&agrave; mỗi khi kh&ocirc;ng được nh&igrave;n em<br>L&ograve;ng lại d&acirc;ng l&ecirc;n bao nhi&ecirc;u cảm x&uacute;c thấy rất kh&oacute; tả<br>Anh nhớ em nhiều phải chăng đ&oacute; ch&iacute;nh l&agrave; y&ecirc;u<br>Buồn v&igrave; em đau vui khi tr&ecirc;n m&ocirc;i em nở nụ cười<br>Anh muốn l&agrave; người mang đến em b&igrave;nh y&ecirc;n</div>
            <p><br></p>
            <div>Em c&oacute; muốn c&ugrave;ng anh đi qua bao b&atilde;o gi&ocirc;ng<br>Em c&oacute; muốn ở cạnh b&ecirc;n anh đến suốt đời<br>Một thế giới ri&ecirc;ng anh v&agrave; em<br>Với những niềm vui hạnh ph&uacute;c đắm say<br>Anh muốn l&agrave; người chở che khi em yếu mềm<br>Anh muốn được v&ograve;ng tay ra &ocirc;m em mỗi đ&ecirc;m<br>Liệu anh c&oacute; thể l&agrave; người em chọn s&aacute;nh đ&ocirc;i</div>
            <p><br></p>
            <div>V&agrave; anh đ&atilde; y&ecirc;u em từ l&acirc;u lắm<br>Ph&uacute;t gi&acirc;y anh với em chạm mặt ng&agrave;y ấy<br>Chỉ tựa như m&acirc;y tr&ocirc;i ngang qua th&ocirc;i<br>Nhưng lỡ thương rồi (nhưng lỡ thương rồi)<br>Anh đ&atilde; rung động chợt thấy th&ecirc;m y&ecirc;u cuộc sống<br>Đừng buồn em ơi ngay b&ecirc;n em đ&atilde; c&oacute; d&aacute;ng anh rồi (c&oacute; d&aacute;ng anh rồi)<br>Anh sẽ l&agrave; người mang đến cho em b&igrave;nh y&ecirc;n oh</div>
            <p><br></p>
            <div>Em c&oacute; muốn c&ugrave;ng anh đi qua bao b&atilde;o gi&ocirc;ng<br>Em c&oacute; muốn ở cạnh b&ecirc;n anh đến suốt đời<br>Một thế giới ri&ecirc;ng anh v&agrave; em<br>Với những niềm vui hạnh ph&uacute;c đắm say<br>Anh muốn l&agrave; người chở che khi em yếu mềm (yếu mềm)<br>Anh muốn được v&ograve;ng tay ra &ocirc;m em mỗi đ&ecirc;m<br>Liệu anh c&oacute; thể l&agrave; người em chọn s&aacute;nh đ&ocirc;i</div>
            <p><br></p>
            <div>Em c&oacute; muốn c&ugrave;ng anh đi qua bao b&atilde;o gi&ocirc;ng<br>C&oacute; muốn ở cạnh b&ecirc;n anh suốt đời<br>Một thế giới ri&ecirc;ng anh v&agrave; em với những niềm vui hạnh ph&uacute;c đắm say<br>Anh muốn l&agrave; người chở che khi em yếu mềm (yếu mềm)<br>Anh muốn được v&ograve;ng tay ra &ocirc;m em mỗi đ&ecirc;m<br>Liệu anh c&oacute; thể l&agrave; người em chọn s&aacute;nh đ&ocirc;i<br>Liệu anh c&oacute; thể l&agrave; người s&aacute;nh đ&ocirc;i</div>`
        },
        {
            name: "Đường Tôi Chở Em Về",
            singer: "Buitruonglinh",
            path: "./assets/music/DuongToiChoEmVe.mp3",
            img: "./assets/img/DuongToiChoEmVe.jpg",
            lyric:`<div>Xe đạp l&aacute;ch c&aacute;ch t&ocirc;i v&acirc;̃n chưa quen<br>Đường th&igrave; tối chơi vơi c&ograve;n t&ocirc;i vẫn cứ đứng đợi<br>Em nhẹ bước đến mi đã th&ocirc;i hoen<br>Trời trở gi&oacute; heo may v&igrave; t&ocirc;i đã lỡ y&ecirc;u em</div>
            <p><br></p>
            <div>Cũng may đường về nh&agrave; em qu&aacute; xa<br>T&ocirc;i mới được tr&ocirc;ng ng&oacute;ng em bu&ocirc;ng lời h&aacute;t<br>Nhớ thương ngại ng&ugrave;ng nh&igrave;n em tho&aacute;ng qua<br>Hạ ơi đừng tr&ocirc;i mãi, mặc k&ecirc;̣ em với t&ocirc;i đi về</div>
            <p><br></p>
            <div>Mới chỉ nh&igrave;n em kh&oacute;c, t&ocirc;i b&ocirc;̃ng chợt nh&acirc;̣n ra đã y&ecirc;u em rồi<br>S&aacute;ng trong cho m&acirc;y ngừng tr&ocirc;i<br>Rọi &aacute;nh mắt em trong l&ograve;ng t&ocirc;i<br>Ng&acirc;̣p ngừng chưa n&oacute;i<br>Mai sau đ&ecirc;̉ cho anh ng&oacute;ng em đi về<br>Khoảnh khắc t&ocirc;i chưa n&ecirc;n c&acirc;u<br>H&agrave;ng mi ướt run run bu&ocirc;ng d&agrave;i theo cơn gi&oacute;</div>
            <p><br></p>
            <div>V&eacute;n nhẹ t&agrave; &aacute;o tr&ecirc;n con đường t&ocirc;i đi với em<br>D&ugrave; ph&iacute;a trước c&oacute; mưa r&agrave;o<br>Tr&ecirc;n đường hai ta sẽ qua<br>Chỉ muốn em d&agrave;nh tặng cho t&ocirc;i những ng&acirc;y thơ đầu<br>Được d&ocirc;̃ d&agrave;nh em khi em buồn<br>Đứng chờ em đưa em về từng ng&agrave;y</div>
            <p><br></p>
            <div>Đường n&agrave;y l&agrave; đường cho t&ocirc;i chở em mãi th&ocirc;i kh&ocirc;ng dừng<br>Đường t&ocirc;i đi c&ugrave;ng em mãi th&ocirc;i kh&ocirc;ng ngừng<br>Chợt hi&ecirc;̣n l&ecirc;n d&ograve;ng suy nghĩ t&ocirc;i chưa từng<br>K&ecirc;̉ em nghe lời y&ecirc;u biết đ&acirc;u, th&ocirc;i đừng</div>
            <p><br></p>
            <div>Đợi chờ em như chờ &aacute;nh nắng l&ecirc;n<br>Chờ cho lại nghe tiếng con tim th&ocirc;̉n thức<br>Nhẹ nh&agrave;ng hương hoa gần đến s&aacute;t b&ecirc;n<br>Nhẹ theo chiều phai gi&oacute; dựa vai t&ocirc;i m&ocirc;̃i khi đi về</div>
            <p><br></p>
            <div>Mới chỉ nh&igrave;n em kh&oacute;c t&ocirc;i b&ocirc;̃ng chợt nh&acirc;̣n ra đã y&ecirc;u em rồi<br>S&aacute;ng trong cho m&acirc;y ngừng tr&ocirc;i<br>Rọi &aacute;nh mắt em trong l&ograve;ng t&ocirc;i<br>Ng&acirc;̣p ngừng chưa n&oacute;i<br>Mai sau đ&ecirc;̉ cho anh ng&oacute;ng em đi về<br>Khoảnh khắc t&ocirc;i chưa n&ecirc;n c&acirc;u<br>Hoa cứ ng&aacute;t hương em đ&ecirc;m h&egrave; d&ograve;ng s&ocirc;ng</div>
            <p><br></p>
            <div>Khẽ v&eacute;n nhẹ t&agrave; &aacute;o tr&ecirc;n con đường t&ocirc;i đi với em<br>D&ugrave; ph&iacute;a trước c&oacute; mưa r&agrave;o<br>Tr&ecirc;n đường hai ta sẽ qua<br>Chỉ muốn em d&agrave;nh tặng cho t&ocirc;i những ng&acirc;y thơ đầu<br>Được d&ocirc;̃ d&agrave;nh em khi em buồn<br>Đứng chờ em nơi em về</div>
            <p><br></p>
            <div>Sẽ chẳng cần l&ecirc;n tiếng<br>T&acirc;m tư n&agrave;y đ&ecirc;̉ t&ocirc;i cất ri&ecirc;ng cho m&igrave;nh<br>Rồi v&acirc;̃n đạp xe như bao ng&agrave;y<br>Hạ v&acirc;̃n dần tr&ocirc;i</div>
            <p><br></p>
            <div>Nhớ thương em<br>T&ocirc;i đưa em về<br>Bầu trời sao s&aacute;ng l&ecirc;n<br>Rọi &aacute;nh mắt em trong l&ograve;ng t&ocirc;i</div>
            <p><br></p>
            <div>Nhớ thương em<br>Lỡ mai sau n&agrave;y<br>M&igrave;nh chẳng th&ecirc;̉ mãi đ&oacute;n đưa<br>Lại cứ thế ng&oacute;ng tr&ocirc;ng</div>
            <div>Đường n&agrave;y l&agrave; đường cho t&ocirc;i chở em mãi th&ocirc;i kh&ocirc;ng dừng<br>Đường t&ocirc;i đi c&ugrave;ng em mãi th&ocirc;i kh&ocirc;ng ngừng<br>Chợt hi&ecirc;̣n l&ecirc;n d&ograve;ng suy nghĩ t&ocirc;i chưa từng<br>K&ecirc;̉ em nghe lời y&ecirc;u biết đ&acirc;u...</div>
            <p><br></p>
            <div>Đường n&agrave;y l&agrave; đường cho t&ocirc;i chở em mãi th&ocirc;i kh&ocirc;ng dừng<br>Đường t&ocirc;i đi c&ugrave;ng em mãi th&ocirc;i kh&ocirc;ng ngừng<br>Chợt hi&ecirc;̣n l&ecirc;n d&ograve;ng suy nghĩ t&ocirc;i chưa từng<br>K&ecirc;̉ em nghe lời y&ecirc;u biết đ&acirc;u, th&ocirc;i đừng</div>`
        },
        {
            name: "Có Hẹn Với Thanh Xuân",
            singer: "Monstar",
            path: "./assets/music/CoHenVoiThanhXuan.mp3",
            img: "./assets/img/CoHenVoiThanhXuan.jpg",
            lyric:`<div>Cũng đ&atilde; đến l&uacute;c nghẹn ng&agrave;o<br>N&oacute;i lời ch&agrave;o đến mối t&igrave;nh đầu<br>Một cuốn s&aacute;ch ngọt ng&agrave;o m&agrave; đ&ocirc;i ta từng viết<br>Em như b&ocirc;ng hoa mặt trời<br>C&oacute; nụ cười đốt ch&aacute;y l&ograve;ng người<br>C&oacute; lẽ em l&agrave; thanh xu&acirc;n của t&ocirc;i</div>
            <p><br></p>
            <div>Từ ng&agrave;y mai t&ocirc;i phải đi<br>Hẹn gặp em trong một khi kh&aacute;c<br>Kỷ niệm đ&ocirc;i ta đ&agrave;nh ghi nhớ trong tim<br>N&agrave;y người ơi em đừng qu&ecirc;n<br>Lần đầu ti&ecirc;n ta bước đến<br>M&igrave;nh đ&atilde; ch&igrave;m v&agrave;o v&ugrave;ng trời y&ecirc;u thương</div>
            <p><br></p>
            <div>Nếu lỡ mai đ&acirc;y v&ocirc; t&igrave;nh thấy được nhau<br>H&atilde;y để cho t&ocirc;i n&oacute;i với em lời ch&agrave;o<br>Nếu tr&aacute;i tim ta chung nỗi nhớ đong đầy<br>Hẹn gặp lại em ng&agrave;y th&aacute;ng của sau n&agrave;y</div>
            <p><br></p>
            <div>Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br>Hoo-uh-uh-ah ha-ah-ah hoo-yeah<br>Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br>Hẹn gặp lại em ng&agrave;y th&aacute;ng của sau n&agrave;y</div>
            <p><br></p>
            <div>Oh oh, t&ocirc;i giờ đang nơi xa<br>Bận l&ograve;ng nhiều điều về em (worry about you)<br>Em b&igrave;nh t&acirc;m hơn chưa<br>Hay l&agrave; nước mắt nh&ograve;e suốt đ&ecirc;m<br>Một ng&agrave;y của em dạo n&agrave;y như thế n&agrave;o?<br>Thường đi qu&aacute;n quen hay đến nơi ồn &agrave;o<br>Từ ng&agrave;y tụi m&igrave;nh kết th&uacute;c b&acirc;y giờ cuộc sống em ra sao?</div>
            <p><br></p>
            <div>Th&ocirc;i th&igrave; mong em đừng kh&oacute;c nữa<br>Đừng bỏ bữa những ng&agrave;y sau<br>Kh&ocirc;ng c&ograve;n anh, bao điều vẫn tốt như xưa<br>Mong em ngủ ngoan kh&ocirc;ng ho&agrave;i nghĩ nữa<br>Đừng thức trắng đ&ecirc;m trầm tư<br>V&igrave; anh chẳng muốn thấy người m&agrave; m&igrave;nh y&ecirc;u đau</div>
            <p><br></p>
            <div>Nếu lỡ mai đ&acirc;y v&ocirc; t&igrave;nh thấy được nhau<br>H&atilde;y để cho t&ocirc;i n&oacute;i với em lời ch&agrave;o<br>Nếu tr&aacute;i tim ta chung nỗi nhớ đong đầy<br>Hẹn gặp lại em ng&agrave;y th&aacute;ng của sau n&agrave;y</div>
            <p><br></p>
            <div>Nếu lỡ mai đ&acirc;y v&ocirc; t&igrave;nh thấy được nhau<br>H&atilde;y để cho t&ocirc;i n&oacute;i với em lời ch&agrave;o<br>Nếu tr&aacute;i tim ta chung nỗi nhớ đong đầy<br>Hẹn gặp lại em ng&agrave;y th&aacute;ng của sau n&agrave;y (muốn n&oacute;i với em thật nhiều)</div>
            <p><br></p>
            <div>Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br>Hoo-uh-uh-ah ha-ah-ah hoo<br>Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br>Hẹn gặp lại em ng&agrave;y th&aacute;ng của sau n&agrave;y</div>`
        },
        {
            name: "Gác Lại Âu Lo",
            singer: "DALAB",
            path: "./assets/music/GacLaiAuLo.mp3",
            img: "./assets/img/GacLaiAuLo.jpg",
            lyric:`<div>Anh đi lạc trong s&oacute;ng gi&oacute; cuộc đời<br>N&agrave;o biết đ&acirc;u sớm mai liệu b&igrave;nh y&ecirc;n c&oacute; tới<br>&Acirc;u lo chạy theo những &aacute;nh sao đ&ecirc;m<br>Ng&agrave;y cứ tr&ocirc;i chớp mắt th&agrave;nh phố đ&atilde; s&aacute;ng đ&egrave;n</div>
            <p><br></p>
            <div>Ta cứ lặng lẽ chạy thật mau<br>Y&ecirc;u thương chẳng n&oacute;i kịp th&agrave;nh c&acirc;u<br>Biết đ&acirc;u liệu mai c&ograve;n thấy nhau<br>Thức giấc để anh c&ograve;n được thấy<br>&Aacute;nh mắt của em nhẹ nh&igrave;n anh<br>Đ&ocirc;i tay n&agrave;y sẽ kh&ocirc;ng xa rời</div>
            <p><br></p>
            <div>Tạm g&aacute;c hết những &acirc;u lo lại, c&ugrave;ng anh bước tr&ecirc;n con đường<br>Ta sẽ kh&ocirc;ng quay đầu để rồi phải tiếc nuối những chuyện cũ đ&atilde; qua<br>Giữ tr&aacute;i tim lu&ocirc;n y&ecirc;n b&igrave;nh v&agrave; qu&ecirc;n hết những ưu phiền vấn vương<br>Cuộc đời n&agrave;y được bao lần n&oacute;i y&ecirc;u</div>
            <p><br></p>
            <div>Anh biết nơi để quay về, em biết nơi phải đi<br>Anh biết chỗ tr&uacute; ch&acirc;n dọc đường để tr&aacute;nh cơn mưa hạ đến mỗi chiều<br>Ta biết trao nhau &acirc;n cần, biết mỗi khi vui buồn c&oacute; nhau<br>Thời gian để ta trưởng th&agrave;nh với nhau</div>
            <p><br></p>
            <div>Nhảy với anh đến khi đ&ocirc;i ch&acirc;n r&atilde; rời<br>H&aacute;t anh nghe những c&acirc;u ca từ ng&agrave;y xưa cũ<br>Th&igrave; thầm khẽ anh nghe em vẫn c&ograve;n bao niềm mơ<br>&Ocirc;m lấy anh nghe mưa đầu m&ugrave;a gh&eacute; chơi</div>
            <p><br></p>
            <div>Một gi&acirc;y kh&ocirc;ng thấy nhau như một đời c&ocirc; đơn qu&aacute;<br>Trời m&ugrave; m&acirc;y bỗng nhi&ecirc;n ng&aacute;t xanh khi em khẽ cười<br>Một ng&agrave;y anh biết hết nguy&ecirc;n do của những y&ecirc;n vui trong đời<br>L&agrave; ng&agrave;y duy&ecirc;n kiếp kia đưa ta gần lại với nhau</div>
            <p><br></p>
            <div>Tạm g&aacute;c hết những &acirc;u lo lại, c&ugrave;ng anh bước tr&ecirc;n con đường<br>Ta sẽ kh&ocirc;ng quay đầu để rồi phải tiếc nuối những chuyện cũ đ&atilde; qua<br>Giữ tr&aacute;i tim lu&ocirc;n y&ecirc;n b&igrave;nh v&agrave; qu&ecirc;n hết những ưu phiền vấn vương<br>Cuộc đời n&agrave;y được bao lần n&oacute;i y&ecirc;u</div>
            <p><br></p>
            <div>Anh biết nơi để quay về, em biết nơi phải đi<br>Anh biết chỗ tr&uacute; ch&acirc;n dọc đường để tr&aacute;nh cơn mưa hạ đến mỗi chiều<br>Ta biết trao nhau &acirc;n cần, biết mỗi khi vui buồn c&oacute; nhau<br>Thời gian để ta trưởng th&agrave;nh với nhau</div>
            <p><br></p>
            <div>Bờ vai anh rộng đủ để che chở cho em<br>Was a boy now a man cho em<br>Từng đi lạc ở trong thế giới đi&ecirc;n rồ ngo&agrave;i kia<br>V&agrave; t&igrave;nh y&ecirc;u em trao anh ng&agrave;y ấy đ&atilde; mang anh về b&ecirc;n em<br>Y&ecirc;u em như a fat kid loves cake<br>Nhắm mắt cảm nhận t&igrave;nh y&ecirc;u tan dịu ngọt tr&ecirc;n m&ocirc;i khi em h&ocirc;n m&ocirc;i anh đ&acirc;y<br>Kh&ocirc;ng c&oacute; happy ending<br>Mỗi b&igrave;nh minh ta biết th&ecirc;m trang mới nối d&agrave;i c&acirc;u chuyện m&igrave;nh</div>
            <p><br></p>
            <div>Như trong mơ nơi xa kia xanh biếc xanh biếc<br>Thi&ecirc;n đ&agrave;ng b&ecirc;n em nơi đ&acirc;y anh biết anh biết<br>B&oacute;ng đ&ecirc;m đ&atilde; qua y&ecirc;n b&igrave;nh<br>C&oacute; th&ecirc;m ch&uacute;ng ta nghe l&ograve;ng đ&agrave;n từng c&acirc;u ca<br>Cuộc đời n&agrave;y chẳng hề hối tiếc những th&aacute;ng năm ta đi c&ugrave;ng nhau<br>Anh biết em lu&ocirc;n ở đ&oacute; nơi anh thuộc về</div>
            <p><br></p>
            <div>Tạm g&aacute;c hết những &acirc;u lo lại, c&ugrave;ng anh bước tr&ecirc;n con đường<br>Ta sẽ kh&ocirc;ng quay đầu để rồi phải tiếc nuối những chuyện cũ đ&atilde; qua<br>Giữ tr&aacute;i tim lu&ocirc;n y&ecirc;n b&igrave;nh v&agrave; qu&ecirc;n hết những ưu phiền vấn vương<br>Cuộc đời n&agrave;y được bao lần n&oacute;i y&ecirc;u</div>
            <div>Anh biết nơi để quay về, em biết nơi phải đi<br>Anh biết chỗ tr&uacute; ch&acirc;n dọc đường để tr&aacute;nh cơn mưa hạ đến mỗi chiều<br>Ta biết trao nhau &acirc;n cần, biết mỗi khi vui buồn c&oacute; nhau<br>Thời gian để ta trưởng th&agrave;nh với nhau</div>`
        },
        {
            name: "Em Thích",
            singer: "SEAN X LỬA",
            path: "./assets/music/EmThich.mp3",
            img: "./assets/img/EmThich.jpg",
            lyric:`<div>V&agrave; nếu em thấy c&ocirc; đơn, c&ocirc; đơn<br>Anh sẽ lu&ocirc;n ở đ&acirc;y v&igrave;<br>Anh chẳng muốn c&ocirc;ng ch&uacute;a của anh ướt mi<br>Lại đ&acirc;y để anh &ocirc;m<br>Anh &ocirc;m em thật l&acirc;u n&agrave;<br>Anh sẽ trao hết y&ecirc;u thương<br>Để em qu&ecirc;n mau</div>
            <p><br></p>
            <div>Hai giờ đ&ecirc;m anh vẫn c&ograve;n nhớ<br>Những l&uacute;c ta trao nhau ngọt ng&agrave;o<br>Phải l&agrave;m sao để giữ tr&aacute;i tim<br>Lu&ocirc;n đong đầy m&agrave; kh&ocirc;ng nhạt phai<br>Cho l&ograve;ng anh mơ m&agrave;ng<br>Rồi rơi xuống đ&acirc;y<br>L&agrave;m con tim anh đắm say<br>Chỉ muốn nắm tay người<br>V&agrave; đi hết cuộc đời n&agrave;y</div>
            <p><br></p>
            <div>V&agrave; nếu em thấy c&ocirc; đơn c&ocirc; đơn<br>Anh sẽ lu&ocirc;n ở đ&acirc;y v&igrave;<br>Anh chẳng muốn c&ocirc;ng ch&uacute;a của anh ướt mi<br>Lại đ&acirc;y để anh &ocirc;m<br>Anh &ocirc;m em thật l&acirc;u n&agrave;<br>Anh sẽ trao hết y&ecirc;u thương để em qu&ecirc;n mau</div>
            <p><br></p>
            <div>Yeah yeah<br>Em th&iacute;ch đi dạo phố tr&ecirc;n tay cầm ph&ocirc; mai que<br>Rồi mở b&agrave;i nhạc của anh bật max &acirc;m lượng kề v&ocirc; tai nghe<br>Em th&iacute;ch ăn c&aacute; vi&ecirc;n chi&ecirc;n, em th&iacute;ch hồng tr&agrave; sữa<br>Em n&oacute;i em mong sau n&agrave;y c&oacute; một người chồng l&agrave; Lửa</div>
            <p><br></p>
            <div>Em th&iacute;ch anh sờ đầu em, cảm gi&aacute;c cute kh&oacute; n&oacute;i<br>Anh hỏi em thương anh kh&ocirc;ng l&uacute;c đ&oacute; l&agrave;m em kh&oacute; chối<br>Em th&iacute;ch được anh vếu m&aacute;, rồi đặt nhẹ bờ m&ocirc;i l&ecirc;n<br>Em cũng l&agrave;m ngược lại, để cho c&acirc;n đều đ&ocirc;i b&ecirc;n</div>
            <p><br></p>
            <div>Em th&iacute;ch m&agrave;u xanh m&agrave;u đỏ, kh&ocirc;ng th&iacute;ch m&agrave;u hồng c&aacute;nh sen<br>Em n&oacute;i l&agrave; em c&oacute; ph&eacute;p thuật winx th&igrave; anh đừng h&ograve;ng đ&aacute;nh em<br>Em th&iacute;ch t&igrave;nh y&ecirc;u đơn giản, kh&ocirc;ng th&iacute;ch nhiều điều phức tạp<br>Em n&oacute;i anh ch&iacute;nh l&agrave; nơi vững chắc cho em thật nhiều sức đạp</div>
            <p><br></p>
            <div>Em th&iacute;ch xuống bếp nấu ăn, dở ẹc m&agrave; kh&ocirc;ng d&aacute;m n&oacute;i<br>Con c&aacute; đen thui th&ugrave;i l&ugrave;i ẩn m&igrave;nh ở trong đ&aacute;m kh&oacute;i<br>Em th&iacute;ch ra biển c&ugrave;ng anh, kh&ocirc;ng th&iacute;ch l&agrave;m kẻ sea t&igrave;nh<br>Nếu m&agrave; hiểu được t&iacute;nh t&igrave;nh của em, kể ra cũng cả quy tr&igrave;nh</div>
            <p><br></p>
            <div>V&agrave; nếu em thấy c&ocirc; đơn, c&ocirc; đơn<br>Anh sẽ lu&ocirc;n ở đ&acirc;y v&igrave;<br>Anh chẳng muốn c&ocirc;ng ch&uacute;a của anh ướt mi<br>Lại đ&acirc;y để anh &ocirc;m<br>Anh &ocirc;m em thật l&acirc;u n&agrave;<br>Anh sẽ trao hết y&ecirc;u thương để em qu&ecirc;n mau</div>
            <p><br></p>
            <div>V&agrave; nếu em thấy c&ocirc; đơn, c&ocirc; đơn<br>Anh chẳng muốn c&ocirc;ng ch&uacute;a của anh ướt mi<br>Lại đ&acirc;y để anh &ocirc;m anh &ocirc;m<br>Anh sẽ trao hết y&ecirc;u thương để em qu&ecirc;n mau</div>`
        },
        {
            name: "Phố Đã Lên Đèn",
            singer: "Huyền Tâm Môn",
            path: "./assets/music/PhoDaLenDen.mp3",
            img: "./assets/img/PhoDaLenDen.jpg",
            lyric:`<div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n con đường c&oacute; m&ocirc;i kề m&ocirc;i<br>Phố đ&atilde; l&ecirc;n đ&egrave;n b&ecirc;n người anh thương anh nhớ anh mong<br>C&oacute; nhạc b&ecirc;n cạnh ai kh&ocirc;ng phi&ecirc;u<br>C&oacute; em b&ecirc;n cạnh y&ecirc;u kh&ocirc;ng phai<br>T&igrave;nh y&ecirc;u nằm ngang của anh lu&ocirc;n ng&agrave;n năm</div>
            <p><br></p>
            <div>&hellip;&nbsp;Cơn mưa qua em rời đi cơn mưa qua anh nho&egrave; mi<br>Mong một lần c&oacute; được em để thật l&ograve;ng c&ugrave;ng nhau say đắm<br>Hỡi giấc mơ chưa từng c&oacute; bao giờ gặp gỡ<br>Gi&oacute; cuốn vần thơ<br>Về nơi con tim gi&aacute; buốt bỗng thấy nắng trong l&ograve;ng</div>
            <p><br></p>
            <div>&hellip;&nbsp;Chỉ muốn giữ em cạnh b&ecirc;n<br>Hoen mi cay đừng nho&egrave; th&ecirc;m<br>Mặt trời l&agrave; hoa hướng dương<br>T&igrave;nh y&ecirc;u đơn phương anh c&ograve;n giấu<br>Bao l&acirc;u mong một tr&aacute;i tim mở l&ograve;ng sau<br>C&acirc;u chuyện nhiều buồn đau<br>&Aacute;nh sao soi m&agrave;n đ&ecirc;m kề b&ecirc;n nhau</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n con đường c&oacute; m&ocirc;i kề m&ocirc;i<br>Phố đ&atilde; l&ecirc;n đ&egrave;n b&ecirc;n người anh thương anh nhớ anh mong<br>C&oacute; nhạc b&ecirc;n cạnh ai kh&ocirc;ng phi&ecirc;u<br>C&oacute; em b&ecirc;n cạnh y&ecirc;u kh&ocirc;ng phai<br>T&igrave;nh y&ecirc;u nằm ngang của anh lu&ocirc;n ng&agrave;n năm</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n em nh&igrave;n tr&aacute;i tim đại dương<br>Phố đ&atilde; l&ecirc;n đ&egrave;n đi t&igrave;m lời ca anh viết ch&acirc;n phương<br>Mưa rơi chơi vơi c&ograve;n mơ về em<br>Nguy&ecirc;n vẹn c&acirc;u chuyện ta từng xem<br>Khoảng c&aacute;ch sẽ kh&ocirc;ng xa<br>Nếu như ta coi nhau l&agrave; tất cả</div>
            <p><br></p>
            <div>&hellip;&nbsp;Th&acirc;u đ&ecirc;m qua em say do ai<br>Chắc chắn l&agrave; your eyes<br>Ơ qu&aacute; nhiều &ocirc; l&agrave; anh đ&acirc;y y&ecirc;u qu&aacute; nhờ<br>Chẳng biết trao lời đường mật hay thơ<br>C&oacute; t&ecirc;n em ở đầu m&ocirc;i uống bao nhi&ecirc;u cũng chẳng cần mồi đ&acirc;u<br>Nghe n&oacute;i y&ecirc;u thương nhiều qu&aacute; thời gian tự ho&aacute; th&agrave;nh chuyện t&igrave;nh đậm s&acirc;u<br>Họ vẫn vậy vẫn cứ gần nhau t&igrave;nh m&igrave;nh vẫn vậy vẫn cứ buồn đau<br>V&igrave; sao m&agrave; hai giờ đ&ecirc;m c&ograve;n tương tư</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n con đường c&oacute; m&ocirc;i kề m&ocirc;i<br>Phố đ&atilde; l&ecirc;n đ&egrave;n b&ecirc;n người anh thương anh nhớ anh mong<br>C&oacute; nhạc b&ecirc;n cạnh ai kh&ocirc;ng phi&ecirc;u<br>C&oacute; em b&ecirc;n cạnh y&ecirc;u kh&ocirc;ng phai<br>T&igrave;nh y&ecirc;u nằm ngang của anh lu&ocirc;n ng&agrave;n năm</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n em nh&igrave;n tr&aacute;i tim đại dương<br>Phố đ&atilde; l&ecirc;n đ&egrave;n đi t&igrave;m lời ca anh viết ch&acirc;n phương<br>Mưa rơi chơi vơi c&ograve;n mơ về em<br>Nguy&ecirc;n vẹn c&acirc;u chuyện ta từng xem<br>Khoảng c&aacute;ch sẽ kh&ocirc;ng xa<br>Nếu như ta coi nhau l&agrave; tất cả</div>
            <p><br></p>
            <div>&hellip;&nbsp;Oh l&agrave; tất cả<br>Oh nguyện m&atilde;i y&ecirc;u em<br>V&agrave; m&atilde;i thương m&igrave;nh em th&ocirc;i<br>Oh uh</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n con đường c&oacute; m&ocirc;i kề m&ocirc;i<br>Phố đ&atilde; l&ecirc;n đ&egrave;n b&ecirc;n người anh thương anh nhớ anh mong<br>C&oacute; nhạc b&ecirc;n cạnh ai kh&ocirc;ng phi&ecirc;u<br>C&oacute; em b&ecirc;n cạnh y&ecirc;u kh&ocirc;ng phai<br>T&igrave;nh y&ecirc;u nằm ngang của anh lu&ocirc;n ng&agrave;n năm</div>
            <p><br></p>
            <div>&hellip;&nbsp;Phố đ&atilde; l&ecirc;n đ&egrave;n em nh&igrave;n tr&aacute;i tim đại dương<br>Phố đ&atilde; l&ecirc;n đ&egrave;n đi t&igrave;m lời ca anh viết ch&acirc;n phương<br>Mưa rơi chơi vơi c&ograve;n mơ về em<br>Nguy&ecirc;n vẹn c&acirc;u chuyện ta từng xem<br>Khoảng c&aacute;ch sẽ kh&ocirc;ng xa<br>Nếu như ta coi nhau l&agrave; tất cả</div>`
        },
        {
            name: "Thức Giấc",
            singer: "Da LAB",
            path: "./assets/music/ThucGiac.mp3",
            img: "./assets/img/ThucGiac.jpg",
            lyric:`<div>Sau những con đường quen ta đ&atilde; v&ocirc; t&igrave;nh đến<br>L&agrave; nụ cười em quẩn quanh với giấc mơ<br>Nơi những &aacute;nh đ&egrave;n s&aacute;ng<br>Ta với khung h&igrave;nh kh&aacute;c<br>L&agrave; b&igrave;nh y&ecirc;n cất giấu trước cuộc đời</div>
            <p><br></p>
            <div>Nh&igrave;n xem lần sau cuối l&agrave; bao điều tiếc nuối<br>T&igrave;nh y&ecirc;u l&agrave; thứ khiến em qu&ecirc;n đi v&agrave;i lần yếu đuối<br>Lặng nh&igrave;n giọt sương rơi lạc trong m&agrave;u u tối<br>L&agrave; khi t&igrave;nh y&ecirc;u ấy đ&atilde; khiến em th&ocirc;i những mộng mơ</div>
            <p><br></p>
            <div>Anh vẫn thức giấc tr&ecirc;n giường với giấc mơ vừa t&agrave;n<br>Bản nhạc vụt tắt bộ phim kia dừng lại<br>Nghe tiếng mưa rơi b&ecirc;n thềm anh ngước mắt lặng nh&igrave;n<br>Rồi chờ đợi m&atilde;i vẫn kh&ocirc;ng quay lại</div>
            <p><br></p>
            <div>No no no<br>Baby let me know<br>No no no<br>Baby let me know</div>
            <p><br></p>
            <div>Điều g&igrave; xảy ra khi chia đ&ocirc;i cơn mơ<br>Một thực tại kia kh&ocirc;ng c&oacute; em đợi chờ (đợi chờ)<br>Nh&igrave;n từng hạt mưa rơi b&ecirc;n hi&ecirc;n vỡ tan<br>Từng k&yacute; ức lỡ mang sao nỡ qu&ecirc;n vội v&agrave;ng</div>
            <p><br></p>
            <div>Ở b&ecirc;n anh th&ecirc;m một đ&ecirc;m th&ocirc;i một đ&ecirc;m th&ocirc;i<br>Anh đ&atilde; từng định n&oacute;i nhưng rồi lại lặng im th&ocirc;i lặng im th&ocirc;i<br>V&igrave; anh biết kh&ocirc;ng thể tr&oacute;i buộc<br>Ph&iacute;a trước l&agrave; bầu trời cao s&acirc;u<br>Sống với những mơ ước th&igrave; chẳng được bao l&acirc;u<br>V&agrave; tất cả đ&atilde; hết sẽ chẳng c&oacute; hồi kết<br>Kh&ocirc;ng một c&acirc;u tạm biệt nhưng cũng chẳng sao đ&acirc;u</div>
            <p><br></p>
            <div>Anh vẫn thức giấc tr&ecirc;n giường với giấc mơ vừa t&agrave;n<br>Bản nhạc vụt tắt bộ phim kia dừng lại<br>Nghe tiếng mưa rơi b&ecirc;n thềm anh ngước mắt lặng nh&igrave;n<br>Rồi chờ đợi m&atilde;i vẫn kh&ocirc;ng quay lại</div>
            <p><br></p>
            <div>No no no<br>Baby let me know<br>No no no<br>Baby let me know</div>
            <p><br></p>
            <div>L&ecirc;nh đ&ecirc;nh tr&ecirc;n ranh giới giữa thực tại<br>Giật m&igrave;nh tỉnh giấc trống kh&ocirc;ng c&ocirc; đơn<br>Hay mơ tiếp những giấc mơ chẳng th&agrave;nh<br>Nhặt nhạnh từng ch&uacute;t hơi ấm em c&ograve;n đ&acirc;u đ&acirc;y</div>
            <p><br></p>
            <div>Lại l&agrave; một ng&agrave;y mới anh thức giấc với thở d&agrave;i<br>Lại l&agrave; một ng&agrave;y mới đ&aacute;nh thức anh bằng nỗi đau<br>D&ugrave; biết kh&ocirc;ng c&oacute; ph&eacute;p m&agrave;u n&iacute;u em quay trở lại<br>Chỉ một lần sau cuối cho anh được thấy h&igrave;nh b&oacute;ng em</div>
            <p><br></p>
            <div>Yeah yeah ah<br>L&agrave;m sao anh biết m&igrave;nh đang mơ hay thực tại<br>Ah it feels so real<br>Anh quay con quay mong con quay kh&ocirc;ng dừng lại<br>Ah nếu em hiện ra th&igrave; liệu anh c&oacute; ngần ngại<br>Thả m&igrave;nh để anh ng&atilde; ch&igrave;m đắm tr&ecirc;n đ&ocirc;i vai<br>Hay l&agrave; v&ugrave;ng dậy để tỉnh giấc kh&ocirc;ng b&ecirc;n ai nghe nỗi đau th&ecirc;m d&agrave;i</div>
            <p><br></p>
            <div>Ah c&agrave;ng muốn qu&ecirc;n c&agrave;ng nhớ kỹ ghi l&acirc;u<br>Trong giấc mơ liệu ta c&oacute; b&ecirc;n nhau<br>Khi anh thấy ở trong v&ograve;ng tay anh chẳng hề c&oacute; em<br>Anh c&oacute; n&ecirc;n nhắm mắt lại rồi lại đi xuống th&ecirc;m s&acirc;u ah<br>Một mai thức giấc ah<br>Hay sẽ m&atilde;i mơ ah<br>Đoạn phim lặp đi lặp lại trong đầu<br>Anh kh&ocirc;ng biết l&agrave;m sao để m&agrave; anh tho&aacute;t ra mau</div>
            <p><br></p>
            <div>Anh vẫn thức giấc tr&ecirc;n giường với giấc mơ vừa t&agrave;n<br>Bản nhạc vụt tắt bộ phim kia dừng lại<br>Nghe tiếng mưa rơi b&ecirc;n thềm anh ngước mắt lặng nh&igrave;n<br>Rồi chờ đợi m&atilde;i vẫn kh&ocirc;ng quay lại</div>
            <p><br></p>
            <div>Anh vẫn thức giấc tr&ecirc;n giường với giấc mơ vừa t&agrave;n<br>Bản nhạc vụt tắt bộ phim kia dừng lại<br>Nghe tiếng mưa rơi b&ecirc;n thềm anh ngước mắt lặng nh&igrave;n<br>Rồi chờ đợi m&atilde;i vẫn kh&ocirc;ng quay lại</div>
            <p><br></p>
            <div>No no no<br>Baby let me know (let me know)<br>No no no<br>Baby let me know (baby let me know)</div>
            <p><br></p>
            <div>Nh&igrave;n xem lần sau cuối l&agrave; bao điều tiếc nuối<br>T&igrave;nh y&ecirc;u l&agrave; thứ khiến em qu&ecirc;n đi v&agrave;i lần yếu đuối<br>Lặng nh&igrave;n giọt sương rơi lạc trong m&agrave;u u tối<br>L&agrave; khi t&igrave;nh y&ecirc;u ấy đ&atilde; khiến em th&ocirc;i những mộng mơ oh oh</div>`
        },
        {
            name: "Thở",
            singer: "Da LAB X Juky San",
            path: "./assets/music/Tho.mp3",
            img: "./assets/img/Tho.jpg",
            lyric:`<div>Thứ ta cần l&agrave; g&igrave; l&agrave; g&igrave; ta ơi<br>Mỗi sớm mai ta đứng trước gương<br>Chạm được tới đỉnh cao rồi c&ocirc; độc<br>Được v&agrave; mất l&ograve;ng cũng thật trống rỗng</div>
            <p><br></p>
            <div>Thứ ta cần v&agrave; cần thật nhiều hơn nữa<br>&Aacute;nh mắt ai trong veo sớm mai<br>Chẳng c&ograve;n những lần hơi thở gấp<br>V&agrave; được &ocirc;m mọi niềm khao kh&aacute;t trong tay</div>
            <p><br></p>
            <div>Từng mơ được vươn thật cao v&agrave; bay thật xa (yeah)<br>Nhưng ta vẫn mắc ở đ&acirc;y hằng bao ng&agrave;y qua (yeah)<br>Lạc lối trong th&agrave;nh phố đầy hối hả<br>Ch&igrave;m s&acirc;u trong guồng quay đầy vội v&atilde;</div>
            <p><br></p>
            <div>Liệu chăng giờ đ&acirc;y ta c&oacute; đang thực sự sống (yeah)<br>T&igrave;m đ&acirc;u cảm gi&aacute;c b&igrave;nh y&ecirc;n hằng tr&ocirc;ng mong (yeah)<br>Cần th&ecirc;m những l&agrave;n gi&oacute; thật m&aacute;t l&agrave;nh<br>Cần nghe tiếng cười em ở b&ecirc;n cạnh kh&ocirc;ng buồn lo</div>
            <p><br></p>
            <div>H&iacute;t từng hơi thật s&acirc;u biết ng&agrave;y mai sẽ đi về đ&acirc;u<br>Bỗng cảm thấy hụt hơi, thiếu một nơi dừng ch&acirc;n nghỉ ngơi<br>Muốn được tho&aacute;t khỏi những cảm gi&aacute;c ch&aacute;n chường bế tắc<br>Muốn thấy một bầu trời xanh trước mặt, muốn được thở ra, nhẹ vơi &acirc;u lo h&agrave;ng ng&agrave;y</div>
            <p><br></p>
            <div>Thứ ta cần l&agrave; g&igrave; l&agrave; g&igrave; ta ơi<br>Mỗi sớm mai ta đứng trước gương<br>Chạm được tới đỉnh cao rồi c&ocirc; độc<br>Được v&agrave; mất l&ograve;ng cũng thật trống rỗng</div>
            <p><br></p>
            <div>Thứ ta cần v&agrave; cần thật nhiều hơn nữa<br>&Aacute;nh mắt ai trong veo sớm mai<br>Chẳng c&ograve;n những lần hơi thở gấp<br>V&agrave; được &ocirc;m mọi niềm khao kh&aacute;t trong tay</div>
            <p><br></p>
            <div>Mặt trời khuất g&oacute;c phố l&ecirc;n đ&egrave;n<br>D&ograve;ng người qua chẳng mấy ai quen<br>V&agrave;i người gh&eacute; đến rồi lại đi<br>Mỏi mệt đôi chân dừng nghĩ suy</div>
            <p><br></p>
            <div>Bao bối rối tức tối trong tim nhưng n&oacute;i không ra<br>C&oacute; mấy ph&uacute;t chỉ mong sao c&oacute; thể nhanh về nh&agrave;<br>Về với những &ecirc;m đềm, từng nhịp thở b&igrave;nh y&ecirc;n<br>Để chẳng phải bon chen hơn thua ngo&agrave;i kia</div>
            <p><br></p>
            <div>Như bộ phim vừa bắt đầu<br>Ta cần một ch&uacute;t gi&oacute; giữa trời ng&aacute;t xanh</div>
            <p><br></p>
            <div>Nơi ho&agrave;ng h&ocirc;n b&igrave;nh y&ecirc;n ta qu&ecirc;n đi những &acirc;u lo đang tr&ecirc;n vai<br>Tr&uacute;t hết đi những muộn phiền vội v&atilde;, m&igrave;nh b&ecirc;n nhau đến sớm mai<br>C&ugrave;ng nhau nhẹ tr&ocirc;i niềm an l&agrave;nh<br>D&ugrave; ng&agrave;y mai c&ograve;n bao hối hả bụi bặm chẳng tha lấy một ai</div>
            <p><br></p>
            <div>Không gian đong đầy yêu thương, muộn phiền kh&ocirc;ng c&ograve;n vương<br>Lắng nghe hơi thở &ecirc;m l&agrave;nh b&ecirc;n trong v&ograve;ng tay m&atilde;i chưa thể n&agrave;o bu&ocirc;ng<br>B&ecirc;n nhau h&ocirc;m nay ng&agrave;y sau, vẫn thương, vẫn y&ecirc;u đậm s&acirc;u<br>Nhẹ như cơn gi&oacute; m&aacute;t l&agrave;nh b&ecirc;n trong c&acirc;u h&aacute;t, &quot;Anh muốn y&ecirc;u em d&agrave;i l&acirc;u&quot;</div>
            <p><br></p>
            <div>Gạt hết những nỗi lo &acirc;u thường ng&agrave;y<br>Bỏ hết những thứ nh&acirc;n gian cuồng quay<br>C&ugrave;ng em về nơi ấy<br>Nơi c&oacute; m&aacute;i nh&agrave; ấm &ecirc;m trong v&ograve;ng tay<br>Hạnh ph&uacute;c l&agrave; thấy ta thở h&ocirc;m nay<br>May mắn khi c&oacute; nhau trong đời (yeah-ah)<br>H&iacute;t một hơi thật s&acirc;u kh&ocirc;ng gian tuyệt vời</div>
            <p><br></p>
            <div>Thứ ta cần l&agrave; g&igrave; l&agrave; g&igrave; ta ơi<br>Mỗi sớm mai ta đứng trước gương<br>Chạm được tới đỉnh cao rồi c&ocirc; độc<br>Được v&agrave; mất l&ograve;ng cũng thật trống rỗng</div>
            <p><br></p>
            <div>Thứ ta cần v&agrave; cần thật nhiều hơn nữa<br>&Aacute;nh mắt ai trong veo sớm mai<br>Chẳng c&ograve;n những lần hơi thở gấp<br>V&agrave; được &ocirc;m mọi niềm khao kh&aacute;t trong tay</div>
            <p><br></p>
            <div>Oh-oh yeah<br>Oh-oh</div>`
        },
        {
            name: "Sinh Ra Đã Là Thứ Đối Lập Nhau",
            singer: "EMCEE L x BADBIES",
            path: "./assets/music/SinhRaDaLaThuDoiLapNhau.mp3",
            img: "./assets/img/SinhRaDaLaThuDoiLapNhau.jpg",
            lyric:`<div>Em như l&agrave; đại dương xanh ngắt khiến bao người ao ước<br>C&ograve;n anh l&agrave; đ&aacute;m l&aacute; kh&ocirc; rơi lặng y&ecirc;n<br>&Aacute;nh nắng đến v&acirc;y quanh em<br>C&ograve;n nơi anh t&agrave;n tro quấn lấy nơi anh</div>
            <p><br></p>
            <div>Anh như l&agrave; ng&agrave;n sao biến mất khi huy ho&agrave;ng<br>C&ograve;n em l&agrave; b&igrave;nh minh đem theo trong tim mu&ocirc;n v&agrave;n rực rỡ<br>Ta vốn kh&ocirc;ng thuộc về nhau, sinh ra đ&atilde; l&agrave; thứ đối lập nhau</div>
            <p><br></p>
            <div>Như nam ch&acirc;m ta c&oacute; hai cực h&uacute;t<br>Nhưng sẽ đẩy nhau nếu quay đầu ngược hướng<br>Như l&agrave; b&oacute;ng đ&ecirc;m đ&ocirc;i ch&acirc;n sẽ bước lạc<br>Nhưng chợt nhận ra c&oacute; mặt trời dẫn đường<br>Rồi sẽ b&ugrave;ng ch&aacute;y như những đ&aacute;m tro t&agrave;n<br>Hay lại hồi sinh theo từng giọt mưa rơi<br>Như kẻ mộng du với vương quốc mơ m&agrave;ng<br>Rồi chợt tỉnh giấc khi b&igrave;nh minh vừa tới</div>
            <p><br></p>
            <div>Như tương lai em gạt đi<br>Anh ngồi t&ocirc; m&agrave;u xanh cho qu&aacute; khứ<br>Giữa sa mạc kh&ocirc; nhưng v&ograve;ng tay anh<br>Anh lạnh căm như đ&oacute;ng băng một nửa<br>Chơ vơ anh đứng giữa b&oacute;ng đ&ecirc;m<br>Để chờ thấy ch&uacute;t &aacute;nh s&aacute;ng em c&ograve;n lại<br>Nhưng m&agrave; đ&acirc;u thấy</div>
            <p><br></p>
            <div>Ng&ocirc;i sao tr&ecirc;n cao lấp l&aacute;nh<br>&Aacute;nh l&ecirc;n ng&agrave;n hy vọng rồi lại vụt biến mất<br>Chẳng c&oacute; định nghĩa n&agrave;o l&agrave; đ&uacute;ng nhất<br>H&agrave;nh tinh vẫn cứ xoay th&ocirc;i</div>
            <p><br></p>
            <div>Kh&ocirc;ng thể khiến ng&agrave;y chạm v&agrave;o đ&ecirc;m đen tối<br>Cũng như kh&ocirc;ng c&aacute;ch n&agrave;o để hai ta chung lối<br>Vạn vật sẽ biến tan c&ugrave;ng em<br>Anh lang thang với tr&aacute;i tim ngủ y&ecirc;n</div>
            <p><br></p>
            <div>Em như l&agrave; đại dương xanh ngắt khiến bao người ao ước<br>C&ograve;n anh l&agrave; đ&aacute;m l&aacute; kh&ocirc; rơi lặng y&ecirc;n<br>&Aacute;nh nắng đến v&acirc;y quanh em<br>C&ograve;n nơi anh t&agrave;n tro quấn lấy nơi anh</div>
            <p><br></p>
            <div>Anh như l&agrave; ng&agrave;n sao biến mất khi huy ho&agrave;ng<br>C&ograve;n em l&agrave; b&igrave;nh minh đem theo trong tim mu&ocirc;n v&agrave;n rạng rỡ<br>Ta vốn kh&ocirc;ng thuộc về nhau, sinh ra đ&atilde; l&agrave; thứ đối lập nhau</div>
            <p><br></p>
            <div>Bỏ lại qu&aacute; khứ, nh&igrave;n về tương lai<br>H&agrave;nh trang ta c&oacute; sẽ mang theo suốt đời<br>C&ugrave;ng t&igrave;nh y&ecirc;u kia d&ugrave; gặp lại nhau cũng chẳng thể n&oacute;i</div>
            <p><br></p>
            <div>Em như l&agrave; đại dương xanh ngắt khiến bao người ao ước<br>C&ograve;n anh l&agrave; đ&aacute;m l&aacute; kh&ocirc; rơi lặng y&ecirc;n<br>&Aacute;nh nắng đến v&acirc;y quanh em<br>C&ograve;n nơi anh t&agrave;n tro quấn lấy</div>
            <p><br></p>
            <div>Anh như l&agrave; ng&agrave;n v&igrave; sao biến mất khi huy ho&agrave;ng<br>C&ograve;n em l&agrave; b&igrave;nh minh đem theo trong tim mu&ocirc;n v&agrave;n rực rỡ<br>Ta vốn kh&ocirc;ng thuộc về nhau, sinh ra đ&atilde; l&agrave; thứ đối lập nhau</div>
            <p><br></p>
            <div>Chẳng thể đặt t&ecirc;n cho nỗi đau<br>Nụ cười in dấu th&aacute;ng ng&agrave;y ta đ&atilde; đ&aacute;nh mất ph&iacute;a sau<br>&Aacute;nh nắng che mờ gi&ocirc;ng tố, ngăn cơn mưa trong em ngừng rơi<br>H&atilde;y bước tiếp tới b&igrave;nh y&ecirc;n kh&aacute;c<br>Em sẽ cất giấu trong tim<br>H&atilde;y qu&ecirc;n nhau đi, ta vốn đ&atilde; kh&ocirc;ng thuộc về nhau</div>`
        },
        {
            name: "Em Đã Có Người Mới",
            singer: "Tóc Tiên",
            path: "./assets/music/EmDaCoNguoiMoi.mp3",
            img: "./assets/img/EmDaCoNguoiMoi.jpg",
            lyric:`<div>H&ocirc;m nay em mặc v&aacute;y hoa như ng&agrave;y đầu năm ấy<br>Đẹp dịu d&agrave;ng v&agrave; thướt tha đ&ocirc;i m&ocirc;i xinh ngất ng&acirc;y<br>Ta luy&ecirc;n thuy&ecirc;n đ&ecirc;m thứ ba anh theo hỏi đ&ocirc;i c&acirc;u<br>Em ở đ&acirc;u nay sống sao<br>T&igrave;nh y&ecirc;u th&igrave; anh đ&acirc;y vẫn chưa<br>Thế c&ograve;n em thế n&agrave;o</div>
            <p><br></p>
            <div>Em đ&atilde; c&oacute; người mới<br>Người c&ugrave;ng em đi mu&ocirc;n nơi<br>Nay em đ&atilde; c&oacute; người mới<br>Chẳng c&ograve;n một m&igrave;nh chơi vơi<br>Sao anh chưa c&oacute; người nắm lấy đ&ocirc;i tay<br>Hay đợi mong người vừa &yacute; đến mai sau<br>Em mong anh c&oacute; người mới<br>Trọn vẹn đến suốt đời</div>
            <p><br></p>
            <div>Sau chia tay hai ch&uacute;ng ta e ngại hơn l&uacute;c trước<br>Những kỉ niệm tuy đ&atilde; xa đ&ocirc;i khi thấy vấn vương<br>Ta luy&ecirc;n thuy&ecirc;n đ&ecirc;m thứ ba anh theo hỏi đ&ocirc;i c&acirc;u<br>Em ở đ&acirc;u nay sống sao<br>T&igrave;nh y&ecirc;u th&igrave; anh nay vẫn chưa<br>Thế c&ograve;n em</div>
            <p><br></p>
            <div>Em đ&atilde; c&oacute; người mới<br>Người c&ugrave;ng em đi mu&ocirc;n nơi<br>Nay em đ&atilde; c&oacute; người mới<br>Chẳng c&ograve;n một m&igrave;nh chơi vơi<br>Sao anh chưa c&oacute; người nắm lấy đ&ocirc;i tay<br>Hay đợi mong người vừa &yacute; đến mai sau<br>Em mong anh c&oacute; người mới<br>Trọn vẹn đến suốt đời</div>
            <p><br></p>
            <div>Anh giờ sao rồi<br>C&ograve;n lui tới qu&aacute;n quen kh&ocirc;ng<br>Em th&igrave; vẫn vậy<br>Vẫn lưu giữ kỉ niệm ng&agrave;y xưa<br>Chỉ l&agrave; kh&ocirc;ng c&ocirc; đơn nữa</div>
            <p><br></p>
            <div>Em đ&atilde; c&oacute; người mới<br>Người c&ugrave;ng em đi mu&ocirc;n nơi<br>Nay em đ&atilde; c&oacute; người mới<br>Chẳng c&ograve;n một m&igrave;nh chơi vơi (chẳng c&ograve;n một m&igrave;nh chơi vơi)<br>Sao anh chưa c&oacute; người nắm lấy đ&ocirc;i tay<br>Hay đợi mong người vừa &yacute; đến mai sau<br>Em mong anh c&oacute; người mới<br>Trọn vẹn đến suốt đời</div>
            <p><br></p>
            <div>Em mong anh c&oacute; người mới<br>Trọn vẹn đến suốt đời<br>Em mong anh c&oacute; người mới</div>`
        },
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                    <div class="song" data-index="${index}">
                        <div class="thumb"
                            style="background-image: url('${song.img}')">
                            <i  class="btn-thumb-pause"  title="Pause"></i>
                            <i class="fa-solid fa-play btn-thumb-play" title="Play"></i>
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
        lyrics.innerHTML = this.songs[this.currentIndex].lyric;
        
    },
    prevSong: function(){
        if(this.currentIndex === 0){
            this.currentIndex = this.songs.length;
        }
        this.currentIndex--;
        this.setConfig("currentIndex", this.currentIndex);
        this.loadCurrentSong();
        
        lyrics.innerHTML = this.songs[this.currentIndex].lyric;
    },
    repeateSong: function(){
        audio.loop = true;
        this.isRepeate = true;
    },
    randomSong: function(){
        this.currentIndex = Math.floor(Math.random() * app.songs.length);
        this.setConfig("currentIndex", this.currentIndex);
        this.loadCurrentSong();
        
        lyrics.innerHTML = this.songs[this.currentIndex].lyric;
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

        //xử lý chọn list or lyrics
        const btnPlayList = document.querySelector(".btn-list");
        const btnLyrics = document.querySelector(".btn-lyric");
        btnPlayList.addEventListener("click", () => {
            if(!btnPlayList.classList.contains("active")){
                btnLyrics.classList.remove("active");
                btnPlayList.classList.add("active");
                playlist.style.display = "block";
                lyrics.style.display = "none";
            }
        });
        btnLyrics.addEventListener("click", () => {

            if(!btnLyrics.classList.contains("active")){
                btnPlayList.classList.remove("active");
                btnLyrics.classList.add("active");
                lyrics.style.display = "block";
                playlist.style.display = "none";
                lyrics.innerHTML = this.songs[app.currentIndex].lyric;
            }
        });
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
