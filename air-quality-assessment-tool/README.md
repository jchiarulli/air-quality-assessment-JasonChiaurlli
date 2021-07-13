# Assessment

## Starting the Assessment

- To start the assessment navigate to the air-quality-assessment-tool directory and enter the following command: npm run start
- Go to http://localhost:3000 to view the app in the browser

## How to Use the Assessment

- The assessment makes a request to the cities endpoint to first get the total number of cities by storing the value of the found key from the returned meta object.
- The value of the found key is then used for the limit value in a request to the cities endpoint which allows all of the cities to be available in the dropdowns.
- To compare two cities you need to chose one in each dropdown.
- The chosen city name is then used for the city value in a request to the locations endpoint which allows for the last 100 updated air quality test data for the chosen city to be displayed on the corresponding card below the dropdown.
- The displayed data on the card includes the following data for each test:
  - name
  - entity
  - country
  - sources
    - name
  - isMobile
  - isAnalysis
  - parameters
    - name
    - unit
    - average
    - count
    - last value
    - last updated
    - first updated
  - sensorType
  - coordinates
    - latitude
    - longitude
  - measurements
  - lastUpdated
  - firstUpdated

## Assumptions

- The locations endpoint contains all of the data a user may care about in terms of air quality for a particular city
- Not all of the city values returned by the cities endpoint were correct
  - To fix this all of the city names were set to be lower case except for the first letter, the first letter after each space, & the first letter after any special character, e.g., -, /, etc.
  - After getting each city in the desired format duplicate cities are then checked for and the duplicates are removed
  - A regex pattern is then used to allow letters from any alphabet but not numbers
- After the city name data cleaning each value is then assumed to be a valid city & not some random word or string of characters
- The meta tag found value provides us with the correct number of cities
- The id's for each test, source, & parameter returned by the locations endpoint are unique
- All of the data returned from the locations endpoint is correct (I don't know that much air quality tests so I don't know how to tell if the returned data is valid or not)

## Improvements

- To check for proper city names a separate API could be used to check if the city name exists in their database & if it doesn't it could be flagged for review then the developer could determine if the name & data is correct before removing it in case there was a spelling mistake when inputting the data into the API
- Could also use a separate API to validate other values, e.g., latitude & longitude
- Implement validation tests for each piece of data & handle any incorrect data gracefully
- Incorporate other endpoints from the API for more data
- Display the data differently by allowing the user to input more filters instead of just two dropdowns for the city names

## Thanks

- Thank you for the opportunity to complete the assessment.
- I learned a lot & had a good time solving the various problems I encountered during development.
- I'm looking forward to the next step in the process.

# React Details

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
