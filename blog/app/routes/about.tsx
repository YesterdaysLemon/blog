import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to my blog! I'm passionate about sharing knowledge and experiences through writing.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-700 mb-6">
          I'm a writer, developer, and lifelong learner. This blog is where I share my thoughts, 
          experiences, and insights on various topics that interest me.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What I Write About</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Technology and programming</li>
          <li>Personal development</li>
          <li>Industry insights</li>
          <li>Book reviews and recommendations</li>
          <li>Life lessons and experiences</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-6">
          I love connecting with readers! Feel free to reach out through the contact page 
          or follow me on social media.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📍 Based in [Your Location]</li>
            <li>💼 Working in [Your Industry]</li>
            <li>📚 Currently reading: [Book Title]</li>
            <li>☕ Favorite drink: Coffee</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 