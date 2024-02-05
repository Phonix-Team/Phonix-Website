// Dynamic effects functions
function highlightMember(element) {
    element.style.border = "2px solid #3498db"; // 鼠标悬停时边框颜色更改为深蓝色
}

function unhighlightMember(element) {
    element.style.border = "none";
}

function expandProject(element) {
    alert("项目已扩展！在此处添加更多自定义功能。");
}

// Additional functionality
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Smooth scrolling function
    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Add dynamic content loading for team members
    const teamMembers = document.querySelectorAll('.member');

    teamMembers.forEach(member => {
        member.addEventListener('click', loadMemberDetails);
    });

    // Dynamic content loading function
    function loadMemberDetails() {
        // Replace this alert with actual content loading mechanism (e.g., modal or separate page)
        alert("加载更多关于团队成员的内容！");
    }

    // Add dynamic content loading for projects
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', loadProjectDetails);
    });

    // Dynamic content loading function for projects
    function loadProjectDetails() {
        // Replace this alert with actual content loading mechanism (e.g., modal or separate page)
        alert("加载更多关于项目的内容！");
    }
});
