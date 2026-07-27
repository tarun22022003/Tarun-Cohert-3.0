import React from "react";
import {
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const Features = () => {

  const features = [
    {
      icon: <Truck size={40} />,
      title: "Free Shipping",
      desc: "On every order above $50",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payments",
      desc: "100% Safe Checkout",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "Always here to help",
    },
  ];

  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-lime-400 transition duration-300 hover:-translate-y-2"
            >

              <div className="text-lime-400 flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-white text-2xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;