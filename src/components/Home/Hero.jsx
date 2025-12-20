import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
    const navigate = useNavigate();

    const slides = [
        {

            title: "Smart & Secure Loan Solutions",
            desc: "Get easy access to micro loans with transparent policies and fast approval.",
            img: "https://i.ibb.co/2zBMP8t/Tiny-people-depositing-or-taking-money-from-government-bank-removebg-preview.png",
        },
        {

            title: "Support Your Business Expansion",
            desc: "Flexible EMI plans designed for small businesses and individuals.",
            img: "https://i.ibb.co/5WfhVKqt/5349-removebg-preview.png",
        },
        {

            title: "Apply Online Without Hassle",
            desc: "Track your loan status and manage everything digitally.",
            img: "https://i.ibb.co.com/tTcRwgdp/Gemini-Generated-Image-jbqhjvjbqhjvjbqh-removebg-preview.png",
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden">


            <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-green-200 rounded-full"></div>
            <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-green-200 rounded-full"></div>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="min-h-[85vh]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="container mx-auto px-6 min-h-[85vh] grid md:grid-cols-2 gap-16 items-center">

                            {/* IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9 }}
                                className="flex justify-center"
                            >
                                <img
                                    src={slide.img}
                                    alt="Loan illustration"
                                    className="max-w-lg w-full"
                                />
                            </motion.div>

                            {/* CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9 }}
                            >


                                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-green-800 leading-tight">
                                    {slide.title}
                                </h1>

                                <p className="mt-5 text-gray-600 max-w-md">
                                    {slide.desc}
                                </p>

                                <button
                                    onClick={() => navigate("/apply-loan")}
                                    className="mt-8 px-7 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition"
                                >
                                    Apply for Loan
                                </button>
                                <button onClick={() => navigate("/apply-loan")} className="mt-8 px-7 py-3 bg-secondary text-white font-semibold rounded-md shadow hover:bg-green-700 transition ml-1" > Explore Loans </button>
                            </motion.div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
