import SongsTable from "../../assets/songsTable/songsTable";
import type { Song, Playlist} from "../../assets/types";
import useStyles from "./FavoritePageStyles";

interface props {
    favoriteSongsListId: string[];
    songsList: Song[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
    currentSong: Song | undefined;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;
}

const FavoritePage: React.FC<props> = (props: props) => {
    const {classes} = useStyles();
    const favoriteSongsList: Song[] = props.songsList.filter((song) => props.favoriteSongsListId.includes(song.id) )

    return (
        <div className={classes.container}>
            <div className={classes.title} lang="he" dir="rtl">
                <h2>המועדפים שלי</h2>
            </div>
            <div className={classes.listContainer}>
                <SongsTable songsList={favoriteSongsList} favoriteSongsListId={props.favoriteSongsListId} setFavoriteSongsIdList={props.setFavoriteSongsIdList} setError={props.setError}
                    playlistsList = {props.playlistsList} setPlayListsList= {props.setPlayListsList} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} isPlaying={props.isPlaying} 
                        setIsPlaying={props.setIsPlaying} queue = {props.queue} setQueue={props.setQueue}
                />
            </div>
                
        </div>
    )
}

export default FavoritePage;