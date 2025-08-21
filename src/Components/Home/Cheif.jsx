

const chiefs = [
    {
        name: "Chef Ali Hasn",
        image: "https://i.ibb.co/KBBY00q/pexels-cottonbro-4252136.jpg",
        specialty: "Indian Cuisine"
    },
    {
        name: "Chef Maria Akter",
        image: "https://i.ibb.co/7sBmQxS/pexels-cottonbro-4686829.jpg",
        specialty: "Continental Dishes"
    },
    {
        name: "Chef Jabbar Ahmed",
        image: "https://i.ibb.co/21zHyPk3/pexels-sidesimagery-3351927.jpg",
        specialty: "Asian Fusion"
    }
];

const Cheif = () => {
    return (
        <section className="w-full py-12 px-4 md:px-0 bg-white">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center tracking-tight">
                Meet Our Best Chefs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {chiefs.map((chief, idx) => (
                    <div
                        key={idx}
                        className="bg-primary/5 rounded-2xl shadow-lg flex flex-col items-center p-6"
                    >
                        <img
                            src={chief.image}
                            alt={chief.name}
                            className="w-56 h-72 object-cover rounded-xl mb-4 border-4 border-primary/20 bg-white"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{chief.name}</h3>
                        <p className="text-primary font-medium">{chief.specialty}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cheif;