import Layout from '/components/layout';
import React from 'react';

const projectData = [
  {
    date: 'Sep 2023',
    name: 'csv2notion-neo',
    link: 'https://github.com/TheAcharya/csv2notion-neo',
    description: 'csv2notion-neo is my freelance and open-source project that enables local csv/json files to be uploaded to notion using a CLI tool. Built using python,this tool has ability to also upload images to notion.'
  },
  {
    date: 'Oct 2023',
    name: 'Airlift',
    link: 'https://github.com/TheAcharya/Airlift',
    description: 'Airlift is also my freelance and open-source project that enables local csv/json data to be uploaded to Airtable. Official airtable client has some limitations like no feature to upload images to airtable, airlift aims to solve those limitations'
  },
  {
    date:'Feb 2024',
    name:'POAKMM',
    link:'https://github.com/orgs/mini-project-jman/repositories',
    description:'POAKMM is an sports seat booking website (mockup) that is built using express and react.'
  },
  {
    date:'Apr 2024',
    name:"Timely",
    link:"https://github.com/major-Proj",
    description:"Timely is an timesheet where employees can fill their work hours based on their projects and provide feedbacks. It also includes data pipeline that connects to snowflake as warehouse and DBT as ELT tool to gain analysis"
  },
  {
    date: 'Aug 2023',
    name: 'SkillPulse',
    link: 'https://github.com/arjunprakash027/SkillPulse-Backend',
    description: 'SkillPulse is an AI enabled web application that helps students to understand their knowledge on subjects such as OS, DBMS and CN. Built using python (django) for backend and React for frontend'
  },
  {
    date: 'Dec 2021',
    name: "Shakes AI",
    link: "https://github.com/arjunprakash027/shakes_ai",
    description: "Shakes AI is a small language model developed by me, trained on around 1 million lines of text data containing Shakespearean literature. This model has the capability to generate Shakespearean sonnets, that match the rhyme and meter patterns of the original works, while also providing a unique and creative touch to the generated poems",
  },
  {
    date:'Feb 2024',
    name:"online shopping DBT",
    link:"https://github.com/JMAN-CODES/onlineShopping-dbt",
    description:"It is an data engineering project that uses DBT to extract, load and transform the data using SSMS as database"
  },
  {
    date: 'Nov 2023',
    name: 'CricketSemantics',
    link: 'https://github.com/arjunprakash027?tab=repositories',
    description: 'CricketSemantics is a project that has 3 mini projects inside it. A web scrapping spider to scrap world-cup 2023 commentary data. A Doc2Vec document embedding and semantic search engine based on it. A KMeans cluster to visualize similar meaning commentary using doc2vec embedding'
  },
  {
    date: 'Sep 2023',
    name: 'Notion db integration',
    link: 'https://github.com/arjunprakash027/notion_db_integration',
    description: 'notion_db_integration is a pypi package that helps the user to use notion database to store, retreive, update and delete data like a normal database. It basically turns your notion_db into a db that is hosted on cloud and used for storage purposes'
  },
  {
    date: 'Sep 2023',
    name: 'P2P Python Flask Chatapp',
    link: 'https://github.com/arjunprakash027/P2P-Python-Flask',
    description: 'This Peer-to-Peer (P2P) Chat Application allows users to connect with peers and engage in real-time text-based conversations. It provides a user-friendly interface for chatting.'
  },
  {
    date: 'Aug 2023',
    name: 'Poem Classification NLP',
    link: 'https://github.com/arjunprakash027/poem-classification-nlp',
    description: 'In this project, I used the K-means algorithm to cluster poems based on their TF-IDF representations. It can diffrentiate poems based on its larger theme such as love, death, nature and so on.'
  },
  {
    date: 'Jul 2023',
    name: 'StoryTeller',
    link: 'https://github.com/arjunprakash027/Story_Teller',
    description: 'Story Teller is a Streamlit application that generates a story based on an input image. It utilizes the Hugging Face Transformers library and the Salesforce BLIP Image Captioning model.'
  },
  {
    date: 'Jun 2023',
    name: "Deep Learning With Tensorflow",
    link: "https://github.com/arjunprakash027/Deep-Learning-With-Tensorflow",
    description: "This file contains code for performing deep learning tasks using TensorFlow neural networks. It provides a comprehensive guide to data augmentation, perceptrons, classification using neural networks, and the MNIST handwriting classification task",
  },
  {
    date: 'Jun 2023',
    name: "React Django Chatapp",
    link: "https://github.com/arjunprakash027/React-Django-chatapp",
    description: "React Django Chatapp is an simple chatapp built using react and django. Uses google SSO for authentication with token based auth and web sockets for communication",
  },
  {
    date: 'Jun 2021',
    name: "Voicy",
    link: "https://github.com/arjunprakash027/voicy_website",
    description: "VOICY is an web app that can convert .txt files into nearly human like voice and provide the .mp3 file generated(that has the dictated version of text file) to user as an downloadable file. This can be used to convert text files that has lecture notes into voiceover, for easy understanding and to gain attention of students",
  },
  {
    date: 'Aug 2021',
    name: "Stock Analysis Pypi",
    link: "https://github.com/arjunprakash027/stock-analysis",
    description: "A simple python PYPI package to perform basic technical analysis on stocks",
  },
  {
    date: 'Sep 2021',
    name: "Quotez",
    link: "https://github.com/arjunprakash027/quotez",
    description: "Quotez is a small website that shows the quotes from the books I read recently. Built using flask",
  },
  {
    date: 'Nov 2022',
    name: "Fastapi graphql",
    link: "https://gitlab.com/arjunprakash027/fast-api-graphql",
    description: "A small project that connects database using fastapi basckend and serves frontend requests using graphql api. A toy project to learn fastapi and graphql",
  },
  {
    date: 'Dec 2022',
    name: "Face Recognition using SVM",
    link: "https://github.com/arjunprakash027/custom_face_recognition",
    description: "Face Recognition using SVM and RF is a simple image classification model for celebrity images. The model has been trained on 3 celebrities with 100 images each, achieving 71% accuracy with SVM and 68% accuracy with RandomForest algorithms",
  },
  {
    date: 'Jul 2022',
    name: "Stock Price Automation",
    link: "https://github.com/arjunprakash027/automation",
    description: "A small project to send me daily emails about stock price movements using python and github actions",
  },
  {
    date: 'Mar 2022',
    name: "startup profit prediction",
    link: "https://github.com/arjunprakash027/startup_profit_prediction",
    description: "Predict profit of your startup based on your spendings. Uses a regression model to map spending to profit.",
  },
  {
    date: 'Apr 2022',
    name: "Steam game rating",
    link: "https://github.com/arjunprakash027/steam_game_rating_prediction_tensorflow",
    description: "Performed EDA on the steam game dataset using Knime and created a regression and classification model using TensorFlow Predicted the rating( overwhelmingly negative to overwhelmingly positive [1 - 9] ) given by users to the game based on features such as cross compatibility of game with multiple OS, release date and so on",
  },
  {
    date: 'Jun 2023',
    name: "Interactive Data Visualization application",
    link: "https://github.com/arjunprakash027/interactive-data-visualization-application",
    description: "The Interactive Data Visualization Application is a web-based tool developed to facilitate the exploration and analysis of a dataset through interactive charts and visualizations. The application is built using React for the frontend, Flask for the backend API, and D3.js for rendering the visualizations.",
  },
  {
    date: 'Jan 2022',
    name: "Finance With Arjun",
    link: "https://github.com/arjunprakash027/finance_with_arjun",
    description: "This Streamlit project is designed to provide users with financial information and stock market news for Indian companies. It consists of three main components: a dashboard for exploring stock prices and historical trends and a section for displaying top stock headlines",
  },
  {
    date: 'Jan 2023',
    name: "Startup Profit Prediction",
    link: "https://github.com/arjunprakash027/startup_profit_prediction",
    description: "Predict profit of your startup based on your spendings. Uses a regression model to map spending to profit.",
  },

];

const Projects = () => {
  return (
    <Layout>
      <div className="p-5">
        <h2 className="text-3xl md:text-5xl text-blue-100 mb-8">Projects on <a className="text-red-500" href='https://github.com/arjunprakash027'>Github</a></h2>
        <ul className="grid grid-cols-1 gap-6">
          {projectData.map((project, index) => (
            <li key={index} className="mb-6 md:mb-8 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="p-4">
                <div className="text-blue-100 text-sm mb-2">
                  {project.date}
                </div>
                <div>
                  <a href={project.link} className="text-blue-500 hover:underline text-3xl font-bold">
                    {project.name}
                  </a>
                </div>
                <div className="text-blue-100 mt-2 text-xl">
                  {project.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};


  
export default Projects;
