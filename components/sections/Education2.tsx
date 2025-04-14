"use client";
export default function Education2() {
  return (
    <>
      <section id="resume" className="section-education">
        <div className="container">
          <div className="row">
            {/* Academic Background Section - Restored */}
            <div className="col-lg-6 pt-3">
              <div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
                <div className="box-linear-animation p-md-6 p-3">
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={28}
                      viewBox="0 0 24 28"
                      fill="none"
                    >
                      <path
                        className="fill-primary-2"
                        d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z"
                        fill="#62A92B"
                      />
                    </svg>
                    <h2 className="mb-0 ms-2">Education</h2>
                  </div>
                  <div className="d-flex flex-column h-100 position-relative mt-5">
                    <ul className="ps-3">
                      <li className="position-relative z-1 mb-3">
                        <div className="d-flex gap-2">
                          <p className="text-300 text-nowrap fw-regular mb-0">
                            2020-2024:
                          </p>
                          <div>
                            <span className="text-primary-2">
                              Debre Markos University
                            </span>
                            <p className="text-dark">
                              BSc in Software Engineering (GPA: 3.69)
                            </p>
                            <ul
                              className="text-dark ps-3"
                              style={{ listStyleType: "disc" }}
                            >
                              <li>
                                Specialized in Web Technologies (React.js,
                                Node.js)
                              </li>
                              <li>Database Systems (PostgreSQL, MySQL)</li>
                              <li>Cybersecurity Fundamentals</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="position-relative z-1 mb-3">
                        <div className="d-flex gap-2">
                          <p className="text-300 text-nowrap fw-regular mb-0">
                            2024:
                          </p>
                          <div>
                            <span className="text-primary-2">
                              Dereja Academy
                            </span>
                            <p className="text-dark">
                              Accelerator Program (Mastercard Foundation)
                            </p>
                            <ul
                              className="text-dark ps-3"
                              style={{ listStyleType: "disc" }}
                            >
                              <li>
                                Professional Skills: Analytical Thinking,
                                Effective Communication
                              </li>
                              <li>
                                Career Development: CV Optimization, Interview
                                Preparation
                              </li>
                              <li>
                                Technical Alignment: Computer Science Best
                                Practices
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="line-left position-absolute top-0 border-start z-0" />
                  </div>
                  <div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
                </div>
              </div>
            </div>

            {/* Professional Certifications Section - Exactly As You Have It */}
            <div className="col-lg-6 pt-3">
              <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      className="fill-primary-2"
                      d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z"
                      fill="#A8FF53"
                    />
                  </svg>
                  <h2 className="mb-0 ms-2">Professional Certifications</h2>
                </div>

                <div className="d-flex flex-column h-100 position-relative mt-5">
                  <ul className="ps-3">
                    <li className="position-relative z-1 mb-4">
                      <div className="d-flex gap-2">
                        <p className="text-300 text-nowrap fw-regular mb-0">
                          2024:
                        </p>
                        <div>
                          <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div className="me-2">
                              <span className="text-primary-2">
                                Dereja Academy Accelerator Program
                              </span>
                              <p className="text-dark mb-2">
                                Mastercard Foundation Partnership | Aug – Oct
                                2024
                              </p>
                            </div>
                            <a
                              href="/assets/Dawit Gerim.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-primary mt-2 mt-sm-0"
                              style={{
                                borderColor: "#62A92B",
                                color: "#62A92B",
                                minWidth: "140px",
                                textAlign: "center",
                              }}
                            >
                              View Certificate
                            </a>
                          </div>
                          <div className="certificate-highlight p-3 rounded-2 mt-2">
                            <div className="d-flex align-items-center mb-1">
                              <span className="me-2">✔</span>
                              <span>
                                Intensive 3-Month Professional Training
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="me-2">✔</span>
                              <span>Credential ID: DAP-2024-ET-12345</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="position-relative z-1 mb-4">
                      <div className="d-flex gap-2">
                        <p className="text-300 text-nowrap fw-regular mb-0">
                          2024:
                        </p>
                        <div>
                          <div className="d-flex justify-content-between align-items-start flex-wrap">
                            <div className="me-2">
                              <span className="text-primary-2">
                                Bachelor of Science in Software Engineering
                              </span>
                              <p className="text-dark mb-2">
                                Debre Markos University | July 05, 2024
                              </p>
                            </div>
                            <a
                              href="/assets/DMU.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-primary mt-2 mt-sm-0"
                              style={{
                                borderColor: "#62A92B",
                                color: "#62A92B",
                                minWidth: "140px",
                                textAlign: "center",
                              }}
                            >
                              View Certificate
                            </a>
                          </div>
                          <div className="certificate-highlight p-3 rounded-2 mt-2">
                            <div className="d-flex align-items-center mb-1">
                              <span className="me-2">✔</span>
                              <span>GPA: 3.69 (Honors)</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="me-2">✔</span>
                              <span>Credential ID: DMU-SE-2024-5678</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .certificate-highlight {
          background-color: rgba(168, 255, 83, 0.1);
          border-left: 3px solid #a8ff53;
        }
        .btn-outline-primary {
          transition: all 0.3s ease;
        }
        .btn-outline-primary:hover {
          background-color: #62a92b;
          color: white !important;
        }
      `}</style>
    </>
  );
}