//hamburger icon
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
//close icon
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}
//fade in
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});