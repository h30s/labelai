# Label AI - Food Label Analysis App 🏷️

## What is Label AI? 
Label AI is a web application that helps you analyze food labels using artificial intelligence. You can take a picture of a food label or upload one, and the app will tell you how healthy the food is, what allergens it contains, and if it's safe for people with specific dietary needs like diabetes.

## How Does It Work? 
1. Upload or take a photo of a food label
2. The app reads the text from the image
3. AI analyzes the ingredients
4. You get detailed health insights!

## Project Structure Explained 📁

### Main Files in `src` folder:

#### 1. `App.js` - The Heart of the Application
This is the main file that controls everything. Think of it as the conductor of an orchestra! It:
- Manages what screen you see (upload, analysis, results)
- Keeps track of your image and text
- Passes information between different parts of the app

#### 2. Components (in `src/components`):

##### `ImageUpload.js` 📸
- Lets you upload a food label image
- Has two options:
  - Upload from your device
  - Take a picture with your camera
- Uses the webcam feature for taking photos
- Makes sure the image is properly formatted

##### `OcrProcessor.js` 👀
- OCR = Optical Character Recognition
- Reads the text from your food label image
- Converts the image into actual text that can be analyzed

##### `TextEditor.js` ✏️
- Lets you edit the text if the OCR made any mistakes
- Makes sure the text is clean and ready for analysis

##### `AIAnalyzer.js` 🤖
- The smart part of the app!
- Sends the ingredients to an AI (Google's Gemini)
- Analyzes ingredients for:
  - Health score (0-100)
  - Harmful additives
  - Preservatives
  - Artificial sweeteners
  - Dangerous combinations

##### `ModeSelector.js` 🔄
- Lets you choose what kind of analysis you want:
  - General health analysis
  - Allergen check
  - Diabetes-friendly check

##### `ResultsDisplay.js` 📊
- Shows you the analysis results in a nice, easy-to-read format
- Displays health scores, warnings, and recommendations

## How the Files Work Together 🔄

1. `App.js` starts everything
2. `ImageUpload.js` gets your food label image
3. `OcrProcessor.js` reads the text
4. `TextEditor.js` lets you fix any mistakes
5. `AIAnalyzer.js` analyzes the ingredients
6. `ResultsDisplay.js` shows you the results

## Technical Details for Beginners 🔧

- Built with React (a popular web framework)
- Uses Tailwind CSS for styling (makes it look pretty)
- Integrates with Google's Gemini AI for analysis
- Uses webcam features for photo capture
- Has error handling to make sure everything works smoothly

## Important Notes 📝

1. You need a Gemini API key to use the AI features
2. The app works best with clear, well-lit images
3. You can always edit the text if the image reading isn't perfect
4. The analysis includes:
   - Health scores
   - Allergen warnings
   - Diabetes considerations
   - Ingredient risks
   - Preservative levels

## Getting Started 🚀

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with your Gemini API key
4. Run the app with `npm start`

## Need Help? 🤔

If you're new to development, here are some key terms:
- **Component**: A reusable piece of the app (like Lego blocks)
- **State**: Information the app remembers (like the uploaded image)
- **Props**: Information passed between components
- **API**: How the app talks to the AI service
- **OCR**: The technology that reads text from images

Remember: The app is built in small, manageable pieces that work together to create the full experience!
