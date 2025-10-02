import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        userName: "",
        phoneNumber: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let tempErrors = {};

        if (!formData.userName) tempErrors.userName = "Name is required";
        if (!/^\d{10}$/.test(formData.phoneNumber)) tempErrors.phoneNumber = "Phone must be 10 digits";
        if (!formData.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            console.log("Form submitted:", formData);
            // Call your API or handle registration logic here


            setErrors({});
            setLoading(true);

            try {
                await axios.post(
                    `${import.meta.env.VITE_API_BASE}/users/register`,
                    formData
                );
                setMessage("Registration successful!");
                setTimeout(() => navigate("/"), 1500);
            } catch (error) {
                setMessage(error.response?.data?.message || "Registration failed!");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm">
                        BZ
                    </div>
                </div>

                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Create Account
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Register with your phone number
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="John Doe"
                            value={formData.userName}
                            onChange={handleChange}
                            className={`border rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="1234567890"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`border rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.phone ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className={`border rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    {message && (
                        <div className="mb-4 text-center text-sm text-green-600">{message}</div>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md cursor-pointer hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] "
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
