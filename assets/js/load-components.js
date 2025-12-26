// 加载公共组件的脚本
(function() {
  // 根据当前页面路径计算相对路径
  function getBasePath() {
    const path = window.location.pathname;
    // 移除开头的 '/' 和结尾的 '/'
    let cleanPath = path.replace(/^\/|\/$/g, '');
    
    // 如果路径为空，说明在根目录
    if (!cleanPath) {
      return './';
    }
    
    // 移除文件名（最后一个 '/' 之后的部分，包括 index.html）
    // 例如：'publication/paper.html' -> 'publication'
    //      'portfolio/index.html' -> 'portfolio'
    const lastSlashIndex = cleanPath.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      cleanPath = cleanPath.substring(0, lastSlashIndex);
    } else {
      // 没有 '/'，说明是根目录下的文件（如 index.html）
      return './';
    }
    
    // 如果移除文件名后为空，说明在根目录
    if (!cleanPath) {
      return './';
    }
    
    // 计算目录深度（按 '/' 分割）
    const pathParts = cleanPath.split('/').filter(part => part);
    
    // 根据目录深度返回相应的相对路径
    // 一级目录（如 portfolio 或 publication）返回 '../'
    // 更深层目录返回更多的 '../'
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
          if (navProfile) navProfile.href = basePath + 'index.html';
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
          if (avatar) avatar.src = basePath + 'assets/images/headphoto.png';
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

