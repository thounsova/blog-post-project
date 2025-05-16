import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      // TODO: Replace with your API call to create the blog post
      await new Promise((r) => setTimeout(r, 1500));

      alert("Blog created successfully!");
      navigate("/");
    } catch {
      setError("Failed to create blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mt-[100px] mx-auto p-4 bg-white rounded shadow mt-8">
      <h1 className="text-xl font-semibold mb-5 text-gray-900 border-b pb-2">
        Create New Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
            autoComplete="off"
          />
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Upload Image (optional)
          </label>

          {/* Hidden file input */}
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Button to trigger file input click */}
          <button
            type="button"
            onClick={() => document.getElementById("image")?.click()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Choose Image
          </button>

          {/* Show selected file name */}
          {image && (
            <p className="mt-1 text-xs text-gray-600 italic">{image.name}</p>
          )}

          {/* Preview */}
          {preview && (
            <div className="mt-2">
              <img
                src={preview}
                alt="Selected preview"
                className="max-w-[600px] max-h-40 rounded border border-gray-300 object-contain"
              />
            </div>
          )}
        </div>

        {/* Error */}
        {error && <p className="text-red-600 text-xs font-medium">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white text-sm font-semibold ${
            isSubmitting
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } transition`}
        >
          {isSubmitting ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
}
