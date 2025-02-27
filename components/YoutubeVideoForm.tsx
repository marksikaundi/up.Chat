import React from 'react'
import Form from "next/form"

function YoutubeVideoForm() {
  return (
    <div>
      <Form
      action={() => {}}
      className=" flex flex-col sm:flex-row gap-2 items-center "
      />

      <input name="url" type="text" placeholder="Enter Youtube URL" className="  " />
      <button className=" ">
        Analyze Video
        </button>
    </div>
  )
}

export default YoutubeVideoForm
