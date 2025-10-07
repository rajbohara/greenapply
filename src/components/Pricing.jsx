export default function Pricing() {
  const plans = [
    { name: "Starter", price: "₹399", features: ["100 Companies"] },
    { name: "Growth", price: "₹499", features: ["200 Companies"] },
    { name: "Pro", price: "₹699", features: ["300 Companies"] },
  ];

  return (
    <section id="pricing" className="section pricing text-center">
      <h3>Pricing</h3>
      <div className="pricing-grid container">
        {plans.map((plan, i) => (
          <div key={i} className="plan">
            <h4>{plan.name}</h4>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((f, j) => (
                <li key={j}>✔ {f}</li>
              ))}
            </ul>
            <a href="#contact">Choose {plan.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
