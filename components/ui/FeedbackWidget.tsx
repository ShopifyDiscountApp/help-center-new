'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    // In production, you would send this to an analytics service
    console.log(`User feedback: ${type}`);
  };

  if (feedback) {
    return (
      <div className="my-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-center text-green-900 font-medium">
          Thanks for your feedback!
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <p className="text-center text-gray-900 font-medium mb-4">
        Was this article helpful?
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleFeedback('helpful')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors"
        >
          <ThumbsUp className="w-5 h-5 text-green-600" />
          <span className="text-gray-900">Yes</span>
        </button>
        <button
          onClick={() => handleFeedback('not-helpful')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
        >
          <ThumbsDown className="w-5 h-5 text-red-600" />
          <span className="text-gray-900">No</span>
        </button>
      </div>
    </div>
  );
}
