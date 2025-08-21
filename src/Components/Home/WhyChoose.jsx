
import { FaBowlFood, FaHeadset } from 'react-icons/fa6';
import { MdOutlineVerified } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

// Added a new icon import for the new feature card.

const features = [
    {
        icon: <FaBowlFood className="text-3xl text-primary mb-3 md:text-4xl" />,
        title: "Serve Healthy Food",
        desc: "We serve all healthy food here. You can choose any food you like."
    },
    {
        icon: <MdOutlineVerified className="text-3xl text-primary mb-3 md:text-4xl" />,
        title: "Best Quality",
        desc: "Our food quality is excellent. You will get exactly what you want here."
    },
    {
        icon: <TbTruckDelivery className="text-3xl text-primary mb-3 md:text-4xl" />,
        title: "Fast Delivery",
        desc: "You can rely on the main goal of our delivery team: to deliver orders quickly. You will receive it shortly after ordering."
    },
    // New feature card added here
    {
        icon: <FaHeadset className="text-3xl text-primary mb-3 md:text-4xl" />,
        title: "Customer Support",
        desc: "Our friendly team is always ready to assist you with any questions or concerns you may have."
    }
];

const WhyChoose = () => {
    return (
        <section className="w-full py-12 bg-white relative">

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-primary">WHY CHOOSE US?</h2>
                <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
                    You will choose us because you get the best quality food from us and we deliver fast.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                            {item.icon}
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
