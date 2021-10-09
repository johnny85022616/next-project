import { Box } from "@mui/system";

export default function Title({children}) {
    return <Box sx={{color:"primary.main" , fontSize:"80px" ,  fontWeight:"bold"}}>{children}</Box>
};
