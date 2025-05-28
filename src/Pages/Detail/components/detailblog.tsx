import React, { useEffect, useState } from "react";
import axios from "axios";

interface Author {
  username: string;
}

interface ImageData {
  url: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: Author;
  image: ImageData[];
  createdAt: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(
          "http://62.72.46.248:1337/api/stories/5?populate=*"
        );
        setPost(res.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post)
    return <div className="text-center mt-10">No blog post found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        By {post.author?.username} •{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.image?.[0]?.url && (
        <img
          src={`http://62.72.46.248:1337${post.image[0].url}`}
          alt="Blog"
          className="w-full h-auto rounded-lg shadow mb-6"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPost;

