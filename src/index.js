import * as $ from "jquery";
import Post from "@models/Post";
import json from "./assets/json";
import webpackLogo from "./assets/webpack-logo.png";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import "./styles/styles.css";

const post = new Post("Webpack Post title", webpackLogo);

$("pre").html(post.toString());

console.log("Post to String", post.toString());

console.log("XML: ", xml);
console.log("JSON: ", json);
console.log("CSV: ", csv);
