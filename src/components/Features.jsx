export default function Features() {
  const features = [
    { title: "Direct Career Page Applications", desc: "We manually apply to company portals with tailored resumes." },
    { title: "Cold Emails to HR", desc: "Personalized outreach to recruiters with higher response chances." },
    { title: "Cold Calling", desc: "We go the extra mile by reaching out directly via phone calls." },
  ];

  return (
    <section id="features" className="section features text-center">
      <h3>Our Services</h3>
      <div className="feature-grid container">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
