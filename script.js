function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

document.getElementById('myvideo').addEventListener('mouseenter', function () {
    this.setAttribute("controls", "controls");
});

document.getElementById('myvideo').addEventListener('mouseleave', function () {
    this.removeAttribute("controls");
});

document.getElementById('myvideo2').addEventListener('mouseenter', function () {
    this.setAttribute("controls", "controls");
});

document.getElementById('myvideo2').addEventListener('mouseleave', function () {
    this.removeAttribute("controls");
});