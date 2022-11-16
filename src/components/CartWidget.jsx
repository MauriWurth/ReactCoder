import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
// import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";

const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Button>
        <Tooltip title="Abrir Carrito">
            <ShoppingCartIcon style={{ color: "#fff" }}></ShoppingCartIcon>
        </Tooltip>
      </Button>
    </Box>
  );
};

export default CartWidget;
