import { AppBar, Toolbar, Link, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" underline="hover">
            connections
          </Link>
        </Typography>
        <Link href="/about" underline="hover">
          {"about"}
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
