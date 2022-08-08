const URL_PREFIX =
  "https://api.github.com/repos/RidhwanDev/Swarm/commits?path=docs";

export const fetchAuthors = async (pathname: string) => {
  const url = `${URL_PREFIX}${pathname.replace("/Swarm", "")}.md`.replace(
    "/.md",
    ".md"
  );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  const authorsObject = {};
  for (let i = 0; i < data.length; i++) {
    const commit = data[i];
    if (commit.author && !authorsObject[commit.author.login]) {
      authorsObject[commit.author.login] = commit.author.avatar_url;
    }
  }

  return authorsObject;
};
