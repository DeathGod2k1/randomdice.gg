This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### ~~`yarn test`~~

#### removed test because I live on the dark side.

~~Launches the test runner in the interactive watch mode.<br />~~
~~See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.~~

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### ~~`yarn eject`~~

#### Create React App is already ejected

~~**Note: this is a one-way operation. Once you `eject`, you can’t go back!**~~

~~If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.~~

~~Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.~~

~~You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.~~

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Environment Variables Used

Create a .env file and include the following variables otherwise the web app will not work.

<table>
    <tbody>
        <tr>
            <td>REACT_APP_GAPI_KEY</td>
            <td>api key of Google</td>
        </tr>
        <tr>
            <td>REACT_APP_FIREBASE_API_KEY</td>
            <td>api key for Firebase</td>
        </tr>
        <tr>
            <td>REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID</td>
            <td>Tracking ID for Google Analytics</td>
        </tr>
        <tr>
            <td>REACT_APP_DISCORD_CLIENT_ID</td>
            <td>Discord OAUTH2 App id</td>
        </tr>
        <tr>
            <td>REACT_APP_PATREON_CLIENT_ID</td>
            <td>Patreon OAUTH2 App id</td>
        </tr>
    </tbody>
</table>
