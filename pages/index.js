import Head from "next/head";
import { useState } from "react";
import Player from "../components/player";
import TestPlaylist from "../data/test-playlist.json";
import Playlist from "../components/playlist";
import SearchContainer from "../components/searchContainer";


export default function Home() {
  const [videoData, updateVideoData] = useState(TestPlaylist.items);
  const [currentVideoId, updateCurrentVideoId] = useState(
    videoData[0].id.videoId
  );
  const playNext = () => {
    videoData.shift();
    if (videoData.length > 0) {
      updateCurrentVideoId(videoData[0].id.videoId);
    }
  };
  //
  const addToPlaylist = (video) => {
    console.log(video)
    updateVideoData(videoData => [...videoData, video])
    if (currentVideoId == null) {
        updateCurrentVideoId(video.id.videoId)
    }
}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Youtube Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col">
        <Player videoId={currentVideoId} onEnd={playNext} />  
          <div className="flex flex-row">
          <Playlist data={videoData} />
          <SearchContainer searchlistFunc={addToPlaylist}/>         
          </div>
        </div>
      </main>
    </div>
  );
}
