import { Box } from "@mui/system";

export default function Title({children}) {
    return <Box sx={{color:"primary.main" , fontSize:"40px" ,  fontWeight:"bold"}}>{children}</Box>
};
