"use server";

// import { getVideoIdFromUrl } from "@lib/youtube/getVideoIdFromUrl";

import  { redirect } from "next/navigation";


export async function analyseYoutubeVideo(formData: FormData){
    const url = formData.get("url")?.toString();
    if(!url) return;


    const videoId = "abc"; // getVideoIdFromUrl(url);
    if(!videoId) return;

    // redirect to the video page
    redirect(`/video/${videoId}/analysis`);
}






