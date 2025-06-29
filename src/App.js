import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import OcrProcessor from './components/OcrProcessor';
import TextEditor from './components/TextEditor';
import AIAnalyzer from './components/AIAnalyzer';
import ResultsDisplay from './components/ResultsDisplay';
import ModeSelector from './components/ModeSelector';

function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [editedText, setEditedText] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [analysisMode, setAnalysisMode] = useState('general');
  const [error, setError] = useState('');
  const [step, setStep] = useState('upload'); // upload, extract, analyze, results

  const handleImageCaptured = (imageData) => {
    setCapturedImage(imageData);
    setExtractedText('');
    setEditedText('');
    setAnalysisResults(null);
    setError('');
    setStep('extract');
  };

  const handleTextExtracted = (text) => {
    if (!text || text.trim() === '') {
      setError('No text was extracted from the image. Please try with a clearer image of a food label.');
      return;
    }
    
    setExtractedText(text);
    setEditedText(text);
    setStep('analyze');
    setError(''); // Clear any previous errors
  };

  const handleTextEdited = (text) => {
    setEditedText(text);
  };

  const handleAnalysisComplete = (results) => {
    if (!results || Object.keys(results).length === 0) {
      setError('The analysis did not return valid results. Please try again.');
      return;
    }
    
    setAnalysisResults(results);
    setStep('results');
    setError(''); // Clear any previous errors
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    // Don't change the step when an error occurs
  };

  const handleModeChange = (mode) => {
    setAnalysisMode(mode);
    // If we already have results, clear them when changing modes
    if (analysisResults) {
      setAnalysisResults(null);
      setStep('analyze');
    }
  };

  const handleReset = () => {
    setCapturedImage(null);
    setExtractedText('');
    setEditedText('');
    setAnalysisResults(null);
    setError('');
    setStep('upload');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src="/logo192.png" alt="Label AI Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Label AI</h1>
          <p className="mt-2 text-lg text-gray-600">Analyze food labels for health insights</p>
        </header>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error}</p>
            {step !== 'upload' && (
              <button 
                onClick={handleReset}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Start Over
              </button>
            )}
          </div>
        )}

        <ModeSelector currentMode={analysisMode} onModeChange={handleModeChange} />

        {step === 'upload' && (
          <ImageUpload onImageCaptured={handleImageCaptured} />
        )}

        {step === 'extract' && capturedImage && (
          <div>
            <div className="mb-4 flex justify-center">
              <img 
                src={capturedImage} 
                alt="Captured food label" 
                className="max-h-64 rounded-lg shadow-lg" 
              />
            </div>
            <OcrProcessor 
              imageData={capturedImage} 
              onTextExtracted={handleTextExtracted} 
              onError={handleError}
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {step === 'analyze' && extractedText && (
          <div>
            <TextEditor 
              initialText={extractedText} 
              onTextUpdate={handleTextEdited} 
            />
            <AIAnalyzer 
              ingredientText={editedText} 
              mode={analysisMode}
              onAnalysisComplete={handleAnalysisComplete} 
              onError={handleError}
            />
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {step === 'results' && analysisResults && (
          <div>
            <ResultsDisplay results={analysisResults} mode={analysisMode} />
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Analyze Another Label
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 
