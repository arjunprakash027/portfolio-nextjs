import Layout from '/components/layout';
import React from 'react';

const experiences = [
    {
        from: 'Sep 2022',
        to: 'Feb 2023',
        company: 'Imaginorlabs',
        link: 'https://imaginorlabs.com/',
        designation: 'Python Developer Intern'
    },
    {
        from: 'Jan 2024',
        to: 'May 2024',
        company: 'Jman Group',
        link: 'https://jmangroup.com/',
        designation: 'Software Intern'
    },
    {
        from: 'Jun 2024',
        to: 'Present',
        company: 'Jman Group',
        link: 'https://jmangroup.com/',
        designation: 'Software Engineer'
    },
];

const Career = () => {
    return (
        <Layout>
            <div className="min-h-screen p-8">
                <h2 className="text-3xl md:text-5xl text-gray-800 mb-8 text-center">My Career Progression</h2>
                <div className="relative">
                    <div className="border-l-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex items-center w-full">
                                <div className="w-1/2 text-right pr-8">
                                    <p className="text-gray-500">{exp.from} - {exp.to}</p>
                                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                                    <p className="text-lg">{exp.designation}</p>
                                    <a href={exp.link} className="text-blue-600 hover:underline">Company Link</a>
                                </div>
                                <div className="w-10 flex justify-center">
                                    <div className="bg-blue-500 w-5 h-5 rounded-full border-4 border-white shadow"></div>
                                </div>
                                <div className="w-1/2 pl-8">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Career;