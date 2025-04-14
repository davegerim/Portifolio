import Link from 'next/link'



export default function Blog2() {
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
            {/*prettier-ignore*/}
            <div className="col-lg-4">
							<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-2 overflow-hidden">
										<img className="w-100" src="assets/imgs/home-page-2/blog/Screenshot 2025-04-13 142847.png" alt="zelio" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" href="#">Testing</Link>
										<Link href="#" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
											<i className="ri-arrow-right-up-line" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">July 12, 2023 • 3 min read</span>
									<h6 className="blog-card__title mt-2">Debugging Zuret Tour – Real-Time Testing in Action</h6>
									<p className="blog-card__description fs-7">During development, I relied heavily on browser dev tools to test and debug the Zuret Tour app. This post dives into how I used network monitoring and console debugging to catch performance bottlenecks and fix frontend bugs effectively.</p>
									<Link href="#" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
								</div>
							</div>
						</div>
            <div className="col-lg-4">
              <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-2 overflow-hidden">
                    <img
                      className="w-100"
                      src="assets/imgs/home-page-2/blog/Screenshot 2025-04-14 110332.png"
                      alt="zelio"
                    />
                    <Link
                      className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2"
                      href="#"
                    >
                      Swagger
                    </Link>
                    <Link
                      href="#"
                      className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">
                   August 5, 2023 • 3 min read
                  </span>
                  <h6 className="blog-card__title mt-2">
                    Documenting Zuret Tour APIs with Swagger
                  </h6>
                  <p className="blog-card__description fs-7">
                    lear API documentation was key to Zuret Tour’s backend
                    success. I used Swagger in NestJS to define, test, and
                    organize RESTful endpoints—making collaboration smooth and
                    integration seamless.
                  </p>
                  <Link
                    href="#"
                    className="link-overlay position-absolute top-0 start-0 w-100 h-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-2 overflow-hidden">
                    <img
                      className="w-100"
                      src="assets/imgs/home-page-2/blog/Screenshot 2025-04-13 163813.png"
                      alt="zelio"
                    />
                    <Link
                      className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2"
                      href="#"
                    >
                      Deployment
                    </Link>
                    <Link
                      href="#"
                      className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle"
                    >
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                </div>
                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">
                    March 28, 2023 • 3 min read
                  </span>
                  <h6 className="blog-card__title mt-2">
                    Deploying Zuret Tour – From Localhost to Production
                  </h6>
                  <p className="blog-card__description fs-7">
                    After development, I managed the deployment process of Zuret
                    Tour. This blog covers how I moved the project from local
                    development to production, tackled deployment issues, and
                    ensured everything ran smoothly in the live environment.
                  </p>
                  <Link
                    href="#"
                    className="link-overlay position-absolute top-0 start-0 w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
