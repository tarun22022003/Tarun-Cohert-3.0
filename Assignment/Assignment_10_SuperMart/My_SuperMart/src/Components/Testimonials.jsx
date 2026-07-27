import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {

  const users = [
    {
      name: "John Smith",
      review: "Amazing quality and super fast delivery!",
    },
    {
      name: "Emily Johnson",
      review: "Best shopping experience I've had online.",
    },
    {
      name: "Michael Brown",
      review: "Affordable prices and excellent customer service.",
    },
  ];

  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl text-white font-bold text-center mb-12">

          What Our Customers Say

        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {users.map((user, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition"
            >

              <div className="flex text-yellow-400 gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400"
                    size={18}
                  />
                ))}

              </div>

              <p className="text-gray-300 mt-5">
                "{user.review}"
              </p>

              <h2 className="text-lime-400 mt-8 font-semibold">
                {user.name}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;