import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      // Placeholder results - in a real app, this would come from your backend
      setSearchResults([
        {
          id: 1,
          title: "Getting Started with React Router",
          excerpt: "Learn how to set up routing in your React application...",
          date: "2024-01-15",
          category: "Technology"
        },
        {
          id: 2,
          title: "10 Productivity Tips for Developers",
          excerpt: "Boost your productivity with these proven techniques...",
          date: "2024-01-10",
          category: "Personal Development"
        }
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Search</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for posts, topics, or keywords..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" disabled={isSearching}>
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>
      </form>

      {/* Search Results */}
      {searchQuery && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {isSearching 
              ? "Searching..." 
              : `Search results for "${searchQuery}"`
            }
          </h2>
          
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Searching for results...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result) => (
                <article key={result.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                      {result.title}
                    </h3>
                    <span className="text-sm text-gray-500">{result.date}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{result.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {result.category}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-500">
                Try different keywords or browse our categories instead.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Search Tips */}
      {!searchQuery && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Search Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Use specific keywords to find relevant posts</li>
            <li>• Try searching for author names, topics, or technologies</li>
            <li>• Use quotes for exact phrase matching</li>
            <li>• Browse categories for organized content</li>
          </ul>
        </div>
      )}
    </div>
  );
} 