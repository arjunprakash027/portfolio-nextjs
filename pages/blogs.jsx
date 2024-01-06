import Layout from '/components/layout';
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
  {
    date: 'Sep 2023',
    name: 'Decomposing time series',
    link: 'https://medium.com/@arjunprakash027/decomposing-a-time-series-why-and-how-53e1e9fe5161?source=user_profile---------5----------------------------',
    description: 'A note on how to decompose time series to gain deeper knowledge on time bound data like stock market movement'
  },
  {
    date: 'Sep 2023',
    name: 'Cosine similarity in python',
    link: 'https://medium.com/@arjunprakash027/understanding-cosine-similarity-a-key-concept-in-data-science-72a0fcc57599?source=user_profile---------6----------------------------',
    description: 'A short note on cosine similarity and how to perform it in python'
  },
  {
    date: 'Aug 2023',
    name: 'Kmeans clustering on poem dataset',
    link: 'https://medium.com/@arjunprakash027/unveiling-the-poetic-patterns-journey-into-poem-classification-using-k-means-clustering-ec296984f071?source=user_profile---------7----------------------------',
    description: 'Understanding KMeans and TFIDF'
  },
  {
    date: 'Jul 2023',
    name: 'Yield method in python',
    link: 'https://medium.com/@arjunprakash027/pythons-yield-method-your-guide-to-supercharged-loops-743ad6bfe447?source=user_profile---------8----------------------------',
    description: 'What is yield in python and how to use it'
  },
  {
    date: 'Jun 2023',
    name: 'Threading vs multiprocessing in python',
    link: 'https://medium.com/@arjunprakash027/threading-vs-multiprocessing-in-python-a-comprehensive-guide-cae3ce0ca6c1?source=user_profile---------9----------------------------',
    description: 'A note on difference between threading and multiprocessing in python'
  },
  // Add more projects as needed
];

const Blogs = () => {
  return (
    <Layout>
      <div className="p-5">
        <h2 className="text-3xl md:text-5xl text-black-500 mb-8">I write blogs on <a href='https://medium.com/@arjunprakash027' className='text-red-500'>Medium</a></h2>
        <ul className="list-disc space-y-4 leading-5 text-base">
          {blogdata.map((blog, index) => (
            <li key={index} className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-300">
              <div className="text-gray-500 text-sm md:text-2xl mb-2">
                {blog.date}
              </div>
              <div>
                <a href={blog.link} className="text-red-500 hover:underline text-lg md:text-2xl font-bold">
                  {blog.name}
                </a>
              </div>
              <div className="text-gray-700 mt-2 md:text-2xl">
                {blog.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

  
export default Blogs;
