import type { Song} from "../../assets/types";

interface props {
    favoriteSongsListId: string[];
    songsList: Song[];
}

const FavoritePage: React.FC<props> = ({ favoriteSongsListId, songsList}: props) => {
    const favoriteSongsList: Song[] = songsList.filter((song) => favoriteSongsListId.includes(song.id) )

    return (
        <SongsTable favoriteSongsList = {favoriteSongsList}/>
    )
}

export default FavoritePage;