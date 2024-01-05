const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-5 md:justify-between">
      
      <div className="text-center md:text-left md:mr-auto w-full md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
        <h2 className="text-gray-600 italic text-2xl mb-2 px-0 py-12">Elysian Voyager / Developer</h2>
        <p className="text-black-500 text-2xl">
          Hola! I am Arjun, I would like to call myself an artist who's canvas is 0's and 1's. Building stuff is my hobbie and code is just a means to an end. <br></br>
          My thirst to build started when I first got my first hot wheels race track and cars as a gift. I used to permute and combine various tracks and let my car ride free, that passion of building things continued 
          till this age, where programming language are my race tracks. <br></br>
          As I said coding is just a means to an end, my major interest lies in building products people love, creating services people need and solving every problem I come across.
          <br></br> <br></br>
          I am pursuing degree in Artificial Intelligence and Data Science from SRM Easwari Eng. Collage in Chennai. I love Data and I love math, a combination made in heaven. I love how just playing around with imaginary things called as numbers can help us develop Intelligence similar to us given enough amount of digital representation of real world events (also called data)
          <br></br> <br></br>
          I tinker around and work on lot of stuff, I post most of it on my <a className="text-red-500" href="https://github.com/arjunprakash027">github</a>.
          I interned for a brief period at a company called <a className="text-red-500" href="https://imaginorlabs.com/">Imaginorlabs</a>. It is there I learnt how to put my python skills into real world application.
          Now I freelance and just tinker around with softwares and codes and learn about how tech startups works.
          <br></br> <br></br>
          I read a lot of books about philosophy and life and that drives the views I have on world and future. I belive what we think we become. You will always be an victim if you are victim in your mind, change your view change everything.
          <br></br> <br></br>
          I am a huge open source enthusiast and I love contributing to open source projects. I love to read open source codebases and understand how things work.
          <br></br> <br></br>
          Having said everything, I am greatful for the position I am in, having the oppurtunity to do things I love, everyday.
          <br></br> <br></br>
          Drop into my inbox? <a href="mailto:arjunprakash027@gmail.com" className="text-red-500">arjunprakash027@gmail.com</a>
          <br></br> <br></br>
        </p>
        <p className="text-gray-400 text-xl font-style: italic">I took a huge inspiration for this website from <a href="https://nadh.in/">Kailash's Website</a>, but i built it from scratch using nextjs and tailwind</p>
      </div>
      <div className="text-center md:text-right md:flex md:justify-end w-full md:w-2/5 self-start order-1 md:order-2">
        {/* Your single image goes here */}
        <img
          src="/profile2.png"
          alt="Your Alt Text"
          className="h-30 w-30 md:h-auto md:w-auto min-w-[100px] transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 max-w-[100px] md:max-w-[100px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
