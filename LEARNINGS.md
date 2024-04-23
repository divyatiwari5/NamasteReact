# Episode 1

- Emmet - VSCode uses Emmet. It helps us quickly generate repetitive structures like list, html, etc. 
 For eg: html:5 -> This command will generate basic html template

- Library vs Framework

Library is a package which we can install in our application and start using it.

Framework is like a complete structure of a app. We can't have two framework in a single project however, we
can install library in a framework.

A framework inverts the control of the program. It tells the developer what they need.
A library doesn’t. The programmer calls the library where and when they need it.

- CDN

    - Stands for Content Delivery Network. It is a geographically distributed group of servers that caches content
close to end users. It allows quick transfer of assets needed for loading internet content, images, video, html pages, JS,
and stylesheets.

    - Improve website performance and loading time 
    - CDNs can reduce the amount of data that’s transferred by reducing file sizes using tactics such as minification and file compression
    - Reduce bandwidth costs
    - Increasing content availability and redundancy
    - Improving website security by providing DDoS mitigation


- Why is React known as React?

It "reacts" quickly to changes without reloading the whole page.
It uses the virtual DOM to efficiently update parts of a webpage.
It’s built around components that "react" and update.

- What is crossorigin in script tag?

```
<script crossorigin src="https://xyz.com">
```

It is used to handle the CORS(cross-origin resource sharing) request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

Possible values:
    - anonymous -  It has a default value. It defines a CORS request which will be sent without passing the credential information.
    - use-credentials - A cross-origin request will be sent with credentials, cookies, and certificate.
    - ""

CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information.

- React vs ReactDOM

React provides the tools and concepts for building better user interfaces.

ReactDOM handles the task of rendering those interfaces in a web environment. It glues React to the browser DOM.

- Difference b/w react.development.js and react.production.js files via CDN?

react.development.js:
    - is used during development phase
    - It includes additional debugging tools, warnings, and helpful error messages.
    - It is larger in file size and may negatively impact the performance of your application.
    - It is not optimised for production use.

react.production.js:
    - used on production
    - Optimized, minified, smaller in size
    - does not provide debuuging tools, error handling

- async and defer attribute in script tag

async attribute allows fetching of the script along with HTML parsing in parallel and puts the HTML parsing on pause state when execution of the scripts happen. Once that is complete, it resumes HTML parsing.
async does not execute scripts in the same order in which they are defined.

defer attribute also allow fetching of the script along with HTML parsing in parallel but here it executes the scripts once 
HTML parsing is complete.
defer exceute scripts in the same order in which they are defined.

# Episode 2

- NPM
    It's a node package manager but it does not stand for Node Package Manager :D

- Parcel/Webpack
    - TLDR; Parcel is a BEAST!!!
    - Optimizes, minify, build, deploy
    - host local app on https
    - Tree shaking
    - Reduces build time due to caching
    - Image optimization
    - Differential building - to support old browsers
    - Provides diagnostics; Error handling
    - automatically refreshes page - HMR - "Hot Module Management"
    - it uses "File Watching Algorithm" written in C++ to keep a track of every save we do in our project