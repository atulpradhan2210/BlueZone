import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          About BlueZone
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          BlueZone is a tech-enabled worker supply and management platform designed 
          for construction firms dealing with high-volume worker needs. Our platform 
          helps streamline the process of sourcing, scheduling, and managing workers, 
          ensuring that construction projects stay on track with the right workforce.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-3xl">⚡</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Efficient Worker Management</h3>
              <p className="text-gray-600 text-sm">
                Schedule, track, and manage workers seamlessly to reduce downtime and increase productivity.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-3xl">💼</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">High-Volume Worker Supply</h3>
              <p className="text-gray-600 text-sm">
                Quickly source skilled workers in large numbers to meet the demands of your construction projects.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-3xl">📊</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Data-Driven Insights</h3>
              <p className="text-gray-600 text-sm">
                Access analytics and reporting to make informed decisions about workforce allocation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-blue-600 text-3xl">🔒</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure and Reliable</h3>
              <p className="text-gray-600 text-sm">
                Ensure compliance and safety with secure worker data management.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Ready to simplify worker management for your construction projects?
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
