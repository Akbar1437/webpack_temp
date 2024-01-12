import Post from "./Post";
import json from "./assets/json.json";
import webpackLogo from "./assets/webpack-logo.png";
import "./styles/styles.css";

const post = new Post("Webpack Post title", webpackLogo);

console.log("Post to String", post.toString());

console.log("JSON: ", json);
