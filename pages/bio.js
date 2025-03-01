export async function getServerSideProps({ res}) {
    
    res.setHeader('Content-Type', 'text/plain');
    res.write((
        "This is Arjun \n I am a software developer who is into math, architecture and computing \n I spend most of my time exploring open-source projects, dissecting their code, and working on side missions (projects) that align with my curiosity at that particular moment \n I currently work at Jman Group as a Software Engineer, where I build data science models and data engineering pipelines, applying full-scale software engineering principles to ensure performance, scalability, and maintainability \n Website: https://arjunrao.space \n Github: https://github.com/arjunprakash027 \n Medium Blogs: https://medium.com/@arjunprakash027 \n Linkedin: https://www.linkedin.com/in/arjunprakash027/ \n Mail: arjunprakash027@gmail.com "
    ));
    res.end();
    return { props: {} };
}

export default function Bio() {
    return null;
}