import {
  Avatar,
  AvatarGroup,
  AvatarGroupProps,
  Skeleton,
  styled,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import { fetchAuthors } from "../../api/github/authors";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { theme } from "../../theme";

const StyledAvatarGroup = styled(AvatarGroup)<AvatarGroupProps>(
  ({ theme }) => ({
    justifyContent: "start",
    marginBottom: theme.spacing(2),
  })
);

const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  marginRight: -10,
}));
interface Props {
  pathname: any;
}

export const Contributors: React.FC<Props> = ({ pathname }) => {
  const { isLoading, isError, data } = useQuery(
    ["authors", pathname],
    async () => await fetchAuthors(pathname),
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <>
        <Skeleton variant="rectangular" height={16} width={50} />

        <StyledAvatarGroup max={5} total={5}>
          <StyledSkeleton variant="circular" width={40} height={40} />
          <StyledSkeleton variant="circular" width={40} height={40} />
          <StyledSkeleton variant="circular" width={40} height={40} />
          <StyledSkeleton variant="circular" width={40} height={40} />
          <StyledSkeleton variant="circular" width={40} height={40} />
        </StyledAvatarGroup>
      </>
    );
  }

  if (isError || !Object.keys(data).length) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <h6 style={{ marginBottom: 5 }}>Contributors</h6>

      <StyledAvatarGroup max={10} total={Object.keys(data).length}>
        {Object.keys(data).map((author) => (
          <Tooltip title={author} key={author}>
            <Avatar
              sizes="40px"
              alt={author}
              src={data[author].replace("?", "?s=40&")}
              onClick={() => {
                const win = window.open(
                  `https://github.com/${author}`,
                  "_blank"
                );
                if (win != null) {
                  win.focus();
                }
              }}
            />
          </Tooltip>
        ))}
      </StyledAvatarGroup>
    </ThemeProvider>
  );
};
