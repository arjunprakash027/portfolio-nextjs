import fs from "fs";
import path from 'path';

export async function getServerSideProps({ res}) {
    const blogDir = path.join(process.cwd(), "content");
    const filename = "get_templates.sh";
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8"); 

    res.setHeader('Content-Type', 'text/plain');
    res.write((
        fileContent
    ));
    res.end();
    return { props: {} };
}

export default function Bio() {
    return null;
}