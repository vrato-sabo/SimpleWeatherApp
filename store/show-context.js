import { useState } from 'react';
import React from 'react';

export const ShowContext = React.createContext({
  showSearchbar: true,
  setShowSearchbar() {},
});

export default function ShowContextProvider(props) {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <ShowContext.Provider
      value={{ showSearchbar: isShowing, setShowSearchbar: setIsShowing }}>
      {props.children}
    </ShowContext.Provider>
  );
}
