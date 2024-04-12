import React from "react";
import { createRoot } from "react-dom/client";
/**
 * createElement takes 3 arguments
 * tagname, attributes object, children - contains value of tag or children
 * heading will be a JS object and not a h1 tag; it will contain "props" field - combination of attributes and children
 */
const heading = React.createElement("h1", {id: "heading", test: "random-string"}, "Hello world from React JS world!!");
const root = createRoot(document.getElementById("root"));

/**
 * Let's create nested div using react
 * <div class="parent">
 *  <div class="child">
 *      <h1>Hello World in nested div!</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},
    [
        React.createElement("h1", {key: "key-h1"}, "Hello world in nested div!"),
        React.createElement("h2", {key: "key-h2"}, "Hello world in nested div!")
    ]
    ));

// render method is responsible for creating h1 tag out of the heading object
root.render(parent);