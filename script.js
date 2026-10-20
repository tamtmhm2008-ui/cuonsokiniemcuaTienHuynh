
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
        name: "A Thousand Years",
        src: "music1.mp3"
    },

    {
        name: "Until I Found You",
        src: "music2.mp3"
    },

    {

        name: "River Flows in You",
        src: "music3.mp3"
    }

];


let musicIndex = 0;
let musicPlaying = false;


/* ==================================================
   CẬP NHẬT NÚT NHẠC
================================================== */

function updateMusicButton() {

    if (!musicBtn) return;

    musicBtn.textContent =
        musicPlaying ? "🔊" : "🎵";
}


/* ==================================================
   LOAD NHẠC
================================================== */

function loadMusic(index, autoPlay = false) {

    if (!music || !musicName || musicList.length === 0) {
        return;
    }

    musicIndex =
        (
            index + musicList.length
        ) % musicList.length;

    const track = musicList[musicIndex];

    music.src = track.src;
    music.load();

    musicName.textContent =
        `${musicIndex + 1}. ${track.name}`;

    if (autoPlay) {
        playMusic();
    }
}


/* ==================================================
   PHÁT NHẠC
================================================== */

async function playMusic() {

    if (!music) return;

    try {

        await music.play();

        musicPlaying = true;

        updateMusicButton();

    } catch (error) {

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

function pauseMusic() {

    if (!music) return;

    music.pause();

    musicPlaying = false;

    updateMusicButton();
}


/* ==================================================
   NÚT NHẠC
================================================== */

if (musicBtn) {

    musicBtn.addEventListener("click", function() {

        if (musicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }

    });

}


/* ==================================================
   BÀI TRƯỚC
================================================== */

if (musicPrev) {

    musicPrev.addEventListener("click", function() {

        loadMusic(
            musicIndex - 1,
            musicPlaying
        );

    });

}


/* ==================================================
   BÀI TIẾP
================================================== */

if (musicNext) {

    musicNext.addEventListener("click", function() {

        loadMusic(
            musicIndex + 1,
            musicPlaying
        );

    });

}


/* ==================================================
   HẾT BÀI → TỰ CHUYỂN
================================================== */

if (music) {

    music.addEventListener("ended", function() {

        loadMusic(
            musicIndex + 1,
            true
        );

    });

}


/* ==================================================
   BẮT ĐẦU CÂU CHUYỆN
================================================== */

function startStory() {

    openPage("menuPage");

    playMusic();

}


/* ==================================================
   CHUYỂN TRANG
================================================== */

function openPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.add("hidden");

    });

    const targetPage =
        document.getElementById(pageId);

    if (targetPage) {

        targetPage.classList.remove("hidden");

    }

    window.scrollTo(0, 0);

}


/* ==================================================
   TRANG CHỦ
================================================== */

function goHome() {

    openPage("homePage");

}


/* ==================================================
   DỮ LIỆU KỶ NIỆM
   KHÔNG CÓ ẢNH
================================================== */

const memories = [

    {
        date: "📅 07/12/2023",

        title:
            "Ngày đầu tiên mà câu chuyện tình của ta được viết 😍😍",

        text:
            "Có lẽ những ngày đầu tiên anh chưa được trưởng thành cho lắm 😢😢 , hay làm em phải buồn phải suy nghĩ nhiều nhưng em vẫn âm thầm bên cạnh anh , động viên để anh ngày một tốt hơn"
    },

    {
        date: "📅 07/12/2024",

        title:
            "Kỷ niệm đầu tiên của đôi ta ❤️❤️",

        text:
            "1 năm trôi qua thì có lẽ lúc này anh đã trưởng thành hơn chút chút rồi nhỉ , mong là zị iii . Bản thân anh luôn mong muốn có thể trở nên thật hoàn thiện để có thể ở bên em , cho em được sự an toàn mà bản thân anh chưa mang lại được ở những ngày đầu 😭😭"
    },

    {
        date: "📅 07/12/2025",

        title:
            "Thanh xuân của chúng ta 😘",

        text:
            "Vào thời khắc đó , anh và em đang cùng nhau cố gắng cho tương lai của hai đứa,bản thân anh đã cố gắng rất nhiều để có thể theo kịp em . Anh sợ tại anh mà sẽ làm em bị kéo xuống , lúc này bản thân anh đã trưởng thành hơn nhưng anh vẫn chưa dám khẳng định bản thân đã hoàn thiện , Anh sẽ tiếp tục cố gắng hơn để có thể viết tiếp tương lai của hai đứa nhaaaa 😝😝"
    },

    {
        date: "📅 07/12/2026",

        title: "Bí Mật",

        text: "Đang được cập nhật 💖"
    }

];


let memoryIndex = 0;


/* ==================================================
   HIỂN THỊ KỶ NIỆM
================================================== */

