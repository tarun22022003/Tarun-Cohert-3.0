import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Github,
// } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h1 className="text-3xl font-bold text-lime-400">

              SuperMart

            </h1>

            <p className="text-gray-400 mt-5">

              Your trusted shopping destination.

            </p>

          </div>

          <div>

            <h2 className="text-white font-semibold mb-5">

              Company

            </h2>

            <ul className="space-y-3 text-gray-400">

              <li>About</li>

              <li>Careers</li>

              <li>Blog</li>

            </ul>

          </div>

          <div>

            <h2 className="text-white font-semibold mb-5">

              Support

            </h2>

            <ul className="space-y-3 text-gray-400">

              <li>Help Center</li>

              <li>Privacy</li>

              <li>Terms</li>

            </ul>

          </div>

          {/* <div>

            <h2 className="text-white font-semibold mb-5">

              Follow Us

            </h2>

            <div className="flex gap-4">

              <Facebook className="text-lime-400 cursor-pointer" />

              <Instagram className="text-lime-400 cursor-pointer" />

              <Twitter className="text-lime-400 cursor-pointer" />

              <Github className="text-lime-400 cursor-pointer" />

            </div>

          </div> */}

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">

          © 2026 SuperMart. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;