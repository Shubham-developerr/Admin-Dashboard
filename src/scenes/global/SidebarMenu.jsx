import React from 'react';
import { useState } from 'react';
import {Sidebar,Menu, MenuItem} from "react-pro-sidebar";
import {Box, IconButton,Typography,useTheme} from '@mui/material';

import{tokens}  from "../../theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({title,too,icon,selected, setSelected}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
        active={selected===title}
        
        style={{color:selected===title ? colors.greenAccent[400] : colors.blueAccent[100]}}
        onClick={()=>setSelected(title)} 
        icon={icon}
        >   
        <Link to={too}><Typography color={colors.grey[100]}>{title}</Typography></Link>
        </MenuItem>
    );
}

const SidebarMenu= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const[selected,setSelected] = useState("Dashboard");

    return(
        <Box>
            <Sidebar backgroundColor={`${colors.primary[400]}`}>
                <Box collapsed = {isCollapsed}>
                    <Menu iconShape="square">
                        <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[400],
                        }}>
                
                        {!isCollapsed && (
                            <Box 
                                
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h5" mr="70px" color={colors.grey[100]}>
                                        ADMINIS
                                </Typography>
                                <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                            )}
                        </MenuItem>
                        {/* {USER} */}
                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.JPG`}
                                    style={{cursor:"pointer",borderRadius:"50%"}}
                                    />
                                    
                                </Box>
                                <Box textAlign="center">
                                    <Typography variant="h6" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>Shubham Sharma</Typography>
                                    <Typography variant="p" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                                </Box>
                            </Box>
                        )}
                        {/* {Menu Items} */}
                        
                        {!isCollapsed && (<Box paddingLeft={isCollapsed? undefined:"10%"}>
                            <Item
                            title="Dashboard"
                            too="/"
                            icon={<HomeOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />

                            <Typography 
                            varinat="h6"
                            color={colors.grey[300]}
                            sx={{m:"15px 0 5px 20px"}}
                            >Data
                            </Typography>

                            <Item
                            title="Manage Team"
                            too="/team"
                            icon={<PeopleOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                    
                        
                            <Item
                            title="Contacts Information"
                            too="/contact"
                            icon={<ContactsOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                        
                        
                            <Item
                            title="Invoices Balances"
                            too="/invoice"
                            icon={<ReceiptOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                            <Typography 
                                varinat="h6"
                                color={colors.grey[300]}
                                sx={{m:"15px 0 5px 20px"}}
                                >Pages
                            </Typography>

                            <Item
                            title="Profile Form"
                            too="/form"
                            icon={<PersonOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                            <Item
                            title="Calendar"
                            too="/calendar"
                            icon={<CalendarTodayOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                            <Item
                            title="FAQ"
                            too="/faq"
                            icon={<HelpOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />

                            <Typography 
                                varinat="h6"
                                color={colors.grey[300]}
                                sx={{m:"15px 0 5px 20px"}}
                                >Charts
                            </Typography>

                            {/* <Item
                            title="Bar Chart"
                            too="/bar"
                            icon={<BarChartOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            /> */}
                            {/* <Item
                            title="Pie Chart"
                            too="/pie"
                            icon={<PieChartOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            /> */}
                            <Item
                            title="Line Chart"
                            too="/line"
                            icon={<TimelineOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                            <Item
                            title="Geography Chart"
                            too="/geography"
                            icon={<MapOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />
                        </Box>)}
                    </Menu>
                </Box>
            </Sidebar>
        </Box>
    )
}
export default SidebarMenu;