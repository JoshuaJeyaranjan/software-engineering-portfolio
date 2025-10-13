import React, { useState } from "react";
import "./ContactPage.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    let data;
    try {
      data = await res.json(); // try parsing JSON
    } catch (err) {
      data = {}; // fallback if no JSON returned
    }

    if (res.ok) {
      setStatus("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus(data.error || "Failed to send message");
    }
  } catch (err) {
    console.error(err);
    setStatus("There was an error sending your message. Please try again later.");
  }
};

  return (
    <div className="contact-page">
      <Nav />

      <Banner
        title="Get In Touch"
        subtitle="Let's discuss your next project or just say hello!"
      />

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question about my work or want to
                discuss a potential collaboration, I'd love to hear from you!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method__icon">
                    <img
                      className="contact-method__image"
                      src="/photoAssets/email1.svg"
                    ></img>
                  </div>
                  <div className="contact-method__content">
                    <h3>Email</h3>
                    <a
                      className="contact-method__link"
                      href="mailto:joshuajeyaranjan@gmail.com"
              ></a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    {" "}
                    <img
                      className="contact-method__image"
                      src="/photoAssets/linkedin1.svg"
                    ></img>
                  </div>
                  <div className="contact-method__content">
                    <h3>LinkedIn</h3>
                    <a
                      className="contact-method__link"
                      href="https://www.linkedin.com/in/joshuajeyaranjan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">
                    {" "}
                    <img
                      className="contact-method__image"
                      src="/photoAssets/github.svg"
                    ></img>
                  </div>
                  <div className="contact-method__content">
                    <h3>GitHub</h3>
                    <a
                      className="contact-method__link"
                      href="https://github.com/JoshuaJeyaranjan"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
                <p className="form-status">{status}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
