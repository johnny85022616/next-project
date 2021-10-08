import Button from '@mui/material/Button';

export default function UpdateButton({callBack}) {

    return(
        <Button variant="contained" color='success' onClick={callBack}>Update</Button>
    )
};
