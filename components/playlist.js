export default function Playlist(props) {
  return (
    <div className="flex max-w-sm flex-col flex-wrap md:overflow-y-scroll">
      {props.data.map((item, index) => {
        return (
          <div key={index} className="flex w-1/2 flex-row items-start">
            <div className="mx-2">
              <h1 className="text-lg">{index + 1}</h1>
            </div>

            <div className=" text-sm">
              <h3 className="font-bold">{item.snippet.title}</h3>
              <p>{item.snippet.channelTitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
