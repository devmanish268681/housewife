import React from "react";

//constants
import { steps } from "../../constants";

const DeliverySteps = () => {
  return (
    <section className="py-10 px-4 bg-gray-50 rounded-xl" aria-labelledby="delivery-steps">
      <h2 id="delivery-steps" className="text-xl font-semibold text-center mb-8">
        <span aria-hidden="true">🚀</span> How Delivery Works
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {steps?.map((step) => (
          <article
            key={step?.id}
            className="bg-white rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <div className="text-4xl mb-4" aria-hidden="true">{step?.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step?.title}</h3>
            <p className="text-sm text-gray-600">{step?.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DeliverySteps;
