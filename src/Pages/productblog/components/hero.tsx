import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

interface Category {
  id: number;
  title: string;
}

interface Props {
  onSelectCategory?: (category: Category | null) => void;
}

const CategoryFilter: React.FC<Props> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/categories`);
        const categoriesData = res.data.data.map((cat: any) => ({
          id: cat.id,
          title: cat.title,
        }));
        setCategories(categoriesData);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (category: Category | null) => {
    setSelectedCategory(category?.id ?? null);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleClick(null)}
            className={`px-6 py-2 rounded-full border transition ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleClick(category)}
              className={`px-6 py-2 rounded-full border transition ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
