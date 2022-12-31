import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens} from "../../theme";
import {useTheme} from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box display="flex" sx={{height:"75vh" ,width:"80vw"}} border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart/>
      </Box>
    </Box>
  );
};

export default Geography;