import React from 'react';

// LoadingSpinner Component
export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="inline-block w-24 h-24 border-[1px] border-solid border-slate-900 rounded-full border-t-white animate-spin ease-in-out"
        aria-label="Loading"
      />
    </div>
  );
}