function renderMemory() {

    if (memories.length === 0) return;

    const memory = memories[memoryIndex];

    const date =
        document.getElementById("memoryDate");

    const title =
        document.getElementById("memoryTitle");

    const text =
        document.getElementById("memoryText");

    const counter =
        document.getElementById("memoryCounter");

    const dots =
        document.getElementById("memoryDots");


    if (date) {
        date.textContent = memory.date;
    }

    if (title) {
        title.textContent = memory.title;
    }

    if (text) {
        text.textContent = memory.text;
    }

    if (counter) {
        counter.textContent =
            `Trang ${memoryIndex + 1} / ${memories.length}`;
    }

    if (dots) {

        dots.innerHTML = "";

        memories.forEach(function(item, index) {

            const dot =
                document.createElement("span");

            dot.className = "dot";

            if (index === memoryIndex) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", function() {

                memoryIndex = index;

                renderMemory();

            });

            dots.appendChild(dot);

        });

    }

}


/* ==================================================
   CHUYỂN KỶ NIỆM
================================================== */

function changeMemory(step) {

    memoryIndex =
        (
            memoryIndex + step + memories.length
        ) % memories.length;

    renderMemory();

}


/* ==================================================
   DỮ LIỆU CÂU CHÚC
================================================== */

const wishes = [

    {
        date: "💌 Trang 01",

        title: "Gửi em cô công chúa nhỏ ❤️",

        text:
            "Hôm nay là kỉ niệm 1000 ngày yêu nhau của 2 đứa , dù có trôi qua bao nhiêu thì em vẫn là cô công chúa của anh . Anh chúc em sẽ sẽ luôn mỉm cười vui vẻ , hạnh phúc , ít bệnh tật cũng như là yêu anh hơn nhaaaa . Anh mong em sẽ vẫn bước trên còn đường mình đã chọn , luôn cố gắng để vượt qua khó khăn . Anh sẽ luôn ở đằng sau em để cổ vũ và động viên em nhaaa 😘😘 , Anh Yêu Em"
    },

    {
        date:"💌 Trang 02",

        title:"Gửi em cô gái nhỏ của anh ❤️ ",


        text:
        "Chào em bé nha , hôm nay là 20/10 mà a không thể ở bên cạnh em được huhu . Dạo gần đây cả 2 có lẽ ít nói chuyện hơn , nhưng anh biết hai đứa mình đều đang cố gắng cho tương lai của nhau . Anh có quà đó nhe nào chuẩn bị xong a sẽ mang qua cho em nhaaa ❤️❤️ . Hôm nay là 20/10 anh chúc cô gái của anh hạnh phúc , luôn vui vẻ và sức khỏe luôn dồi dào để có thể làm những điều mình muốn nha , Anh Yêu Em 😘😘"

    },
    {
        date:"💌 Trang 03",

        title:"Bí mật ❤️ ",


        text:
        "Đang được cập nhật 💖"
    },

];


let wishIndex = 0;


/* ==================================================
   HIỂN THỊ CÂU CHÚC
================================================== */

function renderWish() {

    if (wishes.length === 0) return;

    const wish = wishes[wishIndex];

    const date =
        document.getElementById("wishDate");

    const title =
        document.getElementById("wishTitle");

    const text =
        document.getElementById("wishText");

    const dots =
        document.getElementById("wishDots");


    if (date) {
        date.textContent = wish.date;
    }

    if (title) {
        title.textContent = wish.title;
    }

    if (text) {
        text.textContent = wish.text;
    }

    if (dots) {

        dots.innerHTML = "";

        wishes.forEach(function(item, index) {

            const dot =
                document.createElement("span");

            dot.className = "dot";

            if (index === wishIndex) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", function() {

                wishIndex = index;

                renderWish();

            });

            dots.appendChild(dot);

        });

    }

}


/* ==================================================
   CHUYỂN CÂU CHÚC
================================================== */

function changeWish(step) {

    wishIndex =
        (
            wishIndex + step + wishes.length
        ) % wishes.length;

    renderWish();

}


/* ==================================================
   MÈO BÍ MẬT 🐱🐈😻
================================================== */

const secretCatMessages = [

    {
        cat: document.getElementById("secretCat"),
        message: document.getElementById("secretMessage")
    },

    {
        cat: document.getElementById("secretCat2"),
        message: document.getElementById("secretMessage2")
    },

    {
        cat: document.getElementById("secretCat3"),
        message: document.getElementById("secretMessage3")
    }

];


secretCatMessages.forEach(function(item) {

    if (!item.cat || !item.message) {
        return;
    }

    item.cat.addEventListener("click", function() {

        // Kiểm tra mèo đang được mở hay đang đóng
        const shouldShow =
            !item.message.classList.contains("show");

        // Đóng tất cả lời nhắn trước
        secretCatMessages.forEach(function(other) {

            if (other.message) {

                other.message.classList.remove("show");

            }

        });

        // Chỉ mở lời nhắn của mèo vừa bấm
        if (shouldShow) {

            item.message.classList.add("show");

        }

    });

});


/* ==================================================
   TIM BAY ❤️
================================================== */

document.addEventListener("click", function(event) {

    if (event.target.closest("button")) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className = "click-heart";

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "Anh Yêu Em 😘"
    ];

    heart.textContent =
        hearts[
            Math.floor(Math.random() * hearts.length)
        ];

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 1700);

});


/* ==================================================
   KHỞI ĐỘNG WEB
================================================== */

loadMusic(0, false);

renderMemory();

renderWish();

openPage("homePage");
