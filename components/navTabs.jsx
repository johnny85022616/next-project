import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";

export default function NavTabs() {
  const router = useRouter();

  const handleChange = (event, value) => {
    router.push(value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={router.pathname}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          width="100%"
          centered={true}
        >
          <Tab
            color="textPrimary"
            label="Home"
            sx={{ width: "15%" }}
            value="/"
          />
          <Tab label="Create" sx={{ width: "15%" }} value="/users/create" />
          <Tab label="Delete" sx={{ width: "15%" }} value="/users/delete" />
          <Tab label="Update" sx={{ width: "15%" }} value="/users/update" />
        </Tabs>
      </Box>
    </Box>
  );
}
