"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import type { CSSProperties } from "react";

export default function Coporation2() {
  const logoContainerStyle: CSSProperties = {
    width: "70px", // Adjust as needed
    height: "50px", // Adjust as needed
    borderRadius: "8px", // Rounded corners
    backgroundColor: "#222", // Dark background color (adjust as needed)
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5px", // Spacing between logos
  };

  const logoStyle: CSSProperties = {
    maxWidth: "90%", // Take up most of the container width
    maxHeight: "90%", // Take up most of the container height
    objectFit: "contain", // Maintain aspect ratio
    filter: "grayscale(0%)",
  };

  return (
    <>
      <section className="section-coporation">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="rounded-3 border border-1 position-relative overflow-hidden">
                <div className="box-linear-animation">
                  <div className="p-lg-8 p-md-6 p-3">
                    <div className="d-flex align-items-center">
                      <svg
                        className="text-primary-2 me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={5}
                        height={6}
                        viewBox="0 0 5 6"
                        fill="none"
                      >
                        <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                      </svg>
                      <span className="text-linear-4 d-flex align-items-center">
                        {" "}
                        Cooperation{" "}
                      </span>
                    </div>
                    <h3 className="fw-medium">
                      Collaborated with{" "}
                      <span className="text-300">
                        agencies, <br />
                      </span>{" "}
                      startups & enterprises{" "}
                      <span className="text-300">
                        to build impactful digital products.
                      </span>
                    </h3>
                    <div className="my-5 border border-1 rounded-2 p-3">
                      {/* Carousel Scroll */}
                      <Marquee className="carouselTicker carouselTicker-left position-relative z-1">
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/1695985224885.jpg"
                                alt="GoDigitalAfrica Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/1659378087174.jpg"
                                alt="Herani Tech Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/Logo_of_Ethiopian_INSA.png"
                                alt="INSA Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/debre_markos_university_logo.jpg"
                                alt="Debre Markos University Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/logo.webp"
                                alt="Additional Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                        </ul>
                      </Marquee>
                      <Marquee
                        className="carouselTicker carouselTicker-right position-relative z-1"
                        direction="right"
                      >
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/1695985224885.jpg"
                                alt="GoDigitalAfrica Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/1659378087174.jpg"
                                alt="Herani Tech Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/Logo_of_Ethiopian_INSA.png"
                                alt="INSA Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/debre_markos_university_logo.jpg"
                                alt="Debre Markos University Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                          <li className="carouselTicker__item">
                            <div style={logoContainerStyle}>
                              {" "}
                              {/* Rectangle design with inline styles */}
                              <img
                                src="assets/imgs/home-page-2/experience/logo.webp"
                                alt="Additional Logo"
                                style={logoStyle} // Apply logo sizing style
                              />
                            </div>
                          </li>
                        </ul>
                      </Marquee>
                    </div>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                      <div>
                        <div className="circle-1 position-relative z-0">
                          <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                              <img
                                className="w-100 h-100 rounded-circle"
                                src="assets/imgs/coporation/photo_1_2025-04-17_16-03-.jpg"
                                alt="zelio"
                              />
                              <svg
                                className="text-primary-2 position-absolute bottom-0 end-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 5 6"
                                fill="none"
                              >
                                <circle
                                  cx="2.5"
                                  cy={3}
                                  r="2.5"
                                  fill="#A8FF53"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <a
                          href="https://t.me/D4vv4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-telegram-fill" />
                          <span className="text-300">
                            [Telegram]{" "}
                            <span className="text-secondary-2">@D4vv4</span>
                          </span>
                        </a>

                        <a
                          href="tel:+251985392862"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-phone-fill" />
                          <span className="text-300">
                            [phone]{" "}
                            <span className="text-secondary-2">
                              +251985392862
                            </span>
                          </span>
                        </a>

                        <a
                          href="mailto:davegerim@gmail.com"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="ri-mail-fill" />
                          <span className="text-300">
                            [email]{" "}
                            <span className="text-secondary-2">
                              davegerim@gmail.com
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute d-none d-md-block decorate">
                    <div className="rotateme">
                      <div className="circle-1-1" />
                      <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                        <svg
                          className="mb-5 position-absolute bottom-0 start-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                      <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                        <svg
                          className="mb-3 position-absolute bottom-0 end-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-lg-0 pt-5">
              <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Git Journaling (Zuret Tour project 2023){" "}
                  </span>
                </div>
                <div className="h-100 position-relative">
                  <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">10 Jul:</p>
                        <span className="text-dark">
                          Created project structure with React.js (frontend) and
                          Nest.js (backend)
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">15 Jul:</p>
                        <span className="text-dark">
                          Integrated Chrome DevTools for frontend testing
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">05 Aug:</p>
                        <span className="text-dark">
                          Used Swagger to document all endpoints
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">10 Sep:</p>
                        <span className="text-dark">
                          Deployed frontend and backend .{} Tested live
                          endpoints and fixed deployment issues
                        </span>
                      </div>
                    </li>
                    {/* <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">05 Mar:</p>
                        <span className="text-dark">
                          TuneStream-Music-streaming-service-API
                        </span>
                      </div>
                    </li> */}
                  </ul>
                  <div className="line-left position-absolute border-start z-0" />
                </div>
                <div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
