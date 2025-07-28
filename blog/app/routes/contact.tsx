import React from "react";
import { Button } from "~/components/ui/button";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            I'd love to hear from you! Whether you have a question, want to collaborate, 
            or just want to say hello, feel free to reach out.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                📧
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">hello@yourblog.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                🐦
              </div>
              <div>
                <p className="font-medium">Twitter</p>
                <p className="text-gray-600">@yourusername</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                💼
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-gray-600">linkedin.com/in/yourusername</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                📱
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-gray-600">github.com/yourusername</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 