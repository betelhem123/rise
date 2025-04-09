import React from 'react'
import PageHeader from '../components/PageHeader'

const Blog = () => {
  return (
    <div className="bg-gradient-to-br from-white via-slate-100 to-gray-200 min-h-screen py-10">
      <PageHeader title="Our Blog Page" curPage="blog" />
      <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] transform hover:scale-105 transition duration-300">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-xl bg-white/70 rounded-xl p-6 shadow-lg backdrop-blur-md">
          We’re working on something exciting! <br />
          Expect high-quality blogs every <span className="font-semibold text-blue-600">Saturday</span> – packed with insights, tech tips, and more. 
          <br />Stay tuned and get ready to dive into valuable content. 🚀
        </p>
      </div>
    </div>
  )
}

export default Blog
