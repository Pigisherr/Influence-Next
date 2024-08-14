"use client";

import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="font-bold">
                © 2024 Brand. All rights reserved.
              </span>
            </div>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-4 text-sm text-center sm:mt-0">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
