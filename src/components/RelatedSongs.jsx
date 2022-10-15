import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  artistId,
}) => (
  <div className="flex flex-col mt-10">
    <h1 className="font-bold text-3xl text-white">Canciones relacionadas:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;