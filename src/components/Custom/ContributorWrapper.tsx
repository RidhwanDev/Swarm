import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { theme } from "../../theme";
import { Contributors } from "./Contributors";

interface Props {
  pathname: any;
}

const queryClient = new QueryClient();

export const ContributorWrapper: React.FC<Props> = ({ pathname }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Contributors pathname={pathname} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
