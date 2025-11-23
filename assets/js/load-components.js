// 加载公共组件的脚本
(function() {
  // 根据当前页面路径计算相对路径
  function getBasePath() {
    const path = window.location.pathname;
    // 计算从当前页面到根目录的相对路径
    const depth = (path.match(/\//g) || []).length - 1; // 减去开头的'/'
    if (depth <= 1) {
      return './'; // 根目录或一级目录
    }
    return '../'; // 二级或更深目录
  }

  const basePath = getBasePath();

  // 加载导航栏
  function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      fetch(basePath + 'assets/components/navbar.html')
        .then(response => response.text())
        .then(html => {
          navbarContainer.innerHTML = html;
          // 设置导航链接
          const navProfile = document.getElementById('nav-profile');
          const navPortfolio = document.getElementById('nav-portfolio');
          if (navProfile) navProfile.href = basePath + 'index.html';
          if (navPortfolio) navPortfolio.href = basePath + 'portfolio/index.html';
        })
        .catch(err => console.error('Failed to load navbar:', err));
    }
  }

  // 加载边栏
  function loadSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
      fetch(basePath + 'assets/components/sidebar.html')
        .then(response => response.text())
        .then(html => {
          sidebarContainer.innerHTML = html;
          // 设置头像路径
          const avatar = document.getElementById('sidebar-avatar');
          if (avatar) avatar.src = basePath + 'assets/images/Sticky.jpg';
        })
        .catch(err => console.error('Failed to load sidebar:', err));
    }
  }

  // 页面加载完成后加载组件
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadNavbar();
      loadSidebar();
    });
  } else {
    loadNavbar();
    loadSidebar();
  }
})();

