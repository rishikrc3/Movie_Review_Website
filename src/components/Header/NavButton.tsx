import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const NavButton = styled(Button)({
  color: "white",
  fontWeight: 600,
  fontSize: "1.125rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}) as typeof Button;
