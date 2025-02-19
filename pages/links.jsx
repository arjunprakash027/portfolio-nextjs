// pages/social.js
import Layout from '../components/layout';

const Social = () => {
  return (
    <Layout>
      <div className="p-5">
        <div className="flex flex-col md:flex-col items-center justify-center">
          {/* Social Media Links */}
          <SocialLink name="GitHub" url="https://github.com/arjunprakash027" icon="/github.svg" />
          <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/arjunprakash027/" icon="/linkedin.svg" />
          <SocialLink name="X" url="https://twitter.com/ArjunPrakash12" icon="/x.svg"/>
          <SocialLink name="Gmail" url="mailto:arjunprakash027@gmail.com" icon="/gmail.svg"/>
        </div>
      </div>
    </Layout>
  );
};

// SocialLink component to represent each social media link
const SocialLink = ({ name, url, icon }) => {
  return (
    <div className="w-full p-5 mx-auto mb-8 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div className="p-4">
        <div className="text-center">
          <img src={icon} alt={`${name} Icon`} className="w-16 h-16 mb-4 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 text-center mb-4">{url}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block text-center">
          Visit {name}
        </a>
      </div>
    </div>
  );
};

export default Social;
