import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), "content/nuggets");
  const filenames = fs.readdirSync(blogDir);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const {data,content} = matter(fileContent);
    const stats = fs.statSync(filePath);

    return {
            slug: filename.replace(".md", ""),
            title: filename.replace(".md", "").replace("_"," "),
            date: stats.birthtime.toISOString().split("T")[0],
            preview: content.substring(0, 150) + "...",
    };

  });

  return { props: { blogs } };
}

const Nuggets = ( { blogs } ) => {
  return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Nuggets (Mini-Blog)</h1>
            <div className="space-y-6">
                {blogs.map((blog) => (
                    <Link key={blog.slug} href={`/nuggets/${blog.slug}`} passHref>
                        <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer bg-white">
                            <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                                {blog.title}
                            </h2>
                            <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                            <p className="text-gray-700">{blog.preview}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Nuggets;
