import Link from 'next/link'
import React from 'react'

function newsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="container mx-auto px-4 py-8">
    {/* <!-- Header with Tabs --> */}
    <div className="flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/news/sports">
        <button className="text-lg text-gray-700 hover:text-blue-500">Sports</button>
        </Link>
        <Link href="/news/health">
        <button className="text-lg text-gray-700 hover:text-blue-500">Health</button>
        </Link>
        <Link href="/news/technology">
        <button className="text-lg text-gray-700 hover:text-blue-500">Technology</button>
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-gray-800">Latest News</h1>
    </div>

    {/* <!-- Main Content Section --> */}
    <div className="mt-8 flex space-x-8">
      {/* <!-- Main News Area --> */}
      <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800">{children}</h2>
      </div>

      {/* <!-- Sidebar --> */}
      <div className="w-64 bg-purple-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-purple-800">SideBar</h3>
      </div>
    </div>
    </div>
  )
}

export default newsLayout