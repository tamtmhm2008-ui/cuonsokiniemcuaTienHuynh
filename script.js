/* ==================================================
   NHẠC 🎵
================================================== */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const musicPrev =
    document.getElementById("musicPrev");

const musicNext =
    document.getElementById("musicNext");

const musicName =
    document.getElementById("musicName");


const musicList = [

    {
        name:"A Thousand Years",
        src:"music1.mp3"
    },

    {
        name:"Until I Found You",
        src:"music2.mp3"
    }

];


let musicIndex = 0;

let musicPlaying = false;


/* ==================================================
   CẬP NHẬT NÚT NHẠC
================================================== */

function updateMusicButton(){

    musicBtn.textContent =
        musicPlaying
        ? "🔊"
        : "🎵";

}


/* ==================================================
   LOAD NHẠC
================================================== */

function loadMusic(
    index,
    autoPlay=false
){

    if(
        musicList.length === 0
    ){
        return;
    }


    musicIndex =
        (
            index +
            musicList.length
        )
        %
        musicList.length;


    const track =
        musicList[musicIndex];


    music.src =
        track.src;


    music.load();


    musicName.textContent =
        `${musicIndex + 1}. ${track.name}`;


    if(autoPlay){

        playMusic();

    }

}


/* ==================================================
   PHÁT NHẠC
================================================== */

async function playMusic(){

    try{

        await music.play();

        musicPlaying = true;

        updateMusicButton();

    }

    catch(error){

        musicPlaying = false;

        updateMusicButton();

        console.error(
            "Không thể phát nhạc:",
            error
        );

    }

}


/* ==================================================
   DỪNG NHẠC
================================================== */

function pauseMusic(){

    music.pause();

    musicPlaying = false;

    updateMusicButton();

}


/* ==================================================
   NÚT NHẠC
================================================== */

if(musicBtn){

    musicBtn.addEventListener(
        "click",
        function(){

            if(musicPlaying){

                pauseMusic();

            }

            else{

                playMusic();

            }

        }
    );

}


/* ==================================================
   BÀI TRƯỚC
================================================== */

if(musicPrev){

    musicPrev.addEventListener(
        "click",
        function(){

            loadMusic(
                musicIndex - 1,
                musicPlaying
            );

        }
    );

}


/* ==================================================
   BÀI TIẾP
================================================== */

if(musicNext){

    musicNext.addEventListener(
        "click",
        function(){

            loadMusic(
                musicIndex + 1,
                musicPlaying
            );

        }
    );

}


/* ==================================================
   HẾT BÀI → TỰ CHUYỂN
================================================== */

if(music){

    music.addEventListener(
        "ended",
        function(){

            loadMusic(
                musicIndex + 1,
                true
            );

        }
    );

}


/* ==================================================
   BẮT ĐẦU CÂU CHUYỆN
================================================== */

function startStory(){

    openPage(
        "menuPage"
    );

    playMusic();

}


/* ==================================================
   CHUYỂN TRANG
================================================== */

function openPage(pageId){

    const pages =
        document.querySelectorAll(
            ".page"
        );


    pages.forEach(
        function(page){

            page.classList.add(
                "hidden"
            );

        }
    );


    const targetPage =
        document.getElementById(
            pageId
        );


    if(targetPage){

        targetPage.classList.remove(
            "hidden"
        );

    }


    window.scrollTo(
        0,
        0
    );

}


/* ==================================================
   TRANG CHỦ
================================================== */

function goHome(){

    openPage(
        "homePage"
    );

}


/* ==================================================
   DỮ LIỆU KỶ NIỆM
   KHÔNG CÓ ẢNH
================================================== */

const memories = [

    {
        date:"📅 07/12/2023",

        title:
        "Ngày đầu tiên mà câu chuyện tình của ta được viết 😍😍",

        text:
        "Có lẽ những ngày đầu tiên anh chưa được trưởng thành cho lắm 😢😢 , hay làm em phải buồn phải suy nghĩ nhiều nhưng em vẫn âm thầm bên cạnh anh , động viên để anh ngày một tốt hơn"
    },


    {
        date:"📅 07/12/2024",

        title:
        "Kỷ niệm đầu tiên của đôi ta ❤️❤️",

        text:
        "1 năm trôi qua thì có lẽ lúc này anh đã trưởng thành hơn chút chút rồi nhỉ , mong là zị iii . Bản thân anh luôn mong muốn có thể trở nên thật hoàn thiện để có thể ở bên em , cho em được sự an toàn mà bản thân anh chưa mang lại được ở những ngày đầu 😭😭"
    },


    {
        date:"📅 07/12/2025",

        title:
        "Thanh xuân của chúng ta 😘",

        text:
        "Vào thời khắc đó , anh và em đang cùng nhau cố gắng cho tương lai của hai đứa,bản thân anh đã cố gắng rất nhiều để có thể theo kịp em . Anh sợ tại anh mà sẽ làm em bị kéo xuống , lúc này bản thân anh đã trưởng thành hơn nhưng anh vẫn chưa dám khẳng định bản thân đã hoàn thiện , Anh sẽ tiếp tục cố gắng hơn để có thể viết tiếp tương lai của hai đứa nhaaaa 😝😝"
    },


    {
        date:"📅 07/12/2026",

        title:
        "Bí Mật",

        text:
        "Đang được cập nhật 💖"
    }

];


