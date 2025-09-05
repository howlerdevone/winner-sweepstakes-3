import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-yellow-500">WINNER</span>
              <div className="text-sm font-normal text-gray-400 tracking-widest">
                SWEEPSTAKES
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted destination for legitimate sweepstakes and contests.
              Join millions of participants and win amazing prizes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Current Sweepstakes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Past Winners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How to Enter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Prize Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-500" />
                <span className="text-gray-400">
                  info@winnersweepstakes.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-500" />
                <span className="text-gray-400">1-800-WINNERS</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-500" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Winner Sweepstakes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Official Rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
