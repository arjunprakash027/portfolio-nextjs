import Layout from '/components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CareerComponent from '../components/career_component';
import React from 'react';

const blogdata = [
    {
        date: 'Dec 2023',
        name: 'Scrapping Cricket data using scrapy',
        link: 'https://medium.com/@arjunprakash027/scrapping-cricket-data-using-scrapy-9a58d7eeb13b?source=user_profile---------0----------------------------',
        description: 'A short intro into scrapy'
    },
    {
        date: 'Nov 2023',
        name: 'How to represent graphs in python',
        link: 'https://medium.com/@arjunprakash027/how-to-represent-graphs-in-python-e1bfc2fee8cb?source=user_profile---------1----------------------------',
        description: 'A short guide on graph data struct in python'
    },
    {
        date: 'Nov 2023',
        name: 'Binary search tree and its traversal algorithms',
        link: 'https://medium.com/@arjunprakash027/binary-searchtree-and-its-algorithms-in-python-1a116c852c1b?source=user_profile---------2----------------------------',
        description: 'A short intro on BST and traversal algorithms like BFS and DFS'
    },
    {
        date: 'Oct 2023',
        name: 'Markov Chains',
        link: 'https://medium.com/@arjunprakash027/markov-chains-a-powerful-tool-for-modeling-sequential-data-202ee8e00b72?source=user_profile---------3----------------------------',
        description: 'A small guide on markov chains in python'
    },
    {
        date: 'Oct 2023',
        name: 'Using notion to power your database needs',
        link: 'https://medium.com/@arjunprakash027/how-to-use-notion-database-to-power-your-software-and-storage-needs-611aad03e438?source=user_profile---------4----------------------------',
        description: 'Quick glance on how to use notion, a powerful online notebook to act as your free database'
    },
    // Add more projects as needed
];

const ScrollText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newIndex = Math.min(Math.floor(scrollY / window.innerHeight), blogdata.length - 1);
        setCurrentIndex(newIndex);
    };

    const scrollUp = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const scrollDown = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, blogdata.length - 1));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            <div style={{ height: '500vh', position: 'relative' }}>
            <h2 className="text-3xl md:text-5xl text-black-500 mb-8">Watch my career progression here!</h2>

                <AnimatePresence>
                    {blogdata.map((blog, index) =>
                        index === currentIndex && (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, y: -50, scale: 0.8, rotate: -5 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{
                                    position: 'fixed',
                                    top: '30%',
                                }}
                            >
                                <div className='grid grid-cols-4 grid-flow-col gap-4'>
                                    <div className='col-span-3'>
                                        <CareerComponent argument={blog} />
                                    </div>
                                    <div className='grid grid-rows-6 grid-flow-col gap-4'>
                                        <div className='row-start-2 row-span-1'>
                                            {currentIndex > 0 && (
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
                                                    onClick={scrollUp}
                                                >
                                                    ↑
                                                </button>
                                            )}
                                        </div>
                                        <div className='row-start-4 row-span-1'>
                                            {currentIndex < blogdata.length - 1 && (
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
                                                    onClick={scrollDown}
                                                >
                                                    ↓
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                </div>

                            </motion.div>

                        )
                    )}
                </AnimatePresence>



            </div>
        </Layout>
    );
};

export default ScrollText;