# React-Template
---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Test script will be run before the app is launched.<br>
Automatically opens [http://localhost:8080](http://localhost:8080) in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs the Jest test runner with coverage enabled.<br>

### `npm test-watch`

Runs the Jest test runner in the interactive watch mode.<br>

### `npm build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, uglified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm bundle-report`

Creates the stats.json file (./dist/stats.json).<br>
Runs the webpack bundle analyzer.

---

## JSDoc 
This is how you can use JSDoc to document a React Component. We will be using prop-types to help us type check props. 

To generate the jsdoc page, just run `./node_modules/.bin/jsdoc File/Location`
```js
/**
 * Example Component
 * 
 * @namespace ComponentName
 * @memberof app.components
 */

const ComponentName = () => {

    /**
     * @memberof app.components.ComponentName
     * @param {string} - the value being logged
    */
    const doSomething = (param) => console.log(param);

    return (
        <div>This is a component Render</div>
    )
}
```