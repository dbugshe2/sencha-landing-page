import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";

/**
 * A simple form component for capturing lead information.
 * @returns The Lead capture form component.
 */
export function CreateLeadForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Started Today
        </h3>
        <p className="text-gray-600">
          Ready to launch your credit-building program? Fill out the form below
          and our team will get back to you within 24 hours.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-blue-500 transition-all px-4"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Company / Institution
            </label>
            <input
              type="text"
              placeholder="First National Bank"
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-blue-500 transition-all px-4"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Work Email
          </label>
          <input
            type="email"
            placeholder="jane@bank.com"
            className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-blue-500 transition-all px-4"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            How can we help?
          </label>
          <textarea
            placeholder="Tell us about your institution's goals..."
            className="w-full min-h-[120px] rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-blue-500 transition-all resize-none px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full h-14 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          Request Demo <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
}
