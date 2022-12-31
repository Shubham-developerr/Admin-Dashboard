import React from 'react'
import {Box,Button,IconButton,Typography,useTheme} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header'
import { DownloadingOutlined, EmailOutlined } from '@mui/icons-material';
import { mockTransactions } from '../../data/mockData';
import { DownloadDoneOutlined, Email } from '@mui/icons-material';
import { PointOfSale } from '@mui/icons-material';
import { PersonAdd } from '@mui/icons-material';
import { Traffic } from '@mui/icons-material';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import PieChart from '../../components/PieChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle'; 

const Dashboard= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px" width="80vw">
        <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Header title="DASHBOARD" subtitle="Welcome to your dashoard"/>
        <Box>
            <Button sx={{backgroundColor:colors.blueAccent[700], color:colors.grey[100],
            fontSize:"14px",
            fontWeight:"bold",
            padding:"10px 20px"
            }}>
                <DownloadDoneOutlined sx={{mr:"10px"}} />
                Download Reports
            </Button>
            </Box>
        </Box>
        {/* Vrid & charts */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(12,1fr)"
            gridAutoRows = "140px"
            gap="20px"
        >
            <Box
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent = "center"
            >
                <StatBox title="12,361"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={<EmailOutlined sx={{color:colors.greenAccent[600],fontSize:"26px"}} />}
                />
            </Box>
            <Box
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent = "center"
            >
                <StatBox title="431,225"
                    subtitle="Sales Obtained"
                    progress="0.5"
                    increase="+21%"
                    icon={<PointOfSale sx={{color:colors.greenAccent[600],fontSize:"26px"}} />}
                />
            </Box>
            <Box
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent = "center"
            >
                <StatBox title="32,441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={<PersonAdd sx={{color:colors.greenAccent[600],fontSize:"26px"}} />}
                />
            </Box>
            <Box
                gridColumn="span 3" 
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent = "center"
            >
                <StatBox title="1,325,134"
                    subtitle="Traffic Inbound"
                    progress="0.80"
                    increase="+43%"
                    icon={<Traffic sx={{color:colors.greenAccent[600],fontSize:"26px"}} />}
                />
            </Box>
            {/* Row 2 */}

            <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            >
                <Box mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                            Revenue Generated
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                            $59,342,32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadingOutlined sx={{fontSize:"26px", color:colors.greenAccent[500]}} />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" width="50vw" mt="-20px">
                    <LineChart isDashBoard={true}/>
                </Box>
                </Box>
                {/* Transcation */}
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                    <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p="15px">
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transcation
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction,i)=>(
                        <Box key={`${transaction.txId} - ${i}`}
                            display="flex"
                            justifyContent="space-between" alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                            >
                            <Box>
                                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]} variant="h5">
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
            {/* Row 3 */}
            <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}
            p="30px"
            >
                <Typography vaiants="h6" fontWeight="600">
                        Campaign
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                    <ProgressCircle size="125"/>
                    <Typography variant="h6" color={colors.greenAccent[500]} sx={{mt:"15px"}}>
                        $48,350 Revenue Generated
                    </Typography>
                    <Typography vaiants="h6" fontWeight="600">
                        Includes extra misc expenditures and costs 
                    </Typography>
                </Box>
            </Box>
            {/* 3 Box */}
            {/* <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}
            >
                <Typography vaiants="h6" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
                        Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                    <BarChart isDashBoard={true}/>
                </Box>
            </Box>
            {/* Last  */}
            <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px"
            >
                <Typography vaiants="h6" fontWeight="600" sx={{mb:"15px"}}>
                        Geography Based Traffic
                </Typography>
                <Box height="200px" mt="-20px">
                    <GeographyChart isDashBoard={true}/>
                </Box>
            </Box> 
        </Box>
    </Box>
    )
}
export default Dashboard;