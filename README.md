# Mountain App - Client
## Infromation about the project

https://sopra-fs21-group-07-client.herokuapp.com/login

## Current project status
(Heroku batch not available)
<p align="left">
  <a href="https://github.com/sopra-fs21-group-07/client/actions">
    <img src="https://github.com/sopra-fs21-group-07/client/workflows/Deploy%20Project/badge.svg">
  </a>
  <br></br>
  <a href="https://sonarcloud.io/dashboard?id=sopra-fs21-group-07_client">
      <img src="https://sonarcloud.io/api/project_badges/measure?project=sopra-fs21-group-07_client&metric=coverage">
  </a>
  <br></br>
  <a href="https://sonarcloud.io/dashboard?id=sopra-fs21-group-07_client">
        <img src="https://sonarcloud.io/api/project_badges/measure?project=sopra-fs21-group-07_client&metric=alert_status">
    </a>
</p>

## Introduction: 
The projects aim is to bring people on mountains together. There are always people who want to go on a mountain tour but just cant find people who want to join them. That why we created our mountain app.

## Technologies
Cloudinary,
Spring,
SonarQube,
React,
npm,
JSX,
Java,
Java Persistence,
heroku,
gradle,
GitHub Projects,
GitHub Actions,
Map Geo Admin

## High-level components
- Main App [App](https://github.com/sopra-fs21-group-07/client/blob/main/src/App.js)
- Homepage [Home](https://github.com/sopra-fs21-group-07/client/tree/main/src/components/home)
- Picture Upload [Upload Pictures with Cloudinary](https://github.com/sopra-fs21-group-07/client/blob/main/src/components/Tour/UploadPictures.js)
- Dashboard [Dashboard](https://github.com/sopra-fs21-group-07/client/tree/main/src/components/dashboard)

## Launch & Deployment

Read and go through those Tutorials, It will make your life easier!

- Read the React [Docs](https://reactjs.org/docs/getting-started.html)
- Do this React [Getting Started](https://reactjs.org/tutorial/tutorial.html) Tutorial (it doesn’t assume any existing React knowledge)
- Get an Understanding of [CSS](http://localhost:3000) and [HTML](https://www.w3schools.com/html/html_intro.asp)!
- Get an Understanding of [Cloudinary](https://cloudinary.com/)

Once you have done all of this, in the template there are two main external dependencies that you should look at:

- [styled-components](https://www.styled-components.com/docs)
  It removes the mapping between components and styles (i.e. external css files). This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) Declarative routing for React being a collection of navigational components that compose declaratively with your application. 
* [react-hooks](https://reactrouter.com/web/api/Hooks) Let's you access the state of the router and perform navigation from inside your components.



## Prerequisites and Installation

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console (use Google Chrome!).

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> For macOS user running into an 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Server
Run the server to use our appliaction




