import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Line Chart" />
      <Box display="flex" sx={{height:"75vh" ,width:"80vw"}}>
        <LineChart/>
      </Box>
    </Box>
  );
};

export default Line;