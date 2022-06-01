import Image from 'next/image'
export default function SearchList(props) {
  const results = props.data
  return (
    <div>
      {results.map((item) => {
        return (
          <div key={item.id.videoId} className="flex flex-row space-x-2 py-1">
            <Image
              className="flex shrink-0"
              src={item.snippet.thumbnails.default.url}
              alt="Music video thumbnail"
              width={120}
              height={90}
            />
            <div className="flex flex-col ">
              <h3 className="text-md font-semibold">{item.snippet.title}</h3>
              <p className="text-sm font-light">{item.snippet.channelTitle}</p>
              <div>
                <button
                  onClick={() => props.searchlistFunc(item)}
                  className="flex h-auto w-auto flex-row space-x-2 pt-2"
                >
                  <svg
                    viewBox="0 0 30 30"
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.98,0C6.259,0,0,6.26,0,13.982s6.259,13.981,13.98,13.981c7.725,0,13.983-6.26,13.983-13.981
			C27.963,6.26,21.705,0,13.98,0z M21.102,16.059h-4.939v5.042h-4.299v-5.042H6.862V11.76h5.001v-4.9h4.299v4.9h4.939v4.299H21.102z
			"
                    />
                  </svg>
                  <h2 className="m-0">Add to Playlist</h2>
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

//svg config
// stroke="currentColor"
//                     strokeWidth="0.5"
//                     fill="currentColor"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//<path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
