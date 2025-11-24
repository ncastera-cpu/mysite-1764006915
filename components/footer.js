class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                .footer {
                    background: #1A3C27;
                    color: white;
                    padding: 3rem 2rem;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .footer-section h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                }

                .footer-section p {
                    margin-bottom: 0.5rem;
                    opacity: 0.9;
                }

                .footer-section a {
                    color: white;
                    text-decoration: none;
                    opacity: 0.9;
                    transition: opacity 0.3s ease;
                }

                .footer-section a:hover {
                    opacity: 1;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }

                .social-link:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .footer-bottom {
                    max-width: 1200px;
                    margin: 0 auto;
                    margin-top: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>La Bouchée Rustique</h3>
                        <p>Route des Champs Fleuris</p>
                        <p>12345 Campagne-sur-Verdure</p>
                        <p>France</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Horaires</h3>
                        <p>Lun - Sam: 12h - 14h30 / 19h - 22h</p>
                        <p>Dimanche: 12h - 15h</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>☎️ 01 23 45 67 89</p>
                        <p>📧 contact@laboucheerustique.fr</p>
                        <div class="social-links">
                            <a href="#" class="social-link">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="instagram"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 La Bouchée Rustique. Tous droits réservés.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);