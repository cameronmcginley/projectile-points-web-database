import { Box } from "@mui/material";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <>
      {/* Main title */}
      <Box
        sx={{
          width: "100%",
          height: "5vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // boxShadow: 2,
          zIndex: 1,
          position: "relative",
        }}
      >
        {/* Title */}
        <p className="text-title">Projectile Points Revamped</p>
      </Box>

      {/* Links */}
      <Box
        className="navbar-border"
        sx={{
          width: "100%",
          height: "5vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavbarLink text="Search" link="/points" />
        <NavbarLink text="Upload" link="/points/upload" />
        <NavbarLink text="Home" link="/" />
      </Box>

      {/* <Box className="bottom-shadow" sx={{ width: "100%", height: ".8vh", backgroundColor: theme.palette.primary.main }} /> */}
    </>
  );
};
export default Navbar;
