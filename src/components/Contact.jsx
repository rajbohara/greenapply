export default function Contact() {
  return (
    <section id="contact" className="section contact text-center">
      <h3>Get Started</h3>
      <p>Fill this quick form and we’ll call you for onboarding.</p>
      <form action="https://formspree.io/f/maypknad" method="POST" className="container">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="role" placeholder="Preferred Role"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <a href="tel:7014606977" className="btn btn-green">Call Now: 7014606977</a>
      </div>
    </section>
  );
}
