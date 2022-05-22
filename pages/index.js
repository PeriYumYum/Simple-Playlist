import Head from 'next/head'
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
  //add videos from search results to the playlist
  const addToPlaylist = (video) => {
    console.log(video)
    updateVideoData((videoData) => [...videoData, video])
    if (currentVideoId == null) {
      updateCurrentVideoId(video.id.videoId)
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Youtube Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="justify-content: center">
          <Player videoId={currentVideoId} onEnd={playNext} />
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
