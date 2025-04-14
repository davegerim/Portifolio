"use client";

import { SetStateAction, useState } from "react";

export default function Blog2() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (imageSrc: SetStateAction<string>) => {
    setActiveImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage("");
  };

  return (
    <>
      <section
        id="blog"
        className="section-blog-2 position-relative pt-60 pb-60"
      >
        <div className="container">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
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
                Latest Posts{" "}
              </span>
            </div>
            <h3>From Blog</h3>
          </div>

          <div className="row mt-8">
            {[
              {
                image:
                  "assets/imgs/home-page-2/blog/Screenshot 2025-04-13 142847.png",
                date: "July 12, 2023 • 3 min read",
                title: "Debugging Zuret Tour – Real-Time Testing in Action",
                description:
                  "During development, I relied heavily on browser dev tools to test and debug the Zuret Tour app.",
              },
              {
                image:
                  "assets/imgs/home-page-2/blog/Screenshot 2025-04-14 110332.png",
                date: "August 5, 2023 • 3 min read",
                title: "Documenting Zuret Tour APIs with Swagger",
                description:
                  "API documentation was key to Zuret Tour's backend success.",
              },
              {
                image:
                  "assets/imgs/home-page-2/blog/Screenshot 2025-04-13 163813.png",
                date: "March 28, 2023 • 3 min read",
                title: "Deploying Zuret Tour – From Localhost to Production",
                description:
                  "After development, I managed the deployment process of Zuret Tour.",
              },
            ].map((blog, index) => (
              <div className="col-lg-4" key={index}>
                <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                  <div
                    className="blog-card__image position-relative"
                    onClick={() => openModal(blog.image)}
                  >
                    <div className="zoom-img rounded-2 overflow-hidden">
                      <img
                        className="w-100"
                        src={blog.image}
                        alt={blog.title}
                      />
                      <div className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2">
                        {blog.title}
                      </div>
                      <div className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
                        <i className="ri-arrow-right-up-line" />
                      </div>
                    </div>
                  </div>
                  <div className="blog-card__content position-relative text-center mt-4">
                    <span className="blog-card__date fs-7">{blog.date}</span>
                    <h6 className="blog-card__title mt-2">{blog.title}</h6>
                    <p className="blog-card__description fs-7">
                      {blog.description}
                    </p>
                    {/* Removed the link overlay to disable redirection */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div
              className="modal"
              onClick={closeModal}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  maxWidth: "80%",
                  maxHeight: "80%",
                  overflow: "auto",
                }}
              >
                <img
                  src={activeImage}
                  alt="Active Blog"
                  style={{ width: "100%", display: "block" }}
                />
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
