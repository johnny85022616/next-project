import Button from '@mui/material/Button';
import { useRouter } from "next/router";

export default function LinkButton({link}) {
    const router = useRouter();
    
    const handleClick = () => {
        router.push(link)
    }
    return(
        <Button onClick={handleClick} variant="contained">Home</Button>
    )
};
