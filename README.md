# Label AI

A fast, front-end-only AI-powered web application that analyzes food labels and provides health insights.

## Features

- 📸 Upload or capture a photo of a food label
- 🔍 Extract text using OCR (Tesseract.js)
- 🧠 AI-powered analysis of ingredients
- 📊 Health score and eatability meter
- 🚨 Ingredient breakdown and risk analysis
- 🥜 Allergen detection mode
- 🍬 Diabetes-safe scanner mode

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   > **Note:** If you don't have an API key, the app will fall back to using mock data.
   > You can get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

4. Start the development server:
   ```
   npm start
   ```

## How It Works

1. **Image Upload/Capture**: Users can upload an image file or use their device camera to capture a food label
2. **OCR Processing**: Tesseract.js extracts text from the image
3. **Text Editing**: Users can review and edit the extracted text if needed
4. **AI Analysis**: The text is sent to Google's Gemini API for analysis (or mock data is used if no API key is provided)
5. **Results Display**: The app shows health scores, ingredient breakdowns, and risk analysis

## Analysis Modes

- **General**: Standard food safety analysis
- **Allergen Detective**: Detects common allergens and cross-contamination risks
- **Diabetes-Safe Scanner**: Analyzes sugar content and glycemic impact

## Technologies Used

- ReactJS with Hooks
- TailwindCSS for styling
- Tesseract.js for OCR
- Google Gemini API for ingredient analysis

## License

MIT

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
