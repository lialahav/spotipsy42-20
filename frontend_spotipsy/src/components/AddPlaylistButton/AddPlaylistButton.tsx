import useStyles from "./AddPlaylistButtonStyles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import type { Playlist } from "../../assets/types";

interface Props{
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
}

const AddPlaylistButton: React.FC<Props> = ({playlistsList, setPlayListsList}: Props) => {
    const { classes } = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState<string>();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePostRequest = async (formJson: Object) => {
        try{
            const response = await fetch("http://127.0.0.1:5001/api/playlists", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formJson)
            });

            const data = await response.json();
            setPlayListsList([...playlistsList, data]);
        } 
        catch (error){
            setError("Someting went wrong");
            console.error(error);
            return;
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        handlePostRequest(formJson);
        handleClose();
    };

    return (
        <React.Fragment>
            <Button className={classes.buttonContainer} onClick={handleClickOpen}>+צור פלייליסט</Button>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" lang="he" dir="rtl">
                <DialogTitle>יצירת פלייליסט חדש</DialogTitle>
                <DialogContent>
                <form onSubmit={handleSubmit} id="addPlaylist">
                    <TextField
                    required
                    id="name"
                    name="name"
                    label="שם הפלייליסט"
                    type="text"
                    fullWidth
                    variant="standard"
                    />
                </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>ביטול</Button>
                <Button type="submit" form="addPlaylist">
                    צור
                </Button>
                </DialogActions>
        </Dialog>
      </React.Fragment>
    )
}

export default AddPlaylistButton;