# parcel

- provides dev build
- creates local server and hosted app on it
- automatically refreshes page - HMR - "Hot Module Management"
- it uses "File Watching Algorithm" written in C++ to keep a track of every save we do in our project
- Reduces build time due to caching
- it also do Image Optimization
- Bundling
- Minification
- Optimization
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers;
    if <script type="module"></script>, it will generate a nomudule fallback for older browsers
- Provides diagnostics; Error handling
- HTTPS - can run our app locally on https
- Tree shaking - remove unused code
- Provide different dev and prod build

Command for local build

```npx parcel index.html```

Command for prod build

```npx parcel build index.html```


# 2 types of routing in web apps

- Client side routing
- Server side routing

# Redux Toolkit
- Install @reduxjs/toolkit, react-redux
- Build our store
- Connect store to app
- Create slice (for eg: cart slice)
- Dispatch action
- Selector

# Types of Testing
 - Unit Testing
 - Integration Testing
 - End to End Tesing (using cypress, selenium, puppeter)

# Setting up Testing

- Install React Testing Library
- Install Jest
- Install babel
- Config babel
- Config parcel config file to disable default babel transpilation (.parcelrc)
- Jest configuration (npx jest --init)
- Install jsdom library