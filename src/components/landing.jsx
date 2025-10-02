import React, { useState, useEffect } from "react";
const LandingPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check login state on mount
        const token = localStorage.getItem("accessToken");
        setIsLoggedIn(!!token);

        // Sync login/logout across tabs or components
        const handleStorageChange = () => {
            const token = localStorage.getItem("accessToken");
            setIsLoggedIn(!!token);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">


            {/* Hero Section */}
            <header className="flex flex-col items-center text-center py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    We Supply & Manages workers for Construction and Manufacturing companies, From hiring to payment.
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mb-6">
                    Deploy and manage high-volume construction labor seamlessly with our tech-enabled platform.
                    From hiring to compliance, we handle it all so you can focus on building.
                </p>
                <div className="flex space-x-4">
                     
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScRo_wD0uc4Eqg_qZfNK1JdTiXPEs9uEtEf02f04zsnYBwhTA/viewform"
                            className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
                        >
                            Place Order
                        </a>
                    
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSd1Q1JsrsnH536GRLRWSbhaEIMSHeoaugy_rTtphUBBJdDb6g/viewform?usp=preview' className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                        Request a Demo
                    </a>
                </div>
            </header>



            {/* Features Section */}
            <section id="features" className="max-w-5xl mx-auto px-6 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose BlueZone?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-900">Instant Deployment</h3>
                        <p className="text-gray-600 mt-2">
                            Get the exact number of workers you need, when you need them, with just one click.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-900">Complete Management</h3>
                        <p className="text-gray-600 mt-2">
                            We handle onboarding, attendance, compliance, and payments—all in one platform.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg text-gray-900">Reliable Workforce</h3>
                        <p className="text-gray-600 mt-2">
                            Trained and verified labor force to ensure smooth operations at your construction sites.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-100 py-6 text-center text-gray-600">
                © {new Date().getFullYear()} BlueZone. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
