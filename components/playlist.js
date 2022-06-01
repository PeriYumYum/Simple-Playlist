export default function Playlist(props) {
  return (
    <div className="max-h-120 max-w-sm overflow-y-scroll">
      {props.data.map((item, index) => {
        return (
          <div key={index} className="flex w-60 flex-row items-center">
            <h1 className="text-lg">{index + 1}</h1>
            <div className="text-sm">
              <h3 className="font-bold">{item.snippet.title}</h3>
              <p>{item.snippet.channelTitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
