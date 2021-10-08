import Button from "@mui/material/Button";

export default function DeleteButton({callBack}) {
    return (
        <Button variant="contained" color="error" onClick={callBack}>
          Delete
        </Button>
      );
};
