const toggler = document.querySelector("#toggler");

//W tym wypadku nie mogę użyć arrow function ze względu na inne znaczenie this
toggler.addEventListener("change", function() {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark")
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light")
    }
})

function trans() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
}