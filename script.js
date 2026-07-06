// ==========================================
// Memories
// ==========================================

const memories = [

{
    type: "image",
    src: "images/photo1.jpeg",

    title: "Our First Photo ❤️",

    message: `Every smile of yours makes my world brighter.
Every moment with you becomes a memory I'll cherish forever.
Thank you for becoming one of the most beautiful parts of my life. ❤️`
},

{
    type: "image",
    src: "images/photo2.jpeg",

    title: "Our Happy Moment ❤️",

    message: `This was our very first team outing.
I still remember standing behind you while this picture was being taken.
Looking back now, it feels like destiny had already started writing our story. ❤️`
},

{
    type: "video",
    src: "videos/video.mp4",

    title: "Bob's Bar Memories ❤️",

    message: `This was the day we went to Bob's Bar after Ranju's farewell.
Earlier that day, I called you and asked you to come to the office because we were planning to go out together later.
You came directly there, and we ended up having such a wonderful evening together. ❤️`
},

{
    type: "image",
    src: "images/photo3.jpeg",

    title: "Your Beautiful Smile ❤️",

    message: `That party will always remain special to me.
When my hands rested on your shoulders, it felt as if, for just a moment,
we already belonged together. ❤️`
},

{
    type: "video",
    src: "videos/video1.mp4",

    title: "Night Shift Memories ❤️",

    message: `Those night shifts became some of the happiest moments of my life.
Working together, laughing over silly things, and spending those long nights with you made every shift unforgettable.
Those memories will always have a special place in my heart. ❤️`
},

{
    type: "video",
    src: "videos/video2.mp4",

    title: "Learning to Ride ❤️",

    message: `I still remember how Bharat and I tried to teach you how to ride the scooty. 🛵
You were so nervous at first, but you still gathered the courage to try.
Watching you learn is one of the cutest memories I'll always cherish. ❤️`
},

{
    type: "video",
    src: "videos/video3.mp4",

    title: "Sharing Our Stories ❤️",

    message: `I still remember that night when we shared our life stories during our night shift.
You opened up about your life, and I shared mine too.
That was the moment I realized what an amazing listener and friend you are.
I truly believe those night shifts brought us much closer. ❤️`
},

{
    type: "image",
    src: "images/photo4.jpeg",

    title: "Our First Trip ❤️",

    message: `Our first trip with our office friends was unforgettable.
We were struggling to find another girl to join us, and finally you convinced your friend to come along.
Because of that, we all had an amazing trip together. ❤️`
},

{
    type: "image",
    src: "images/photo5.jpeg",

    title: "Honnavara Trip ❤️",

    message: `This trip gave us countless memories.
If you remember, Srinidhi danced on the hanging bridge and we couldn't stop laughing.
By mistake, Nandu even posted that video on Instagram.
I downloaded it back then, but sadly I have no idea where it disappeared. ❤️`
},

{
    type: "image",
    src: "images/wayanad1.jpeg",

    title: "Wayanad Trip ❤️",

    message: `This trip was even better than our first one.
The five of us had so much fun, especially teasing Naveen throughout the journey.
The funny arguments between Naveen and Nandu made everything even more entertaining. ❤️`
},

{
    type: "image",
    src: "images/wayanad2.jpeg",

    title: "Campfire Night ❤️",

    message: `Our first night around the campfire was unforgettable.
Srinidhi, Naveen, and I were completely drunk and barely knew what we were doing.
We even ended up breaking a few plates and glasses. 😅❤️`
},

{
    type: "image",
    src: "images/wayanad3.jpeg",

    title: "Safari Day ❤️",

    message: `The safari wasn't quite as exciting as we expected,
but the trip itself became one of our favorite memories.
Even though we don't have many pictures together from those days,
we created memories that will stay with us forever. ❤️`
},

{
    type: "image",
    src: "images/varakala1.jpeg",

    title: "Varkala Trip ❤️",

    message: `This is one of our favorite pictures because it was captured so naturally.
We had to convince our leads and managers a lot to make this trip happen, especially after you had moved to another team.
Looking back now, I feel this trip changed both of us because we had some of the deepest conversations of our lives. ❤️`
},

{
    type: "image",
    src: "images/varakala2.jpeg",

    title: "Our Heart-to-Heart Conversation ❤️",

    message: `During our walk along the cliff, you shared everything that was going on in your life.
You told me about your relationship, your confusion, and everything you were feeling.
I simply listened and shared whatever advice I could.

At that time, you were still unsure whether to continue your relationship with Kiran.
I remember telling you to meet him once, talk openly face to face, and if he was ready to give you the commitment you deserved, then continue. Otherwise, the decision would always be yours.

After saying all that, I quietly felt a little sad.
By then, I had already fallen in love with you, but I never had the courage to tell you.
More than anything, I never wanted to come between you and Kiran because I knew you still loved him then. ❤️`
},

{
    type: "gallery",

    images: [
        "images/varakala3.jpeg",
        "images/varakala4.jpeg"
    ],

    title: "Our Cliff Walk ❤️",

    message: `After our cliff walk, almost everyone on the trip caught a cold.
Do you remember how we had planned to sit together on the beach before the trip and just talk for hours?
Sadly, the rain ruined that plan.
Even today, I wish we had gotten that beautiful moment together. ❤️`
},

{
    type: "image",
    src: "images/varakala5.jpeg",

    title: "One More Beautiful Memory ❤️",

    message: `Every time I look at this picture, it brings back countless emotions.
At that moment, I had no idea these memories would become so precious to me.
If I could relive one trip again, it would definitely be this one. ❤️`
}

];

