import React from 'react'
import Form from "next/form"

function YoutubeVideoForm() {
  return (
    <div>
      <Form
      action={() => {}}
      />

      <input type="text" placeholder="Enter Youtube Video URL" className=" flex flex-col sm:flex-row gap-2 items-center " />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ">
        Analyze Video
        </button>
    </div>
  )
}

export default YoutubeVideoForm
