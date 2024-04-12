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
- Provides diagnostics; Errorr handling
- HTTPS - can run our app locally on https
- Tree shaking - remove unused code
- Provide different dev and prod build

Command for local build

```npx parcel index.html```

Command for prod build

```npx parcel build index.html```
