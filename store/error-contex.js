import { useState } from 'react';
import React from 'react';

export const ErrorContext = React.createContext({
  showError: false,
  setShowError() {},
});

export default function ErrorContextProvider(props) {
  const [isError, setIsError] = useState(false);
  return (
    <ErrorContext.Provider
      value={{ showError: isError, setShowError: setIsError }}>
      {props.children}
    </ErrorContext.Provider>
  );
}
