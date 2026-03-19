import type { Playlist } from "../../assets/types";
import useStyles from "./playlistItemStyles";
import {ListItem, ListItemText } from "@mui/material";

interface props {
    name: string;
    songsCount: number;
    onChange: () => void;
}

const PlaylistItem: React.FC<props> = ({ name, songsCount, onChange}:props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.itemContainer} onClick={() => onChange()}>
            <ListItem>
                    <ListItemText primary={name} secondary={
                        <span style={{ direction: 'rtl', display: 'inline-block' }}>
                            {songsCount} שירים
                        </span>
                    }/>
            </ListItem>
        </div>
    )
}

export default PlaylistItem;