import { motion } from "framer-motion";
import { TrendingUp, Users, Landmark, Percent } from "lucide-react";
import CountUp from "react-countup";

const stats = [
    {
        id: 1,
        title: "Total Loans Disbursed",
        value: 125000,
        suffix: "+",
        icon: <TrendingUp className="w-10 h-10 text-base-100 drop-shadow-md transition-transform duration-300" />,
    },
    {
        id: 2,
        title: "Active Borrowers",
        value: 3500,
        suffix: "+",
        icon: <Users className="w-10 h-10 text-base-100 drop-shadow-md transition-transform duration-300" />,
    },
    {
        id: 3,
        title: "Partner Organizations",
        value: 25,
        suffix: "+",
        icon: <Landmark className="w-10 h-10 text-base-100 drop-shadow-md transition-transform duration-300" />,
    },
    {
        id: 4,
        title: "Approval Rate",
        value: 92,
        suffix: "%",
        icon: <Percent className="w-10 h-10 text-base-100 drop-shadow-md transition-transform duration-300" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const LoanStatistics = () => {
    return (
        <section className="relative py-5 bg-gradient-to-r from-[#2BA6B1] to-[#2F6FA3] text-base-100">
            {/* Overlay to soften gradient */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>

            <div className="relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        LoanLink in Numbers
                    </h2>
                    <p className="mt-2 mb-5 text-base-100 italic">
                        Our growing impact across borrowers and microfinance organizations.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center border-l border-white/20 first:border-l-0 px-4"
                        >
                            <div className="mb-4 ">{stat.icon}</div>

                            <h3 className="text-4xl font-extrabold tracking-tight drop-shadow-sm">
                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {stat.suffix}
                            </h3>
                            <p className="mt-2 text-white/80 text-sm tracking-wide">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LoanStatistics;
