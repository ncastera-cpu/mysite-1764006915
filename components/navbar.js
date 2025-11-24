class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    z-index: 1000;
                }

                .navbar {
                    background: rgba(255, 251, 240, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(139, 115, 85, 0.1);
                    transition: all 0.3s ease;
                }

                .navbar.scrolled {
                    background: rgba(255, 251, 240, 0.98);
                    box-shadow: 0 4px 20px rgba(26, 60, 39, 0.1);
                }

                .nav-link {
                    color: #4D3926;
                    text-decoration: none;
                    font-weight: 600;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: #1A3C27;
                    background: rgba(26, 60, 39, 0.05);
                }

                .nav-link.active {
                    color: #1A3C27;
                }

                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 1rem;
                    right: 1rem;
                    height: 2px;
                    background: #1A3C27;
                    border-radius: 1px;
                }

                .mobile-menu {
                    background: rgba(255, 251, 240, 0.98);
                    box-shadow: 0 4px 20px rgba(26, 60, 39, 0.1);
                }

                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                }

                @media (min-width: 769px) {
                    .mobile-nav {
                        display: none;
                    }
                }

                .menu-toggle {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    color: #1A3C27;
                    text-decoration: none;
                }
            </style>
            <nav class="navbar">
                <div style="max-width: 1200px; margin: 0 auto; padding: 1rem 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <a href="/" class="logo" style="font-size: 1.5rem;">
                            La Bouchée Rustique
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="desktop-nav" style="display: flex; gap: 2rem; align-items: center;">
                            <a href="/" class="nav-link active">Accueil</a>
                            <a href="/menu.html" class="nav-link">Menu</a>
                            <a href="/about.html" class="nav-link">À propos</a>
                            <a href="/contact.html" class="nav-link">Contact</a>
                            <a href="/reservation.html" style="background: #1A3C27; color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
                                Réserver
                            </a>
                        </div>

                        <!-- Mobile Navigation -->
                        <div class="mobile-nav">
                            <button class="menu-toggle" id="mobileMenuToggle">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" id="mobileMenu" style="display: none; flex-direction: column; padding: 2rem; border-top: 1px solid rgba(139, 115, 85, 0.1);">
                        <a href="/" class="nav-link active" style="margin-bottom: 1rem;">Accueil</a>
                        <a href="/menu.html" class="nav-link" style="margin-bottom: 1rem;">Menu</a>
                            <a href="/about.html" class="nav-link" style="margin-bottom: 1rem;">À propos</a>
                        <a href="/contact.html" class="nav-link" style="margin-bottom: 1rem;">Contact</a>
                        <a href="/reservation.html" style="background: #1A3C27; color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 600; text-align: center; margin-top: 1rem;">
                            Réserver
                        </a>
                    </div>
                </div>
            </nav>
        `;

        // Add scroll event listener for navbar background
        setTimeout(() => {
            const navbar = this.shadowRoot.querySelector('.navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Mobile menu toggle functionality
            const mobileMenuToggle = this.shadowRoot.getElementById('mobileMenuToggle');
            const mobileMenu = this.shadowRoot.getElementById('mobileMenu');

            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', () => {
                    const isHidden = mobileMenu.style.display === 'none';
                    mobileMenu.style.display = isHidden ? 'flex' : 'none';
                });
            }
        }, 0);
    }
}

customElements.define('custom-navbar', CustomNavbar);