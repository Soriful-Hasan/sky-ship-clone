import { Facebook, PhoneCallIcon } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-600  text-white">
        <div className="container mx-auto flex flex-col items-center py-6 space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://skyshipbd.com/_next/static/media/logo.28c56c27.svg"
              width={200}
              alt=""
            />
          </div>

          <div className="flex space-x-6 text-sm font-semibold">
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Returns & Refund
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-blue-600 transition"
            >
              <i className="fab fa-facebook-f">
                <Facebook />
              </i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-green-600 transition"
            >
              <i className="fab fa-whatsapp">
                <PhoneCallIcon />
              </i>
            </a>
          </div>
        </div>

        <div className="bg-blue-800 text-center py-3 text-sm">
          © 2025 SkyShipBD - All Rights Reserved
        </div>
      </footer>

      <script
        src="https://kit.fontawesome.com/your-kit-code.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
