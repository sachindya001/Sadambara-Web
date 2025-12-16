import React from "react";
import { Box, CircularProgress } from "@mui/material";

const PageLoader: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default PageLoader;
