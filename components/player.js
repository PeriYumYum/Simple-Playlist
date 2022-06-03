import ReactPlayer from 'react-player/youtube'
export default function Player(props) {
  const videoURL = 'https://www.youtube.com/watch?v=' + props.videoId

  return (
    <div className="m-4 aspect-video w-full">
      <ReactPlayer
        url={videoURL}
        playing={true}
        onEnded={props.onEnd}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 1,
            },
          },
        }}
      />
    </div>
  )
}
