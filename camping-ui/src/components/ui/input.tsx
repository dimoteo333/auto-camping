import * as React from 'react';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-blue-500" {...props} />
  );
}