import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Edit, Link, CheckCircle, ArrowRight } from 'lucide-react';

interface Step {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const HowPlatformWorks: React.FC = () => {
    const steps: Step[] = [
        {
            title: 'Sign Up And List Your Website',
            description: 'Click the Sign Up button and enter the details. List your websites.',
            icon: <Hand className="w-12 h-12 text-blue-500 mb-4" />,
        },
        {
            title: 'Receive Order Details & Publish',
            description: 'Receive notifications when an advertiser chooses your website. Publish content with anchor text and link ASAP.',
            icon: <Edit className="w-12 h-12 text-blue-500 mb-4" />,
        },
        {
            title: 'Share the Live URL',
            description: 'Submit the published URL. Our team will review the anchor text and link.',
            icon: <Link className="w-12 h-12 text-blue-500 mb-4" />,
        },
        {
            title: 'Request Payment & Get Paid',
            description: 'Order amount reflects in your Wallet. Request payment, processed within 24 hours.',
            icon: <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />,
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Increased stagger for a slower, more pronounced effect
                delayChildren: 0.2,     // Added delay to the start of the animation
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 }, // Added scale for a more dynamic entrance
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',       // Switched to spring for a smoother animation
                stiffness: 120,      // Increased stiffness for a snappier feel
                damping: 20,         // Added damping to control the oscillation
                duration: 0.5,
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: '#3b82f6', // Tailwind's blue-600
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow on hover
        },
        tap: {
            scale: 0.95,
            backgroundColor: '#2563eb', // Tailwind's blue-700
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Reduce shadow on tap
        },
    };

    return (
        <div className=" py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             
                     <h2 className="text-2xl md:text-3xl font-semibold text-center">
          <span className="text-blue-600 font-bold"> How the Platform</span>{" "}
        Works
          <span className="text-blue-600 font-bold"> for Publishers</span>
        </h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }} // Subtle hover scale
                            transition={{ type: 'tween' }}
                            className="bg-white rounded-xl shadow-lg mt-6  p-6 flex flex-col items-center text-center transition-all duration-300" // Added transition-all
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
              
            </div>
        </div>
    );
};

export default HowPlatformWorks;
