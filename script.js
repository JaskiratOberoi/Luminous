let box = document.getElementById("w-1"),
    btn = document.getElementById("bubble-1");

btn.addEventListener(
    "click",
    function() {
        box.classList.toggle("hidden");
    },
    false
);

function addNew() {
    let node = `<img src="media/chat-bubble.png" alt="bubbles" id="bubble-1" />`;

    document.getElementById("bubbles").appendChild(node);
}