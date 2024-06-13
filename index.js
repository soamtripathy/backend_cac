require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const gitData = {
  login: "soamtripathy",
  id: 47471536,
  node_id: "MDQ6VXNlcjQ3NDcxNTM2",
  avatar_url: "https://avatars.githubusercontent.com/u/47471536?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/soamtripathy",
  html_url: "https://github.com/soamtripathy",
  followers_url: "https://api.github.com/users/soamtripathy/followers",
  following_url:
    "https://api.github.com/users/soamtripathy/following{/other_user}",
  gists_url: "https://api.github.com/users/soamtripathy/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/soamtripathy/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/soamtripathy/subscriptions",
  organizations_url: "https://api.github.com/users/soamtripathy/orgs",
  repos_url: "https://api.github.com/users/soamtripathy/repos",
  events_url: "https://api.github.com/users/soamtripathy/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/soamtripathy/received_events",
  type: "User",
  site_admin: false,
  name: "Soumya Ranjan Tripathy",
  company: null,
  blog: "https://portfolio-soamtripathy.vercel.app/",
  location: "Bhawanipatna",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "soamtripathy",
  public_repos: 51,
  public_gists: 0,
  followers: 8,
  following: 11,
  created_at: "2019-02-09T07:42:23Z",
  updated_at: "2024-05-24T11:38:59Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});
app.get("/twitter", (req, res) => {
  res.send("@soamtripathy");
});
app.get("/github", (req, res) => {
    res.json(gitData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
