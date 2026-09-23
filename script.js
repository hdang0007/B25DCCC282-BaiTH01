let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
let themeBtn = document.getElementById("themeBtn");
let form = document.getElementById("contactForm");
let searchInput = document.getElementById("searchInput");
let projects = document.querySelectorAll(".project");
let message = document.getElementById("message");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
    });
});

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

searchInput.addEventListener("input", function() {
    let keyword = searchInput.value.toLowerCase().trim();
    let found = 0;

    projects.forEach(function(project) {
        let isFound = project.textContent.toLowerCase().includes(keyword);
        project.style.display = isFound ? "block" : "none";
        if (isFound) {
            found++;
        }
    });

    document.getElementById("noResult").style.display = found === 0 ? "block" : "none";
});

message.addEventListener("input", function() {
    document.getElementById("charCount").textContent = message.value.length;
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let formMessage = document.getElementById("formMessage");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        formMessage.textContent = "Họ tên phải có ít nhất 2 ký tự.";
        return;
    }
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Vui lòng nhập email đúng định dạng.";
        return;
    }
    if (message.value.trim().length < 10) {
        formMessage.textContent = "Nội dung phải có ít nhất 10 ký tự.";
        return;
    }

    formMessage.textContent = "Gửi lời nhắn thành công! Cảm ơn bạn.";
    form.reset();
    document.getElementById("charCount").textContent = "0";
});

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(function(section) {
    observer.observe(section);
});

document.getElementById("year").textContent = new Date().getFullYear();