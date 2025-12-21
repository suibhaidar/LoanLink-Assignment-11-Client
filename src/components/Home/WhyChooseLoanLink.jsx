import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BarChart3,
  CheckCircle,
  Users,
  FileCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Fast Approval Process",
    desc: "Quick loan verification and approval with minimal paperwork.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Secure & Verified System",
    desc: "Your data is protected with advanced security and verification.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Easy EMI Tracking",
    desc: "Track EMI schedules, payment history, and due dates easily.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Transparent Loan Status",
    desc: "Real-time updates on loan request, approval, and repayment.",
    icon: CheckCircle,
  },
  {
    id: 5,
    title: "Trusted by NGOs & MFIs",
    desc: "Used and trusted by NGOs and microfinance organizations.",
    icon: Users,
  },
  {
    id: 6,
    title: "Minimal Documentation",
    desc: "Simple document requirements for faster loan processing.",
    icon: FileCheck,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhyChooseLoanLink = () => {
  return (
    <section className="py-10 mt-4 bg-base-300">
      <div className="">

        {/* Title & Description (OUTSIDE background image) */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Choose <span className="text-primary">LoanLink?</span>
          </h2>
          <p className="italic font-medium mb-5 text-accent">
            A trusted and transparent microloan management platform designed
            for speed, security, and simplicity.
          </p>
        </motion.div>

        {/* Cards Section with Background Image */}
        <div
          className="relative rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:p-12"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/yczCgjJh/vecteezy-real-estate-broker-agent-presenting-and-consult-to-customer-10648411.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

          {/* Feature Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="flex gap-4 p-3 rounded-xl text-base-content shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg text-white font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseLoanLink;
