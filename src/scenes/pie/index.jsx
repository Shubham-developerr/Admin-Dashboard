import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box display="flex" sx={{height:"75vh" ,width:"80vw"}}>
        <PieChart/>
      </Box>
    </Box>
  );
};

export default Pie;