//اسکرول نرم بین سایت

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// دکمه تغییر رنگ پس‌زمینه
function changeBgColor() {
    const colors = ["#f4f4f4", "#ffebcd", "#d3f9d8", "#add8e6"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("theme").addEventListener("click", changeBgColor);
