// components/LoadingIndicator.tsx
import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingIndicator: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="200px"
  >
    <CircularProgress />
  </Box>
);

export default LoadingIndicator;
