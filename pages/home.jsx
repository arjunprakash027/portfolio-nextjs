const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-5 md:justify-between">
      
      <div className="text-center md:text-left md:mr-auto w-full md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
        <h2 className="text-gray-600 italic text-2xl mb-2 px-0 py-12">Elysian Voyager / Developer</h2>
        <p className="text-black-500 text-2xl">
  Hey there, I'm Arjun – an artist with a canvas full of 0's and 1's! Imagine coding as my playground, where I build digital wonders for fun. <br /><br />
  
  My journey began with a hot wheels race track gift, sparking my passion for creating. From toy cars to programming languages, I've upgraded my race tracks! <br /><br />
  
  Coding, for me, is more than just syntax; it's a tool to craft products people love, services people need, and solutions for every challenge. <br /><br />
  
  I hold a degree in Artificial Intelligence and Data Science from SRM Easwari Engineering College<br /><br />
  
  You'll find my coding adventures on <a className="text-red-500" href="https://github.com/arjunprakash027">GitHub</a>. View my professional career <a className="text-blue-500" href="/career">here</a><br /><br />
  
  Devouring books on philosophy and life shapes my worldview. Remember, what we think, we become! Change your perspective, and the world transforms. <br /><br />
  
  I'm a loud cheerleader for open source – contributing, reading codebases, and deciphering the magic.<br /><br />
  
  Grateful for the daily opportunity to do what I love. Wanna chat? Drop a line in my inbox at <a href="mailto:arjunprakash027@gmail.com" className="text-red-500">arjunprakash027@gmail.com</a>.<br /><br />
</p>

        <p className="text-gray-400 text-xl font-style: italic">I took a huge inspiration for this website from <a href="https://nadh.in/">Kailash's Website</a>, but i built it from scratch using nextjs and tailwind</p>
      </div>
      <div className="text-center md:text-right md:flex md:justify-end w-full md:w-2/6 self-start order-1 md:order-2">
        <img
          src="/profile.jpg"
          alt="Your Alt Text"
          className="h-30 w-30 md:h-auto md:w-auto min-w-[100px] transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 max-w-[100px] md:max-w-[100px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
