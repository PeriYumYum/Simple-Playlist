import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Player from '../components/player'
import TestPlaylist from '../data/test-playlist.json'
import Playlist from '../components/playlist'
import SearchBar from '../components/searchbar'
import SearchList from '../components/searchlist'
import youtubeApi from './api/youtube'

export default function Home() {
  //useState const
  const [videoData, updateVideoData] = useState(TestPlaylist.items)
  const [currentVideoId, updateCurrentVideoId] = useState(
    videoData[0].id.videoId
  )
  const [searchResults, updateSearchResults] = useState([])

  //play next song
  const playNext = () => {
    videoData.shift()
    if (videoData.length > 0) {
      updateCurrentVideoId(videoData[0].id.videoId)
    }
  }

  //handle search results
  const handleSearch = async (query) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: query,
      },
    })
    updateSearchResults(response.data.items)
    console.log(response.data.items) //
  }
  //add videos to the playlist from search results
  const addToPlaylist = (video) => {
    console.log(video)
    updateVideoData((videoData) => [...videoData, video])
    if (currentVideoId == null) {
      updateCurrentVideoId(video.id.videoId)
    }
  }
  return (
    <div className="min-h-full bg-cyan-300">
      <Head>
        <title>Simple Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-w-full py-2 text-center">
        <div className="flex flex-row items-center">
          <Image src="/icon-192x192.png" width={50} height={50} />
          <h1 className="text-3xl font-bold">Simple Player</h1>
        </div>
        <p>A Minimal Application for Youtube Videos</p>
      </section>

      <main>
        <div className="flex items-center justify-center bg-cyan-600">
          <div className="w-20 text-center">
            <button>previous</button>
          </div>
          <Player videoId={currentVideoId} onEnd={playNext} />
          <div className="w-20 text-center">
            <button onClick={playNext}>next</button>
          </div>
        </div>
      </main>
      <div>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="flex flex-row">
        <Playlist data={videoData} />
        <SearchList data={searchResults} searchlistFunc={addToPlaylist} />
      </div>
    </div>
  )
}
