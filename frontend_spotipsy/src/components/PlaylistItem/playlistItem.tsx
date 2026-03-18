import useStyles from "./playlistItemStyles";
import {ListItem, ListItemText } from "@mui/material";

interface props {
    name: string;
    songsCount: number;
}

const PlaylistItem: React.FC<props> = ({ name, songsCount}:props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.itemContainer}>
            <ListItem>
                    <ListItemText primary={name} secondary={songsCount + 'שירים'}/>
            </ListItem>
        </div>
    )
}

export default PlaylistItem;