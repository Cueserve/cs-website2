'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RollingButton } from '@/components/ui/RollingButton';

export default function Navbar() {
  const pathname = usePathname() || '/';

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <div data-animation="default" data-collapse="all" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="container navbar-container">
        <div className="navbar-wrap">
          <div className="navbar-flex-wrap">
            <div className="nav-flex-left">
              <Link href="/" onClick={handleHomeClick} className={`main-logo-wrap w-nav-brand ${isActive('/') ? 'w--current' : ''}`}>
                <img src="/cueserve-logo.png" loading="lazy" alt="Cueserve Logo" className="main-logo" style={{ maxHeight: '40px', width: 'auto' }} />
              </Link>
              <div className="nav-links-wrapper">
                <div className="nav-links-flex">
                  <Link href="/" onClick={handleHomeClick} className={`single-nav-link w-inline-block ${isActive('/') ? 'w--current' : ''}`}>
                    <div>Home</div>
                  </Link>
                  <Link href="/about-us" className={`single-nav-link w-inline-block ${isActive('/about-us') ? 'w--current' : ''}`}>
                    <div>About Us</div>
                  </Link>
                  <Link href="/services" className={`single-nav-link w-inline-block ${isActive('/services') ? 'w--current' : ''}`}>
                    <div>Services</div>
                  </Link>
                  <Link href="/projects" className={`single-nav-link w-inline-block ${isActive('/projects') ? 'w--current' : ''}`}>
                    <div>Works</div>
                  </Link>
                  <Link href="/contact-us" className={`single-nav-link w-inline-block ${isActive('/contact-us') ? 'w--current' : ''}`}>
                    <div>Contact</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-flex-right">
              <div className="nav-right-flex">
                <div className="nav-button-wrap">
                  <RollingButton variant="blue" href="/contact-us" text="Contact Us" />
                </div>
                <div className="navigations-wrapper">
                  <nav role="navigation" className="navigation w-nav-menu">
                    <div className="container navigation-container">
                      <div className="hamburger-wrapper">
                        <div id="w-node-_603589df-a36e-3abb-1735-d40c05c2b1c9-b64688fb" className="navigation-content-wrap">
                          <div className="navigation-content-block">
                            <div className="navigation-content-wrapper">
                              <div className="navigation-contents">
                                <div className="navigation-links-flex">
                                  <a href="/" onClick={handleHomeClick} className={`single-navigation-links w-inline-block ${isActive('/') ? 'w--current' : ''}`}>
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Home</div>
                                        <div className="navigation-link-count">(01)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border">
                                      <div className="navigation-link-border-inner"></div>
                                    </div>
                                  </a>
                                  <Link href="/about-us" className={`single-navigation-links w-inline-block ${isActive('/about-us') ? 'w--current' : ''}`}>
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">About</div>
                                        <div className="navigation-link-count">(01)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border">
                                      <div className="navigation-link-border-inner"></div>
                                    </div>
                                  </Link>
                                  <Link href="/services" className={`single-navigation-links w-inline-block ${isActive('/services') ? 'w--current' : ''}`}>
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Services</div>
                                        <div className="navigation-link-count">(04)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border">
                                      <div className="navigation-link-border-inner"></div>
                                    </div>
                                  </Link>
                                  <Link href="/projects" className={`single-navigation-links w-inline-block ${isActive('/projects') ? 'w--current' : ''}`}>
                                    <div className="navigation-inline-wrap">
                                      <div className="navigation-text-flex">
                                        <div className="navigation-link-text">Works</div>
                                        <div className="navigation-link-count">(05)</div>
                                      </div>
                                    </div>
                                    <div className="navigation-link-border">
                                      <div className="navigation-link-border-inner"></div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="navigation-button-wrapper">
                                  <Link href="/contact-us" className="navigation-button w-inline-block">
                                    <div className="navigation-button-text-wrap">
                                      <div className="navigation-button-text">Get In Touch</div>
                                      <div className="navigation-button-text absolute">Get In Touch</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="navigation-bg-wrap">
                              <div className="navigation-bg-top"></div>
                              <div className="navigation-bg-bottom"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div data-w-id="9f5a7dc5-49e2-a9c4-07e5-2c6565c6e46e" className="hamburger-button w-nav-button">
                    <div className="hamburger-wrap">
                      <div className="hamburger-bars-wrap">
                        <div className="hamburger-bar _01"></div>
                        <div className="hamburger-bar _02"></div>
                        <div className="hamburger-bar _03"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
