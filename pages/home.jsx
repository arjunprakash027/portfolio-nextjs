import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";

export async function getStaticProps() {
    const blogDir = path.join(process.cwd(), "content/nuggets");
    const filenames = fs.readdirSync(blogDir);

    const blogs = filenames.map((filename) => {
        const filePath = path.join(blogDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const stats = fs.statSync(filePath);

        return {
            slug: filename.replace(".md", ""),
            title: filename.replace(".md", "").replace("_", " "),
            date: stats.birthtime.toISOString().split("T")[0],
            preview: content.substring(0, 150) + "...",
        };

    });

    return { props: { blogs } };
}

const Home = ({ blogs }) => {

  console.log(blogs);
  return (
    <div className="flex flex-col items-center text-center p-6 max-w-4xl mx-auto">

      <img
        src="/profile4.jpg"
        alt="Your Alt Text"
        className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover transition-all duration-300 cursor-pointer filter grayscale-0 mb-8"
      />

      <article className="prose lg:prose-xl mx-auto bg-gray-900 text-blue-100 p-10 rounded-md max-w-4xl my-16 text-left prose-headings:text-red-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {"Hi"}
        </ReactMarkdown>
      </article>

    </div>
  );
};

export default Home;
