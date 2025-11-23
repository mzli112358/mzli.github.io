// 加载公共组件的脚本
(function() {
  // 根据当前页面路径计算相对路径
  function getBasePath() {
    const path = window.location.pathname;
    // 移除开头的 '/' 和结尾的 '/'
    const cleanPath = path.replace(/^\/|\/$/g, '');
    
    // 如果路径为空或只有 'index.html'，说明在根目录
    if (!cleanPath || cleanPath === 'index.html') {
      return './';
    }
    
    // 计算路径深度（按 '/' 分割）
    const pathParts = cleanPath.split('/').filter(part => part && part !== 'index.html');
    
    // 如果只有一级目录（如 portfolio 或 publication），返回 '../'
    if (pathParts.length === 1) {
      return '../';
    }
    
    // 更深层的目录，需要更多的 '../'
    return '../'.repeat(pathParts.length);
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

