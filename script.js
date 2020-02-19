let box = document.getElementById("w-1"),
    btn = document.getElementById("bubble-1"),
    addn = document.getElementById("add-new");

btn.addEventListener(
    "click",
    function() {
        box.classList.toggle("hidden");
    },
    false
);

addn.addEventListener("click", addNew(), false);

function addNew() {
    let node = document.getElementById("bubble-1"),
        text = `<img src="media/chat-bubble.png" alt="bubbles"/>`;
    app = node + text;

    node.innerHTML = app;
}

// Modal JQuery
let addButton = document.getElementById("add-button");
$(addButton).on("click", function() {
    $(".modal").toggle();
});

// var dNow = new Date();
// var localdate = $(
//     dNow.getMonth() + 1 + "/" + dNow.getDate() + "/" + dNow.getFullYear()
// );
// localdate.val()

$(".modal form").on("submit", function() {
    var input = $(document.getElementById("cname"));
    var input2 = $(document.getElementById("rtext"));

    $("table").append(
        "<tr><td> date here </td><td>" +
        input.val() +
        "</td><td>" +
        input2.val() +
        "</td></tr>"
    );
    input.val("");
    input2.val("");
    $(this)
        .parent()
        .hide();
    return false;
});