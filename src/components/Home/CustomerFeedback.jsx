import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const feedbacks = [
    {
        id: 1,
        name: "James Anderson",
        role: "Business Owner",
        comment: "LoanLink simplified our entire loan application process. The speed is unmatched!",
        img: "https://i.pravatar.cc/150?u=10",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "NGO Manager",
        comment: "Managing EMI schedules has never been this organized. A total game changer!",
        img: "https://i.pravatar.cc/150?u=20",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Entrepreneur",
        comment: "I received my microloan approval within 24 hours. Very transparent system.",
        img: "https://i.pravatar.cc/150?u=30",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Field Officer",
        comment: "The dashboard is intuitive and helps me verify documents without paperwork.",
        img: "https://i.pravatar.cc/150?u=40",
    },
    {
        id: 5,
        name: "Robert Wilson",
        role: "Retailer",
        comment: "Reliable and secure platform. The reminders help me pay on time.",
        img: "https://i.pravatar.cc/150?u=50",
    },
    {
        id: 6,
        name: "Linda Thompson",
        role: "Operations Head",
        comment: "Automated system reduced our manual workload by 70%. Highly recommended.",
        img: "https://i.pravatar.cc/150?u=60",
    },
    {
        id: 7,
        name: "David Miller",
        role: "Agri-Expert",
        comment: "Fastest way to get a loan for my farm. Very straightforward process.",
        img: "https://i.pravatar.cc/150?u=70",
    }
];

const CustomerFeedback = () => {
    return (
        <section className="pt-10 pb-3 bg-base-300">
            <div className="">
                <div className="text-center mb-2.5">
                    <h2 className="text-3xl font-bold  mb-2">User <span className='text-primary'>Testimonials</span></h2>
                    <p className=" italic font-medium text-accent">Trusted by thousands of borrowers and lenders</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        
                        
                        768: { slidesPerView: 2},
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 5 }, 
                    }}
                    modules={[Autoplay, Pagination]}
                    className="pb-12"
                >
                    {feedbacks.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="card bg-base-100 shadow-md border border-base-300 hover:border-primary transition-all duration-300 min-h-[220px] h-full flex flex-col">
                                <div className="card-body p-5 flex flex-col justify-between">
                                    <p className="text-sm text-accent italic leading-snug mb-4 text-center">
                                        "{item.comment}"
                                    </p>
                                    <div className="flex flex-col items-center gap-2 mt-auto">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-xs uppercase">{item.name}</h3>
                                            <p className="text-[10px] text-primary font-semibold">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CustomerFeedback;