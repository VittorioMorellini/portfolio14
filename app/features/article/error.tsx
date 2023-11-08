'use client'; // Error components must be Client Components
import { useEffect } from 'react';

export default function Error({error,reset }: {error: Error; reset: () => void;}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className='text-center w-full'>
      <h2>Something went wrong with aritcles in Blog!</h2>
      <button onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}