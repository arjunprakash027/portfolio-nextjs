const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-5 md:justify-between">
      
      <div className="text-center md:text-left md:mr-auto w-full md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
        <h2 className="text-gray-600 italic text-2xl mb-2 px-0 py-12">Seeking Truth</h2>
        <p className="text-black-500 text-2xl">
        I love science and math; to me, they model the truth of the universe. I believe the greatest purpose of a person is to seek that ultimate truth. Not the truth handed down by others, but one discovered through personal exploration. Never follow someone else's path—find your own truth. In this pursuit of the absolute truth in everything, we find joy in the passing of life.<br></br><br></br>

Math has fascinated me from the very beginning of my understanding of the world—how complex relationships can be expressed in formulas, both linear and polynomial. It’s deeply intriguing to me.<br></br><br></br>

Speaking of math, I believe everything stems from it, and its foremost offspring is physics. From physics comes electronics, and from electronics, computers. I love computers and how they function. It's amazing to think that the entirety of known existence—our universe and beyond—can be represented by just 0 and 1. With simple n^2 logic, we’ve achieved so much.<br></br><br></br>

Another field born from math, statistics, is equally important to me. I see statistics as the study of relationships, expressed mathematically. We start from something as simple as the mean of a set of numbers, move to the harmonic mean, variance, and covariance between groups of numbers, then to regression and now to AI chatbots. These marvels, which helped me correct the grammar here, are built on probability and comparisons between data sets.<br></br><br></br>

Every mathematical concept intrigues me. Combined with my pursuit of truth, I find it easy to delve deeply into concepts, to understand relationships—both human and statistical. Applying what I learn to the collective good would, for me, be a fulfilling life.<br></br><br></br>

The concept of freedom is also something I hold very dear—not just physical freedom, though that is important, but freedom <em>from</em> things. Freedom from what others think of you, from desires and urges, from the material things we cling to (like a $100,000 car we can’t discard due to sunk costs). Freedom from negativity. Freedom from everything brings bliss. You can discover your purpose when you are free and not influenced by external circumstances. But this might change—nothing is within our control except how we perceive the world. And I perceive this beautiful world in the same way, regardless of the circumstances. Seeking depth in everything and striving to be a good person to those around me—this, I believe, is a good way to live.<br></br>

  
  Grateful for the daily opportunity to do what I love. Wanna chat? Drop a line in my inbox at <a href="mailto:arjunprakash027@gmail.com" className="text-red-500">arjunprakash027@gmail.com</a>.<br /><br />
</p>

        <p className="text-gray-400 text-xl font-style: italic">I took a huge inspiration for this website from <a href="https://nadh.in/">Kailash's Website</a>, but i built it from scratch using nextjs and tailwind</p>
      </div>
      <div className="text-center md:text-right md:flex md:justify-end w-full md:w-2/6 self-start order-1 md:order-2">
        <img
          src="/profile4.jpg"
          alt="Your Alt Text"
          className="h-30 w-30 md:h-auto md:w-auto min-w-[100px] transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 max-w-[100px] md:max-w-[100px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
