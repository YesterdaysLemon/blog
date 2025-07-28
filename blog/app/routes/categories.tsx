import React from "react";
import { Link } from "react-router";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      description: "Posts about programming, software development, and tech trends",
      postCount: 12,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Personal Development",
      description: "Tips and insights for personal growth and productivity",
      postCount: 8,
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      name: "Industry Insights",
      description: "Analysis and thoughts on industry trends and developments",
      postCount: 15,
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      name: "Book Reviews",
      description: "Reviews and recommendations for books I've read",
      postCount: 6,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 5,
      name: "Life Lessons",
      description: "Personal experiences and lessons learned along the way",
      postCount: 10,
      color: "bg-red-100 text-red-800"
    },
    {
      id: 6,
      name: "Tutorials",
      description: "Step-by-step guides and how-to articles",
      postCount: 9,
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Categories</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Browse posts by category to find content that interests you most.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                {category.postCount} posts
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">
              {category.description}
            </p>
            
            <Link 
              to={`/blog?category=${category.name.toLowerCase()}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View all posts →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Can't find what you're looking for?</h3>
        <p className="text-gray-700 mb-4">
          Use the search function to find specific topics or browse all posts chronologically.
        </p>
        <div className="flex space-x-4">
          <Link 
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Browse all posts
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            to="/search"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Search posts
          </Link>
        </div>
      </div>
    </div>
  );
} 