// ==========================================
// Variables
// ==========================================

let current = 0;

const mediaContainer = document.getElementById("mediaContainer");
const memoryTitle = document.getElementById("memoryTitle");
const memoryMessage = document.getElementById("memoryMessage");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const openBtn = document.getElementById("openBtn");

const bgMusic = document.getElementById("bgMusic");

// ==========================================
// Pause Current Video
// ==========================================

function stopCurrentVideo() {

    const video = mediaContainer.querySelector("video");

    if (video) {

        video.pause();
        video.currentTime = 0;

    }

}

// ==========================================
// Create Image
// ==========================================

function createImage(memory) {

    return `
        <img
            src="${memory.src}"
            class="love-photo"
            alt="${memory.title}">
    `;

}

// ==========================================
// Create Video
// ==========================================

function createVideo(memory) {

    return `
        <video
            class="love-photo"
            controls
            autoplay>

            <source
                src="${memory.src}"
                type="video/mp4">

            Your browser does not support video.

        </video>
    `;

}

// ==========================================
// Create Gallery
// ==========================================

function createGallery(memory) {

    return `
        <div class="photo-collage">

            ${memory.images.map(image => `

                <img
                    src="${image}"
                    class="love-photo">

            `).join("")}

        </div>
    `;

}

// ==========================================
// Show Memory
// ==========================================

function showMemory(index) {

    stopCurrentVideo();

    const memory = memories[index];

    mediaContainer.style.opacity = "0";

    setTimeout(() => {

        switch (memory.type) {

            case "image":

                mediaContainer.innerHTML = createImage(memory);
                break;

            case "video":

                mediaContainer.innerHTML = createVideo(memory);
                break;

            case "gallery":

                mediaContainer.innerHTML = createGallery(memory);
                break;

        }

        memoryTitle.textContent = memory.title;

        memoryMessage.textContent = memory.message;

        mediaContainer.style.opacity = "1";

        prevBtn.disabled = index === 0;

        nextBtn.disabled = index === memories.length - 1;

    }, 300);

}

// ==========================================
// Next Memory
// ==========================================

function nextMemory() {

    if (current >= memories.length - 1)
        return;

    current++;

    showMemory(current);

}

// ==========================================
// Previous Memory
// ==========================================

function previousMemory() {

    if (current <= 0)
        return;

    current--;

    showMemory(current);

}

// ==========================================
// Open Gallery
// ==========================================

function openGallery() {

    document
        .getElementById("page1")
        .classList.add("hidden");

    document
        .getElementById("galleryPage")
        .classList.remove("hidden");

    if (bgMusic) {

        bgMusic.play().catch(() => {

            console.log("Autoplay blocked.");

        });

    }

    showMemory(current);

}

// ==========================================
// Event Listeners
// ==========================================

openBtn.addEventListener("click", openGallery);

nextBtn.addEventListener("click", nextMemory);

prevBtn.addEventListener("click", previousMemory);

// ==========================================
// Keyboard Navigation
// ==========================================

document.addEventListener("keydown", (event) => {

    switch (event.key) {

        case "ArrowRight":
            nextMemory();
            break;

        case "ArrowLeft":
            previousMemory();
            break;

    }

});

// ==========================================
// Mobile Swipe Support
// ==========================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 70) {

        nextMemory();

    }

    if (touchEndX - touchStartX > 70) {

        previousMemory();

    }

});