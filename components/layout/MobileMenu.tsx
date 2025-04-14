"use client";
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  // Function to handle link clicks
  const handleLinkClick = () => {
    handleMobileMenu(); // This will close the mobile menu
  };

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <Link
              className="d-flex main-logo align-items-center d-inline-flex"
              href="/"
              onClick={handleLinkClick} // Added click handler
            >
              <img src="/assets/imgs/footer-1/favicon.svg" alt="infinia" />
              <span className="fs-4 ms-2 text-dark">Dawit.dev</span>
            </Link>
            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="mobile-header-content-area">
            <PerfectScrollbar className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading ps-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        href="#about"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#services"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#portfolio"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#resume"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Resume
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#blog"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/#contact"
                        onClick={handleLinkClick} // Added click handler
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
}
