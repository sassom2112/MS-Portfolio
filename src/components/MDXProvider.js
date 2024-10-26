// src/components/MDXProvider.js
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

// Define custom components you want to use in MDX files (if any)
const components = {
  h1: (props) => <h1 style={{ color: '#1a73e8' }} {...props} />,
  // You can define more custom components like <h2>, <p>, etc.
};

const CustomMDXProvider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default CustomMDXProvider;
