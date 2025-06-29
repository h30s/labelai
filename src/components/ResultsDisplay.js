import React from 'react';

const ResultsDisplay = ({ results, mode }) => {
  if (!results) return null;

  const getHealthScoreColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getEatabilityBadge = (eatability) => {
    switch (eatability) {
      case 'Safe for Daily':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Safe for Daily</span>;
      case 'Occasionally OK':
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Occasionally OK</span>;
      case 'Avoid':
        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Avoid</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
        {mode !== 'general' && (
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
            {mode === 'allergen' ? 'Allergen Detective' : 'Diabetes-Safe Scanner'}
          </div>
        )}
      </div>

      {/* Health Score Meter */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Health Score</span>
          <span className="text-sm font-medium text-gray-700">{results.health_score}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className={`${getHealthScoreColor(results.health_score)} h-4 rounded-full`} 
            style={{ width: `${results.health_score}%` }}
          ></div>
        </div>
        <div className="mt-2 flex justify-center">
          {getEatabilityBadge(results.eatability)}
        </div>
      </div>

      {/* Ingredient Breakdown */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredient Breakdown</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Sweeteners</p>
            <p className="text-xl font-bold text-blue-700">{results.breakdown.sweeteners}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Preservatives</p>
            <p className="text-xl font-bold text-purple-700">{results.breakdown.preservatives}</p>
          </div>
        </div>
      </div>

      {/* Flagged Ingredients */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Flagged Ingredients</h3>
        <div className="flex flex-wrap gap-2">
          {results.breakdown.flagged.map((item, index) => (
            <span 
              key={index} 
              className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mode-specific sections */}
      {mode === 'allergen' && results.allergens && (
        <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Allergen Information</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {results.allergens.map((allergen, index) => (
              <span 
                key={index} 
                className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {allergen}
              </span>
            ))}
          </div>
          {results.cross_contamination && (
            <div className="text-sm text-yellow-700 bg-yellow-100 p-2 rounded">
              ⚠️ May contain traces of other allergens (cross-contamination risk)
            </div>
          )}
        </div>
      )}

      {mode === 'diabetes' && results.sugar_content && (
        <div className="mb-6 bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">Diabetes Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Sugar Content</p>
              <p className={`text-xl font-bold ${results.sugar_content === 'High' ? 'text-red-600' : 'text-orange-600'}`}>
                {results.sugar_content}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Glycemic Risk</p>
              <p className={`text-xl font-bold ${results.glycemic_risk === 'High' ? 'text-red-600' : 'text-orange-600'}`}>
                {results.glycemic_risk}
              </p>
            </div>
          </div>
          {results.reason && (
            <p className="mt-2 text-sm text-orange-700">{results.reason}</p>
          )}
        </div>
      )}

      {/* Confidence Analysis */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Detailed Risk Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.confidence_analysis.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.ingredient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.confidence}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.risk_level}/10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactions */}
      {results.interactions && results.interactions.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredient Interactions</h3>
          <div className="bg-red-50 p-4 rounded-lg">
            {results.interactions.map((interaction, index) => (
              <div key={index} className="mb-2 last:mb-0">
                <p className="text-sm">
                  <span className="font-medium text-red-700">{interaction.combo}</span>
                  <span className="mx-2">→</span>
                  <span className="text-red-600">Increases {interaction.concern} risk by {interaction.risk_increase}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay; 