To start the development server, run the command <b>npm start</b> in the project directory, which will launch the app in your browser at http://localhost:3000. The page will reload automatically whenever you make changes to the code. You may also see any errors in the console.

To run tests, use the command <b>npm test</b>, which launches the test runner in interactive watch mode.

To build the app for production, use the command <b>npm run build</b>, which will create a production-ready optimized build in the build folder. This build is minified and optimized for performance, with unique filenames that include hashes. You can deploy this build to a server to make the app publicly available.

For more information, refer to the Create React App documentation and the React documentation. There are also sections on code splitting, analyzing bundle size, and making a progressive web app. If you encounter any issues, refer to the troubleshooting section in the Create React App documentation.

Please <b>note</b> that in order to use the API for this project, you will need to add a .env file to the root directory of the project, and include your API key in that file. You can obtain an API key by following the instructions provided by the API provider.

In the .env file, create a variable named REACT_APP_API_KEY and set its value to your API key, like this:

REACT_APP_API_KEY=your_api_key_here

This variable can be accessed in your React code as process.env.REACT_APP_API_KEY. Make sure to keep your API key secret and not to share it in your code or version control system.
