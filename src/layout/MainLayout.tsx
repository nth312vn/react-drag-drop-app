import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../components/Header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      {children}
    </Container>
  );
}
