 function greetUser() {
    const name = document.getElementById("nameInput").value.trim(); // get input
    const header = document.querySelector("header"); // select <header>
    if (name) {
        header.textContent = "Hello, " + name;
    } else {
        header.textContent = "Hello";
    }
}

// Change background color of boxes
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        const color = box.id.toLowerCase(); // use the id (red, blue, green, yellow)
        box.style.backgroundColor = color;

        // To keep text readable on yellow
        if (color === "yellow") {
            box.style.color = "black";
        } else {
            box.style.color = "white";
        }
    });
});