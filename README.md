# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

============================================== Details Regarding Push ++++++++++++++++++++++++++++++++++++++++++++++++++++

PS E:\React Projects\react_practice> git commit -m "my commit"
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        package-lock.json
        public/
        src/

nothing added to commit but untracked files present (use "git add" to track)PS 
E:\React Projects\react_practice>    git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

PS E:\React Projects\react_practice>  git push --set-upstream origin master    
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/Admiralsourav/react_practice.git'
PS E:\React Projects\react_practice> git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/Admiralsourav/react_pracPS E:\React Projects\react_practice> git init
PS E:\React Projects\react_practice> git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/manifest.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/robots.txt.
The file will have its original line endings in your working directory
PS E:\React Projects\react_practice> git commit -m "First Commit"
[master (root-commit) 8ddbb36] First Commit
 14 files changed, 28449 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/favicon.ico
 create mode 100644 public/index.html
 create mode 100644 public/logo192.png
 create mode 100644 public/logo512.png
 create mode 100644 public/manifest.json
 create mode 100644 public/robots.txt
 create mode 100644 src/App.js
 create mode 100644 src/Counter.js
 create mode 100644 src/Login.jsx
 create mode 100644 src/index.js
PS E:\React Projects\react_practice> git remote add origin https://github.com/Admiralsourav/react_practice.git
error: remote origin already exists.
PS E:\React Projects\react_practice> git push -u origin master
info: please complete authentication in your browser...
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 4 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (18/18), 286.71 KiB | 4.28 MiB/s, done.
Total 18 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Admiralsourav/react_practice.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.
