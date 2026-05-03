import { Search, CalendarCheck, Smile } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search",
    description:
      "Explore verified professionals near you based on ratings, skills, and availability.",
    icon: Search,
    color: "blue",
  },
  {
    id: 2,
    title: "Book",
    description:
      "Choose a convenient time and confirm your booking in just a few clicks.",
    icon: CalendarCheck,
    color: "green",
  },
  {
    id: 3,
    title: "Relax",
    description:
      "Sit back while experienced professionals complete your task hassle-free.",
    icon: Smile,
    color: "yellow",
  },
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Getting help is simple, fast, and reliable. Just follow these easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative z-10 group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 text-center"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full ${colorClasses[step.color]} group-hover:scale-110 transition`}
                >
                  <Icon size={28} />
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full shadow">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;