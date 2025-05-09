"use client"; // This line marks the component as a Client Component

import React, { useState } from "react";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Add your access key here
    const accessKey = "1f67db0d-ae6e-4205-82ed-9005ff9e20bd";

    const json = JSON.stringify({
      ...formData,
      access_key: accessKey,
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Message sent successfully:", result);
        alert("Message sent successfully!");

        // Clear the form fields
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Error sending message:", result);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending your message.");
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="section-contact-2 position-relative pb-60 overflow-hidden"
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className="text-primary-2 mb-3">Let's connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        aria-label="username"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        aria-label="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="email"
                        name="email"
                        placeholder="Email"
                        aria-label="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        aria-label="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-3 border border-1 rounded-3"
                        id="message"
                        name="message"
                        placeholder="Message"
                        aria-label="With textarea"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary-2 rounded-2"
                      >
                        Send Message
                        <i className="ri-arrow-right-up-line" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-phone-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Phone Number</span>
                <h6 className="mb-0">+251985392862</h6>
              </div>
              <a
                href="tel:+251985392862"
                className="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-mail-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Email</span>
                <h6 className="mb-0">davegerim@gmail.com</h6>
              </div>
              <a
                href="mailto:davegerim@gmail.com"
                className="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-telegram-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Telegram</span>
                <h6 className="mb-0">@D4vv4</h6>
              </div>
              <a
                href="https://t.me/D4vv4"
                className="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-map-2-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Address</span>
                <h6 className="mb-0">Ethiopia, Addis Ababa</h6>
              </div>
              <a
                href="https://maps.app.goo.gl/Nnf2VCuGUtVcmch28"
                className="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
