import * as $ from "jquery";
import Post from "@models/Post";
import json from "./assets/json";
import "./babel";
import webpackLogo from "./assets/webpack-logo.png";
import React from "react";
import { createRoot } from "react-dom/client";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";

const post = new Post("Webpack Post title", webpackLogo);

// $("pre").html(post.toString());

console.log("Post to String", post.toString());
console.log("XML: ", xml);
console.log("JSON: ", json);
console.log("CSV: ", csv);

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre></pre>
    <hr />

    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
