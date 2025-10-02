import React from "react";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Efficient Worker Management",
      description:
        "Schedule, track, and manage workers seamlessly to reduce downtime and increase productivity.",
    },
    {
      icon: "💼",
      title: "High-Volume Worker Supply",
      description:
        "Quickly source skilled workers in large numbers to meet the demands of your construction projects.",
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description:
        "Access analytics and reporting to make informed decisions about workforce allocation.",
    },
    {
      icon: "🔒",
      title: "Secure and Reliable",
      description:
        "Ensure compliance and safety with secure worker data management.",
    },
    {
      icon: "🤝",
      title: "Seamless Collaboration",
      description:
        "Coordinate between project managers, contractors, and workers efficiently.",
    },
    {
      icon: "⚙️",
      title: "Customizable Workflow",
      description:
        "Tailor the platform to your project needs with flexible scheduling and management tools.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Features</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover what makes BlueZone the best platform for managing construction workers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-blue-600">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
