import React from "react";
import Form from "next/form";
import AnalyseButton from "./AnalyseButton";

function YoutubeVideoForm() {
  return (
    <div className=" w-full max-w-2xl mx-auto ">
      <Form className=" flex flex-col sm:flex-row gap-2 items-center ">
        <input
          name="url"
          type="text"
          placeholder="Enter Youtube URL"
          className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-transparent 
        transition-all duration-200"
        />
        <AnalyseButton />
      </Form>
    </div>
  );
}

export default YoutubeVideoForm;
