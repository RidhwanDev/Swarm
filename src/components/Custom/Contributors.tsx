import {
  Avatar,
  AvatarGroup,
  AvatarGroupProps,
  styled,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { theme } from "../../theme";

const StyledAvatarGroup = styled(AvatarGroup)<AvatarGroupProps>(
  ({ theme }) => ({
    justifyContent: "start",
    marginBottom: theme.spacing(2),
  })
);

interface Props {
  pathname: any;
}

export const Contributors: React.FC<Props> = ({ pathname }) => {
  const [authors, setAuthors] = useState({});
  const url = `https://api.github.com/repos/RidhwanDev/Swarm/commits?path=docs${pathname.replace(
    "/Swarm",
    ""
  )}.md`;

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    const authorsObject = {};
    for (let i = 0; i < data.length; i++) {
      const commit = data[i];
      if (commit.author && !authorsObject[commit.author.login]) {
        authorsObject[commit.author.login] = commit.author.avatar_url;
      }
    }

    setAuthors(authorsObject);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (!Object.keys(authors).length) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <h6 style={{ marginBottom: 5 }}>Contributors</h6>
      <StyledAvatarGroup max={10} total={Object.keys(authors).length}>
        {Object.keys(authors).map((author) => (
          <Tooltip title={author}>
            <Avatar
              sizes="large"
              alt={author}
              src={authors[author]}
              key={author}
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
