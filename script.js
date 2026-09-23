let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {

    menu.classList.toggle("active");

});


let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");

    if (name == "") {

        formMessage.textContent =
            "Vui lòng nhập họ tên.";

        return;
    }

    if (email == "") {

        formMessage.textContent =
            "Vui lòng nhập email.";

        return;
    }

    if (!email.includes("@")) {

        formMessage.textContent =
            "Email không hợp lệ.";

        return;
    }

    if (message == "") {

        formMessage.textContent =
            "Vui lòng nhập nội dung.";

        return;
    }

    formMessage.textContent =
        "Gửi liên hệ thành công!";

});


let searchInput =
    document.getElementById("searchInput");

let projects =
    document.querySelectorAll(".project");

searchInput.addEventListener("input", function() {

    let keyword =
        searchInput.value.toLowerCase();

    projects.forEach(function(project) {

        let text =
            project.textContent.toLowerCase();

        if (text.includes(keyword)) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

});


let sections =
    document.querySelectorAll(".section");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        let position =
            section.getBoundingClientRect().top;

        let screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});


let year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();