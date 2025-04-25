import { CheckCircle2 } from "lucide-react";
import React from "react";

export const Pricing = () => {
  return (
    <section className="bg-[#004851] text-white py-16 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Tailored Plans for Your
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Manufacturing Scale
          </h2>
          <p className="text-sm opacity-80 font-inter">
            Flexible options for any business size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#003840] p-8 rounded-lg">
            <h3 className="font-bold mb-1">Starter</h3>
            <p className="text-sm opacity-80 mb-4">
              Core package offers the basics features you need to get started.
            </p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold font-inter">$39</span>
              <span className="text-sm opacity-80">/month</span>
            </div>
            <button
              variant="outline"
              className="w-full mb-6 border-white text-white hover:bg-white hover:text-[#003840] border rounded-md py-2"
            >
              Get Started
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Customized up to 10,000 units per month
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">24/7 Technical support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">Quality control system</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">Initial setup guide</span>
              </div>
            </div>
          </div>

          <div className="bg-[#003840] p-8 rounded-lg">
            <h3 className="font-bold mb-1">Enterprise</h3>
            <p className="text-sm opacity-80 mb-4">
              The perfect solution for businesses that want to grow.
            </p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold font-inter">$99</span>
              <span className="text-sm opacity-80">/month</span>
            </div>
            <button
              variant="outline"
              className="w-full mb-6 border-white text-white hover:bg-white hover:text-[#003840] border rounded-md py-2"
            >
              Get Started
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">Unlimited production units</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">Dedicated account manager</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">Advanced analytics dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Predictive production optimization
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-[#005c66] p-8 rounded-lg text-center">
            <h3 className="font-bold mb-2">Professional</h3>
            <p className="text-sm opacity-80 mb-6">
              Designed for growing factories that require more features and
              capacity to scale their operations.
            </p>
            <button className="bg-white text-[#004851] hover:bg-gray-100 rounded-md px-4 py-2">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
