'use client'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-xl text-gray-700 mb-8">
         This is about my page. This is my first website
        </p>
        <p className="text-lg text-gray-600">
          Here you can write more about yourself, your interests, and your journey into coding.
        </p>
      </div>
    </div>
  )
}
 