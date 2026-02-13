import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-16 text-white font-['Roboto']">
      {/* Container */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-black text-[#304ffe] mb-4">
              TicketBook
            </h2>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Book movie, bus, train, and event tickets instantly. 
              Fast, secure, and reliable ticket booking platform 
              for your everyday travel and entertainment needs.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#304ffe] transition flex items-center justify-center cursor-pointer font-medium">
                f
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#304ffe] transition flex items-center justify-center cursor-pointer font-medium">
                t
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#304ffe] transition flex items-center justify-center cursor-pointer font-medium">
                in
              </div>
            </div>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-light text-gray-300">
              <li className="hover:text-[#304ffe] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#304ffe] cursor-pointer transition">
                Browse Events
              </li>
              <li className="hover:text-[#304ffe] cursor-pointer transition">
                My Bookings
              </li>
              <li className="hover:text-[#304ffe] cursor-pointer transition">
                Offers & Deals
              </li>
              <li className="hover:text-[#304ffe] cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm font-light text-gray-300">
              <li>📞 +91 98XXXXXX21</li>
              <li>✉️ support@ticketbook.com</li>
              <li> Available 24/7 for booking support </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md outline-none focus:border-[#304ffe] font-light"
              />
              <button className="px-4 py-2 bg-[#304ffe] hover:bg-[#1e3aff] text-white text-sm font-medium rounded-r-md transition cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 text-center py-5 text-sm text-gray-400 font-light">
          © 2026 TicketBook — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