let memoryIndex = 0;


/* ==================================================
   HIỂN THỊ KỶ NIỆM
================================================== */

function renderMemory(){

    const memory =
        memories[memoryIndex];


    const date =
        document.getElementById(
            "memoryDate"
        );


    const title =
        document.getElementById(
            "memoryTitle"
        );


    const text =
        document.getElementById(
            "memoryText"
        );


    const counter =
        document.getElementById(
            "memoryCounter"
        );


    const dots =
        document.getElementById(
            "memoryDots"
        );


    if(date){

        date.textContent =
            memory.date;

    }


    if(title){

        title.textContent =
            memory.title;

    }


    if(text){

        text.textContent =
            memory.text;

    }


    if(counter){

        counter.textContent =
            `Trang ${memoryIndex + 1} / ${memories.length}`;

    }


    if(dots){

        dots.innerHTML = "";


        memories.forEach(
            function(
                item,
                index
            ){

                const dot =
                    document.createElement(
                        "span"
                    );


                dot.className =
                    "dot";


                if(
                    index === memoryIndex
                ){

                    dot.classList.add(
                        "active"
                    );

                }


                dot.addEventListener(
                    "click",
                    function(){

                        memoryIndex =
                            index;

                        renderMemory();

                    }
                );


                dots.appendChild(
                    dot
                );

            }
        );

    }

}


/* ==================================================
   CHUYỂN KỶ NIỆM
================================================== */

function changeMemory(step){

    memoryIndex =
        (
            memoryIndex +
            step +
            memories.length
        )
        %
        memories.length;


    renderMemory();

}


/* ==================================================
   DỮ LIỆU CÂU CHÚC
================================================== */

const wishes = [

    {
        date:"💌 Trang 01",

        title:"Gửi em cô công chúa nhỏ ❤️",

        text:
        "Hôm nay là kỉ niệm 1000 ngày yêu nhau của 2 đứa , dù có trôi qua bao nhiêu thì em vẫn là cô công chúa của anh . Anh chúc em sẽ sẽ luôn mỉm cười vui vẻ , hạnh phúc , ít bệnh tật cũng như là yêu anh hơn nhaaaa . Anh mong em sẽ vẫn bước trên còn đường mình đã chọn , luôn cố gắng để vượt qua khó khăn . Anh sẽ luôn ở đằng sau em để cổ vũ và động viên em nhaaa 😘😘 , Anh Yêu Em"
    },


    {
        date:"💌 Trang 02",

        title:"Bí mật",

        text:
        "Đang cập nhật"
    },


    

];


let wishIndex = 0;


/* ==================================================
   HIỂN THỊ CÂU CHÚC
================================================== */

function renderWish(){

    const wish =
        wishes[wishIndex];


    const date =
        document.getElementById(
            "wishDate"
        );


    const title =
        document.getElementById(
            "wishTitle"
        );


    const text =
        document.getElementById(
            "wishText"
        );


    const dots =
        document.getElementById(
            "wishDots"
        );


    if(date){

        date.textContent =
            wish.date;

    }


    if(title){

        title.textContent =
            wish.title;

    }


    if(text){

        text.textContent =
            wish.text;

    }


    if(dots){

        dots.innerHTML = "";


        wishes.forEach(
            function(
                item,
                index
            ){

                const dot =
                    document.createElement(
                        "span"
                    );


                dot.className =
                    "dot";


                if(
                    index === wishIndex
                ){

                    dot.classList.add(
                        "active"
                    );

                }


                dot.addEventListener(
                    "click",
                    function(){

                        wishIndex =
                            index;

                        renderWish();

                    }
                );


                dots.appendChild(
                    dot
                );

            }
        );

    }

}


/* ==================================================
   CHUYỂN CÂU CHÚC
================================================== */

function changeWish(step){

    wishIndex =
        (
            wishIndex +
            step +
            wishes.length
        )
        %
        wishes.length;


    renderWish();

}


/* ==================================================
   MÈO BÍ MẬT 🐱
================================================== */

const secretCat =
    document.getElementById(
        "secretCat"
    );


const secretMessage =
    document.getElementById(
        "secretMessage"
    );


if(
    secretCat &&
    secretMessage
){

    secretCat.addEventListener(
        "click",
        function(){

            secretMessage.classList.toggle(
                "show"
            );

        }
    );

}


/* ==================================================
   TIM BAY ❤️
================================================== */

document.addEventListener(
    "click",
    function(event){

        if(
            event.target.closest(
                "button"
            )
        ){

            return;

        }


        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "click-heart";


        const hearts = [

            "❤️",
            "💖",
            "💕",
            "Anh Yêu Em 😘"
        

        ];


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function(){

                heart.remove();

            },
            1700
        );

    }
);


/* ==================================================
   KHỞI ĐỘNG WEB
================================================== */

loadMusic(
    0,
    false
);


renderMemory();


renderWish();


openPage(
    "homePage"
);