import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from '/components/layout';

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

const Nuggets = ({ blogs }) => {

    return (
        <Layout>
            <div className="p-5">
                <h2 className="text-3xl md:text-5xl text-black-500 mb-8">Nuggets (Mini Blogs)</h2>
                <ul className="list-disc space-y-4 leading-5 text-base">
                    {blogs.map((blog) => (
                        <li className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-300">
                            <div className="text-blue-100 text-sm md:text-2xl mb-2">
                                {blog.date}
                            </div>
                            <div>
                                <a href={`/nuggets/${blog.slug}`} className="text-blue-500 hover:underline text-lg md:text-2xl font-bold">
                                    {blog.title}
                                </a>
                            </div>
                            <div className="text-blue-100 mt-2 md:text-2xl">
                                {blog.preview}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}

export default Nuggets;
