'use client'
import { useState } from "react"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: ' ',
    email: ' ',
    nick: ' ',
    message: ' '
  })
// State for submitted message
  const [messages, setMessages] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [showMessages, setShowMessages] = useState(false)


// Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

// Handle for submission
const handleSubmit = (e) => {
  e.preventDefault()
 
// Create new message with timestamp
const newMessage = {
  ...formData,
  id: Date.now(),
  timestamp: new Date().toLocaleString()
} 

// Add to message array

setMessages([...messages, newMessage])

// Clear form
setFormData({
  name: ' ',
  email: ' ',
  nick: ' ',
  message: ' '
})

// Show success message
setShowSuccess(true)
setTimeout(() => setShowSuccess(false), 3000)
}


 return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Me</h1>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
           
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <strong>Success!</strong> Your message has been submitted.
              </div>
            )}
           
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
             
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

               <div>
                <label htmlFor="nick" className="block text-sm font-medium text-gray-700 mb-2">
                  Nickname *
                </label>
                <input
                  type="text"
                  id="nick"
                  name="nick"
                  value={formData.nick}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Nickname"
                />
              </div>
             
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
             
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
         
          {/* Messages Display Section - THIS IS THE NEW PART */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Submitted Messages</h2>
           
            {/* VIEW MESSAGES BUTTON - THIS IS WHAT YOU'RE LOOKING FOR */}
            <div className="mb-6">
              <button
                onClick={() => setShowMessages(!showMessages)}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                {showMessages ? 'Hide Messages' : 'View Messages'} ({messages.length})
              </button>
            </div>
           
            {/* Messages List */}
            {showMessages && (
              <div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No messages yet. Submit the form to see messages here!</p>
                  ) : (
                    messages.map((message) => (
                      <div key={message.id} className="bg-gray-50 p-4 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800">{message.name}</h3>
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{message.email}</p>
                         <p className="text-sm text-gray-600">{message.nick}</p>
                        <p className="text-gray-700">{message.message}</p>
                      </div>
                    ))
                  )}
                </div>
               
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                  >
                    Clear All Messages
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}