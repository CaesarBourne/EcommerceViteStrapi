import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
// import { setIsCartOpen } from "../../state";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      bgcolor="rba(255,255,255 , 0.95)"
      height="60px"
      position={"fixed"}
      zIndex={"1"}
      top="0"
      left="0"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
    </Box>
  );
};

export default NavBar;
