import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../components/Header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      {children}
    </Container>
  );
}
