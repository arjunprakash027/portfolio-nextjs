const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-5 md:justify-between">
      
      <div className="text-center md:text-left md:mr-auto w-full md:w-3/5 mb-4 md:mb-0 order-2 md:order-1">
        <h2 className="text-gray-600 italic text-2xl mb-2 px-0 py-12">Elysian Voyager / Developer</h2>
        <p className="text-black-500 text-2xl">
          Tailwind CSS is a popular utility-first CSS framework that offers a unique approach to building modern and responsive user interfaces.

          Unlike traditional CSS frameworks that provide pre-designed components, Tailwind CSS focuses on providing a comprehensive set of utility classes that you can directly apply to your HTML elements.

          When combined with Next.js, a powerful React framework for building server-side rendered applications, you can unlock a seamless development experience and create performant, scalable web applications.

          In this tutorial, I'll will walk you through the process of setting up Tailwind CSS with Next.js, so you can harness the power of Tailwind's utility classes in your Next.js projects.

          Prerequisites
          Before getting started, make sure you have the following prerequisites:

          Node.js installed on your machine
          Basic knowledge of JavaScript and React
          Familiarity with Next.js
          How Tailwind CSS and Utility Classes Work
          Tailwind CSS follows a utility-first approach to styling. It provides a vast collection of small, single-purpose utility classes that you can apply directly to your HTML elements.

          Each utility class represents a specific CSS property or combination of properties, making it easy to build complex UI components by composing these classes together.

          For example, instead of defining a custom CSS class for setting the color of a button, you can simply apply the "text-blue-500" utility class to achieve the desired effect.

          The utility classes in Tailwind CSS are designed to be highly flexible and customizable. You can easily adjust properties such as margin, padding, font size, colors, and more by leveraging the intuitive naming conventions provided by Tailwind.

          This approach offers a fine-grained level of control over your styles, eliminating the need to write custom CSS for most common styling scenarios.
        </p>
      </div>
      <div className="text-center md:text-right md:flex md:justify-end w-full md:w-2/5 self-start order-1 md:order-2">
        {/* Your single image goes here */}
        <img
          src="/profile.png"
          alt="Your Alt Text"
          className="h-32 w-32 md:h-auto md:w-auto min-w-[100px] transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 max-w-[200px] md:max-w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
