import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, FileText, Users, ChevronRight } from "lucide-react";

const BlogPage: React.FC = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs?filters[documentId][$eq]=${documentId}&populate=*`
        );
        const data = await res.json();

        if (data.data && data.data.length > 0) {
          setBlog(data.data[0].attributes); // adjust if needed depending on API response shape
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [documentId]);

  if (loading) return <div className="mt-20 text-center">Loading...</div>;
  if (!blog) return <div className="mt-20 text-center">Blog not found.</div>;

  const { title, content, publishedAt, author, coverImage } = blog;

  const imageUrl = coverImage
    ? typeof coverImage === "string"
      ? coverImage
      : coverImage.data?.attributes?.url
      ? `http://localhost:1337${coverImage.data.attributes.url}`
      : null
    : null;

  return (
    <div className="bg-gray-100 mt-[100px] min-h-screen font-sans">
      <main className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 max-h-[600px] overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>

            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Users className="mr-1 w-4 h-4" />
              <span>{author || "អ្នកនិពន្ធ"}</span>
              <Calendar className="ml-4 mr-1 w-4 h-4" />
              <span>
                {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
              </span>
              <FileText className="ml-4 mr-1 w-4 h-4" />
              <span>ខ្លឹមសារ</span>
              <span className="ml-4">2105 ការមើល</span>
            </div>

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Blog Cover"
                className="w-full rounded-md mb-6"
              />
            )}

            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <ChevronRight className="mr-2 text-blue-500" />
              ការបោះពុម្ពថ្មីៗ
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-blue-500 transition-colors flex items-center">
                <ChevronRight className="mr-1 text-blue-400" />
                <a href="#">មើលប្លក់បន្ថែម</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
