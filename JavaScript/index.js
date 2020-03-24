var hello = document.getElementById("hello");

function onOver() {
    hello.style.color = "lightcoral";
}

function onOut() {
    hello.style.color = "turquoise";
}

function onClick() {
    alert("クリックされました");
}

hello.addEventListener("mouseover", onOver, false);
hello.addEventListener("mouseout", onOut, false);
hello.addEventListener("click", onClick, false);