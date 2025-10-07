import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myzndepv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact text-center">
      <h3>Get Started</h3>
      <p>Fill this quick form and we’ll call you for onboarding.</p>

      <form onSubmit={handleSubmit} className="container">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="role" placeholder="Preferred Role"></textarea>
        <button type="submit">Submit</button>
      </form>

      {status === "success" && (
        <p style={{ color: "green", marginTop: "10px" }}>
          ✅ Form submitted successfully! We'll reach out soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ Something went wrong. Please try again.
        </p>
      )}

      <div style={{ marginTop: "20px" }}>
        <a href="tel:7014606977" className="btn">
          Call Now: 7014606977
        </a>
      </div>
    </section>
  );
}
