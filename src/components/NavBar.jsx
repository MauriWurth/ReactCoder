import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.webp";
import CartWidget from "./CartWidget";
import { allProducts } from "./data.js";

function ResponsiveAppBar() {
  const pages = [];
  let categorias = [];
  allProducts.forEach((product) => {
    categorias.push(product.category);
    categorias = [...new Set(categorias)];
  });
  categorias.forEach((categoria) => {
    let element = { name: categoria, url: "/category/" + categoria };
    pages.push(element);
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "orange" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <Link key={i}
                  style={{ color: "orange", textDecoration: "none" }}
                  to={page.url}
                >
                  <MenuItem
                    style={{ textTransform: "uppercase" }}
                    key={page.name}
                  >
                    {page.name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} to="/">
            <img
              style={{ width: "120px" }}
              src={logo}
              className="MiPC-logo"
              alt="logo"
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link key={i}
                style={{ color: "white", textDecoration: "none" }}
                to={page.url}
              >
                <Button
                  key={page.name}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <CartWidget></CartWidget>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
