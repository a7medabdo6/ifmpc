// components/ErrorComponent.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="200px"
  >
    <Typography color="error">{message}</Typography>
  </Box>
);

export default ErrorComponent;
