import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  cartType,
  decreaseItemCount,
  increaseItemCount,
  itemType,
  itemslistType,
  removeItemFromCart,
  setIsItemCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: Flex;
  justify-content: space-between;
  align-items: center;
`;
const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartSliceState: itemslistType = useSelector(
    (state: any) => state.cartSliceState.cart
  );
  const isCartOpenState: itemslistType = useSelector(
    (state: any) => state.cartSliceState.isCartOpen
  );

  const toralPrice = cartSliceState.reduce((present: any, nextItem: any) => {
    present += nextItem.count * nextItem.attribute.price;
  }, 0);
  return (
    // overlay
    <Box
      display={isCartOpenState ? "block" : "none"}
      bgcolor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* modal */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        bgcolor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* header */}
          <FlexBox mb="15px">
            <Typography variant="h3">
              SHOPPING Bag ({cartSliceState.length})
            </Typography>
          </FlexBox>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
