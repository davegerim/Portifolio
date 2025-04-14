"use client";

import { useState } from "react";

type CompanyData = {
  [key: string]: {
    title: string;
    bullets: string[];
    skills: string[];
    period: string;
  };
};

export default function Experience2() {
  const [selectedCompany, setSelectedCompany] = useState<string>("Google");

  const companyData: CompanyData = {
    Google: {
      title: "WordPress Developer",
      bullets: [
        " Developed and maintained responsive websites, ensuring cross-device compatibility. ",
        "Improved website performance by 40% through optimization techniques.",
        "Integrated APIs and third-party services to enhance functionality.",
      ],
      skills: ["WordPress", "HTML5", "CSS3", "JavaScript", "Git "],
      period: "Feb 2025 - Present",
    },
    Twitter: {
      title: "Frontend Developer ",
      bullets: [
        "Led a UI/UX redesign, increasing user engagement by 30%.",
        "Developed reusable React.js components, reducing development time by 30%.",
        "Integrated RESTful APIs and collaborated with backend developers to optimize performance. ",
      ],
      skills: [
        "React.js,",
        " Mantine UI",
        "Tabler Icons",
        "TypeScript",
        "API Integration",
      ],
      period: "June 2024 - January 2025",
    },
    Amazon: {
      title: "Full-Stack Developer",
      bullets: [
        " Developed Zuret Tour, a secure tourism web application, improving accessibility and performance. ",
        "Optimized API response times by 30% for a smoother user experience",
      ],
      skills: [
        " React.js",
        " Nest.js",
        "Node.js",
        "TypeScript",
        "API Development ",
      ],
      period: "March 2023 - June 2023",
    },
  };

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(company);
  };

  const currentData = companyData[selectedCompany];

  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
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
                    Experience{" "}
                  </span>
                </div>
                <h3>
                  <span className="text-300">
                    From curiosity to clean, scalable{" "}
                  </span>
                  full-stack solutions.
                  <span className="text-300">
                    <br />
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <div
                        className={`technology border border-1 rounded-3 p-3 ${
                          selectedCompany === "Google" ? "active" : ""
                        }`}
                        onClick={() => handleCompanyClick("Google")}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/1695985224885.jpg"
                            alt="google"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "contain",
                            }}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">GoDigitalAfrica </h5>
                            <span className="text-300">Feb 2025 - Present</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`technology border border-1 rounded-3 p-3 ${
                          selectedCompany === "Twitter" ? "active" : ""
                        }`}
                        onClick={() => handleCompanyClick("Twitter")}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/1659378087174.jpg"
                            alt="twitter"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "contain",
                            }}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Herani Tech </h5>
                            <span className="text-300">
                              June 2024 - January 2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`technology border border-1 rounded-3 p-3 ${
                          selectedCompany === "Amazon" ? "active" : ""
                        }`}
                        onClick={() => handleCompanyClick("Amazon")}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="assets/imgs/home-page-2/experience/Logo_of_Ethiopian_INSA.png"
                            alt="amazon"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "contain",
                            }}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">
                              INSA (Information Network Security Agency)
                            </h5>
                            <span className="text-300">
                              March 2023 - June 2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="text-linear-4">{currentData.title}</h6>
                      <span className="text-300">{currentData.period}</span>
                    </div>
                    <ul className="mt-4">
                      {currentData.bullets.map((bullet, index) => (
                        <li key={index} className="text-dark mb-3">
                          {bullet.includes("improving performance") ? (
                            <>
                              {bullet.split("improving performance")[0]}
                              <span className="text-secondary-2">
                                improving performance
                              </span>
                              {bullet.split("improving performance")[1]}
                            </>
                          ) : (
                            bullet
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      {currentData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-300 border border-1 px-3 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="background"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
