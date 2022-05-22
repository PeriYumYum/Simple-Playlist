import Image from 'next/image'
export default function SearchList(props) {
  const results = props.data
  return (
    <div>
      {results.map((item) => {
        return (
          <div key={item.id.videoId} className="flex flex-row space-x-2 py-1">
            <Image
              src={item.snippet.thumbnails.default.url}
              alt="Music video thumbnail"
              width={120}
              height={90}
            />
            <div className="flex flex-col ">
              <h3 className="text-md font-semibold">{item.snippet.title}</h3>
              <p className="text-sm font-light">{item.snippet.channelTitle}</p>

              <div className="flex flex-row space-x-2 pt-2">
                <button
                  onClick={() => props.searchlistFunc(item)}
                  className="h-auto w-auto"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
                  </svg>
                </button>
                <h2 className="m-0">Add to Playlist</h2>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
