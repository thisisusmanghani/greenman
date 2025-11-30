    // ========== MOBILE MENU FUNCTIONALITY ==========
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    }
    
    // Hamburger click
    hamburger.addEventListener('click', toggleMenu);
    
    // Overlay click to close
    mobileOverlay.addEventListener('click', toggleMenu);
    
    // Handle dropdown toggle on mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown');
        
        if (dropdown) {
            // Prevent default and toggle dropdown on mobile
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other open dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('dropdown-open');
                        }
                    });
                    
                    // Toggle current dropdown
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
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
