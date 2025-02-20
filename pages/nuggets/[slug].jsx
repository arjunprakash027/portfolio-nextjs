import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "../../components/layout";

// THis part is neccessary to ensure next knows what dynamic links might appear for it to render 
export async function getStaticPaths() {
    const blogDir = path.join(process.cwd(), "content/nuggets");
    const filenames = fs.readdirSync(blogDir);

    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(".md", "") },
    }))

    return { paths, fallback: false };
}

// Important to ensure all the blogs are pre-rendered before being sent to user 
export async function getStaticProps({ params }) {
    const filepath = path.join(process.cwd(), 'content/nuggets', `${params.slug}.md`);
    const filecontent = fs.readFileSync(filepath, 'utf-8');

    const { content, data } = matter(filecontent);

    return { props: { content, metadata: data } };
}


const BlogPost = ({ content, metadata }) => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-900 flex justify-center">
                <article className="prose lg:prose-xl mx-auto bg-gray-900 text-blue-100 p-10 rounded-md max-w-4xl my-16 text-left prose-headings:text-red-300">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        </Layout>
    );
}

export default BlogPost;
