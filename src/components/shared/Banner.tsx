import Image from 'next/image'


function Banner() {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
    <div className="max-w-3xl bg-gray-50 rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">
      {/* <!-- Image --> */}
      <Image src="https://images.unsplash.com/photo-1761872936081-344b9b67cedc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" width={500} height={500} alt="Banner" className="w-full md:w-1/2 h-56 object-cover rounded-lg" />


      {/* <!-- Content --> */}
      <div className="flex flex-col justify-between md:w-1/2">
        <div>
          <p className="text-xs text-gray-500 mb-1">Tech Industry</p>
          <h2 className="text-lg font-semibold text-gray-900 leading-snug">
            OpenAI Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            OpenAI monthly revenue hit $350M in August, up 700% since the beginning of 2023, and the
            company spent about $520M in that same time. The company’s balance sheet remains a hot
            topic in Silicon Valley.
          </p>
        </div>
        <button
          className="mt-4 bg-gray-900 text-white text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
  )
}

export default Banner