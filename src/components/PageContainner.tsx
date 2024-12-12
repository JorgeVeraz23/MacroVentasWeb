import React, { useState } from "react";
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./Footer";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <Header setSidebar={setSidebarOpen} />
      <SidebarMenu open={sidebarOpen} setSidebar={setSidebarOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PageContainer;
