import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const OcrProcessor = ({ imageData, onTextExtracted, onError }) => {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const processImage = async () => {
    if (!imageData) return;
    
    try {
      setIsProcessing(true);
      setProgress(0);
      
      const result = await Tesseract.recognize(
        imageData,
        'eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              setProgress(parseInt(m.progress * 100));
            }
          }
        }
      );
      
      const extractedText = result.data.text;
      onTextExtracted(extractedText);
      setIsProcessing(false);
    } catch (error) {
      console.error('OCR Error:', error);
      onError('Failed to extract text from image. Please try again with a clearer image.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      {isProcessing ? (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-gray-600">
            Processing image... {progress}%
          </p>
        </div>
      ) : (
        <button
          onClick={processImage}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Extract Ingredients Text
        </button>
      )}
    </div>
  );
};

export default OcrProcessor; 