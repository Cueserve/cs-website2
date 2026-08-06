import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta-wrap">
        <div className="container">
          <div className="cta-text-wrapper">
            <Link data-w-id="d6cef094-f9d6-3c17-acbb-669293611e91" href="/contact-us" className="cta-text-wrap w-inline-block">
              <div className="cta-button-wrap">
                <div className="cta-button-arrow-wrap">
                  <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/693967d4d6ddac0a17a84ab9_CTA-Arrow.svg" loading="lazy" alt="" className="cta-button-arrow"/>
                  <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/693967d4d6ddac0a17a84ab9_CTA-Arrow.svg" loading="lazy" alt="" className="cta-button-arrow absolute"/>
                </div>
              </div>
              <div className="cta-text">Pr<span className="cta-text-space">&nbsp;</span>Ject In <span className="cta-text-marked">Mind?</span></div>
            </Link>
          </div>
          <div className="cta-links-grid">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">Facebook</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">Twitter</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">Dribble</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="cta-social-link-wrap w-inline-block">
              <div className="cta-social-link-flex">
                <div className="cta-social-link-icon"></div>
                <div className="cta-social-link-text">Instagram</div>
              </div>
              <div className="cta-link-hover-bg"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-flex-wrap">
            <div data-w-id="d6cef094-f9d6-3c17-acbb-669293611eaf" className="footer-content-wrap">
              <Link href="/" aria-current="page" className="footer-logo-wrap w-inline-block w--current">
                <img loading="lazy" src="/cueserve-logo.png" alt="Cueserve Logo" className="footer-logo" style={{ maxHeight: '45px', width: 'auto' }}/>
              </Link>
              <p className="footer-details">Making life easy via technology is our motto. A one-stop destination for all your IT needs: Software, Website &amp; Mobile App Development.</p>
              <div className="newsletter-form-wrap w-form">
                <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" data-name="Newsletter Form" method="get" data-wf-page-id="68dbb9a72b91c794d0cdd10e" data-wf-element-id="d6cef094-f9d6-3c17-acbb-669293611eb5">
                  <div className="newsletter-field-wrap">
                    <input className="newsletter-field w-input" maxLength={256} name="Newsletter-Email" data-name="Newsletter Email" placeholder="Enter your email..." type="email" id="Newsletter-Email" required={true}/>
                    <input type="submit" data-wait="" className="newsletter-submit w-button" value=""/>
                  </div>
                </form>
                <div className="success-message-wrapper w-form-done">
                  <div className="success-message">Success! You&#x27;ve been added to our newsletter list. 😊</div>
                </div>
                <div className="error-message-wrap w-form-fail">
                  <div className="error-message">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="footer-right-wrap">
              <div className="quick-links-flex-wrap">
                <div data-w-id="d6cef094-f9d6-3c17-acbb-669293611ec1" className="quick-links-row one">
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Main Pages</h6>
                    <div className="footer-links-flex">
                      <div className="footer-links-row">
                        <Link href="/" aria-current="page" className="footer-link w--current">Home</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/about-us" className="footer-link">About Us</Link>
                      </div>
                      <div className="footer-links-row">
                        <Link href="/services" className="footer-link">Services</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/projects" className="footer-link">Projects</Link>
                      </div>
                      <div className="footer-links-row">
                        <Link href="/blogs" className="footer-link">Blogs</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/contact-us" className="footer-link">Contact</Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Utility Pages</h6>
                    <div className="footer-links-flex">
                      <div className="footer-links-row">
                        <Link href="/401" className="footer-link">Password Protected</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/utility-pages/license" className="footer-link">All Licenses</Link>
                      </div>
                      <div className="footer-links-row">
                        <Link href="/404" className="footer-link">404</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/utility-pages/changelog" className="footer-link">Changelog</Link>
                        <div className="footer-link-divider"></div>
                        <Link href="/utility-pages/style-guide" className="footer-link">Style Guide</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="d6cef094-f9d6-3c17-acbb-669293611eee" className="quick-links-row two">
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Location</h6>
                    <div className="location-wrap">
                      <div className="location-text">5, Punit Colony, Sindhwaimata Road, Opp. Spandan Hospital, Pratapnagar, Vadodara, Gujarat, India</div>
                    </div>
                  </div>
                  <div className="single-quick-links-wrapper">
                    <h6 className="quick-links-title">Contact</h6>
                    <div className="contact-infos-wrap">
                      <a href="mailto:info@cueserve.com?subject=Support" className="contact-info-text">info@cueserve.com</a>
                      <a href="tel:+918000299993" className="contact-info-text">+91-80002-99993</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container">
          <div className="footer-copyright-wrap">
            <div className="copyright-text">© Copyright 2015-2026 <Link href="/" aria-current="page" className="copyright-link w--current">Cueserve</Link> | All Rights Reserved</div>
          </div>
        </div>
      </div>
      <div className="footer-bg-overlay"></div>
    </footer>
  );
}
