import axios from "axios";
/*
    TODO: IMPORT TOKEN HERE
*/

export default async (username) => {
  let userData = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: token,
    },
  });

  userData = userData.data;

  let page = 1;
  let repos = [];
  let repoCount = userData.public_repos;

  while (repoCount > 0) {
  let repoData = await axios.get(
    `http://api.github.com/users/${username}/repos?page=${page}&per_page=100`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  repos = [...repos, ...repoData.data];
  page++;
  repoCount -= 100;
  }

  // structure an object with key value function calling
  const userProfile = {
    username: userData.login,
    name: userData.name,
    location: userData.location,
    bio: userData.bio,
    "avatar-url": userData.avatar_url,
    titles: getUserTitles(userData, repos),
    "favorite-language": await favoriteLanguage(repos),
    "public-repos": userData.public_repos,
    "total-stars": repos.reduce(
      (acc, curr) => acc + curr.stargazers_count,
      0
    ),
    "highest-starred": repos.reduce(
      (highest, repo) =>
        highest > repo["stargazers_count"] ? highest : repo["stargazers_count"],
      0
    ),
    "perfect-repos": repos.filter((repo) => !repo.has_issues).length,
    followers: userData.followers,
    following: userData.following,
  };
  return userProfile;
};

const getUserTitles = (userObject, repoObject) => {
  let titles = [];

  //Forker
  repoObject.filter((repo) => repo.fork).length > repoObject.length / 2
    ? titles.push("Forker")
    : "";

  let languagesUsed = [];
  repoObject.forEach((repo) => {
    if (!languagesUsed.includes(repo.language)) {
      languagesUsed.push(repo.language);
    }
  });

  //Jack of All Trades
  languagesUsed.length > 10 ? titles.push("Jack of All Trades") : "";

  //One-Trick Pony
  languagesUsed.length === 1 ? titles.push("One Trick Pony") : "";

  //Stalker
  userObject.following >= userObject.followers * 2
    ? titles.push("Stalker")
    : "";

  //Mr. Popular
  userObject.followers >= userObject.following * 2
    ? titles.push("Mr. Popular")
    : "";

  return titles;
};

const favoriteLanguage = async (repoObject) => {
  const languages = repoObject.map((currentValue) => currentValue.language);
  return findMode(languages);
};

const findMode = (languagesArray) => {
  if (languagesArray.length == 0) return null;
  let modeMap = {};
  let maxEl = languagesArray[0],
    maxCount = 1;
  for (let i = 0; i < languagesArray.length; i++) {
    let el = languagesArray[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};
