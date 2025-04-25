import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#004851] text-white pt-12 pb-4 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                className="h-8"
                src="../logo-checkea.png"
                alt="logo-chequea"
              />
              <span className=" font-semibold">CHECKEA</span>
            </div>
            <p className="text-sm opacity-80">
              Our solutions make production faster and smarter. Contact us for
              more information.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Customers</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Precision Manufacturing</Link>
              </li>
              <li>
                <Link href="#">Automotive</Link>
              </li>
              <li>
                <Link href="#">Medical Equipment</Link>
              </li>
              <li>
                <Link href="#">Electronics</Link>
              </li>
              <li>
                <Link href="#">Aerospace</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Manufacturing Production System</Link>
              </li>
              <li>
                <Link href="#">Integrated Material Planning</Link>
              </li>
              <li>
                <Link href="#">Quality Control System</Link>
              </li>
              <li>
                <Link href="#">Inventory Management</Link>
              </li>
              <li>
                <Link href="#">Supply Chain Planning</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#005c66] pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 mb-4 md:mb-0">
            © 2025 Checkea. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
