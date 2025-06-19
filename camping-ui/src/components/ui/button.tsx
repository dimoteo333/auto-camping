import * as React from 'react';

export function Button({ children, variant = 'default', ...props }: any) {
  const base = 'inline-flex items-center px-4 py-2 border rounded-md shadow-sm font-medium';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-gray-300 text-gray-700 hover:bg-gray-50',
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}