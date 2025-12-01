    // ========== MOBILE MENU FUNCTIONALITY ==========
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMenu() {
        if (hamburger) hamburger.classList.toggle('active');
        if (mainNav) mainNav.classList.toggle('active');
        if (mobileOverlay) mobileOverlay.classList.toggle('active');
        if (mainNav) body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    }
    
    // Hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
    
    // Overlay click to close
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMenu);
    }
    
    // Handle dropdown and mega menu toggle on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown');
        const megaMenu = item.querySelector('.products-mega');
        const hasMega = item.classList.contains('has-mega');
        
        if (dropdown || megaMenu || hasMega) {
            // Prevent default and toggle dropdown/mega menu on mobile
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other open dropdowns/mega menus
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('dropdown-open');
                        }
                    });
                    
                    // Toggle current dropdown/mega menu
                    item.classList.toggle('dropdown-open');
                }
            });
        } else {
            // Close menu when clicking non-dropdown links on mobile
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (mainNav && window.innerWidth > 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
