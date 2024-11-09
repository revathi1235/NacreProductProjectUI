import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import worker from "../../Assets/worker.png";
import PurveyLogo from "../../Assets/PurveyLogo.png";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import Dashboardchart1 from "./Dashboardchart1";
import Dashboardchart2 from "./Dashboardchart2";
import Dashboardchart3 from "./Dashboardchart3";

import Dashboardchart4 from "./Dashboardchart4";
import Dashboardchart5 from "./Dashboardchart5";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const [isVisible, setIsvisible] = React.useState(false);
  const handlePicklist = () => {
    navigate("/picklist");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: "rgb(156, 153, 153)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Navbar.Brand>
            <img
              src={PurveyLogo}
              alt=""
              style={{ height: "30px", cursor: "pointer" }}
            />{" "}
            <span className="wms-navbar" style={{ cursor: "pointer" }}>
              APORA
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="wms-sidenavbar">
              {/* <img src={GRIcon3} style={{height:"20px",cursor:"pointer"}} alt="" /> */}
              Dashboard{" "}
            </Nav.Link>
            <Nav.Link className="wms-sidenavbar" onClick={handlePicklist}>
              {/* <img src={ItemMasterIcon1} style={{height:"20px",cursor:"pointer"}} alt="" />  */}
              Picklist
            </Nav.Link>

            {/* <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color:"green",fontSize:"20px"}}/></Nav.Link> */}
            <Nav.Link>
              <FontAwesomeIcon
                icon={faPowerOff}
                style={{ color: "green", fontSize: "20px" }}
              />
            </Nav.Link>
          </Nav>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {pickerList.map((text, index) => ( */}
          <ListItem
            //  key={text}
            disablePadding
            className="listitem"
          >
            <ListItemButton
              sx={{
                minHeight: 8,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                display: "flex", // Ensures items are in a row
                alignItems: "center", // Vertically aligns items in the center
              }}

              // onClick={() => handleShow(index)}
            >
              <img
                src={worker}
                alt="worker icon"
                style={{
                  width: "20px", 
                  height: "20px", 
                  marginRight: "8px",
                }}
              />
              <ListItemText
                primary="Picker" // Replace "Picker" with your desired text
                //  primary={text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          {/* ))} */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container>
          <Row className="mt-4">
            <Col lg={12}>
              <h5 className="materialinward-heading">Dashboard</h5>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <Row>
                <Col lg={5}>
                  <Dashboardchart1 />
                </Col>
                <Col lg={5}>
                  <Dashboardchart2 />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col lg={5}>
                  <Dashboardchart3 />
                </Col>
                <Col lg={5}>
                  <Dashboardchart4 />
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Dashboardchart5 />
            </Col>
          </Row>
        </Container>
        {/* <Row>
            <Col lg={4}>
            <Dashboardchart1/>
         
            </Col>
            <Col lg={4}>
            <Dashboardchart2/>
            </Col>

            <Col lg={4}>
            <Dashboardchart5/>
            </Col>
          
            <Col lg={4}>
            <Dashboardchart3/>
         
            </Col>
            <Col lg={4}>
           <Dashboardchart4/>
            </Col>
          </Row> */}

        {/* ========================pist list divs========================== */}
        {isVisible && (
          <Container>
            <h1>isgbfi</h1>
          </Container>
        )}
      </Box>
    </Box>
  );
}
