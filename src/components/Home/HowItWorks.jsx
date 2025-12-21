import { motion } from "framer-motion";
import {
    UserPlus,
    FileText,
    ShieldCheck,
    Banknote,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Register / Login",
        desc: "Create an account or log in securely to get started.",
        icon: UserPlus,
    },
    {
        id: 2,
        title: "Apply for Loan",
        desc: "Submit your loan request with necessary details.",
        icon: FileText,
    },
    {
        id: 3,
        title: "Admin Review",
        desc: "Admin carefully reviews and verifies your application.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Approval & Disbursement",
        desc: "Once approved, funds are disbursed to your account.",
        icon: Banknote,
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

const HowItWorks = () => {
    return (
        <section className="p-5 bg-base-300">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
                    How It Works
                </h2>
                <p className="text-center text-sm text-accent italic mb-5">
                    A quick overview of the simple borrowing and lending process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full flex items-center"
                    >
                        <img
                            src="https://i.ibb.co.com/Swy456Zx/istockphoto-1068618692-612x612.jpg"
                            alt="How it works"
                            className="rounded-2xl w-full max-h-[420px] object-cover"
                        />
                    </motion.div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-5"
                    >
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    variants={item}
                                    className="flex gap-4 p-2.5 rounded-xl bg-base-100 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex">
                                        <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center">
                                            <Icon size={22} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {step.id}. {step.title}
                                        </h3>
                                        <p className="text-sm text-base-300-600 mt-1">
                                            {step.desc}
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

export default HowItWorks;
