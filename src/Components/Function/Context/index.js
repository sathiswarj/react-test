import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [theme,setTheme] =useState('light')

  const handleChangeTheme = () =>{
    setTheme(theme === 'light' ? 'dark':'light')
  }
  
  return <GlobalContext.Provider value={{theme, handleChangeTheme}}>
    {children}
    </GlobalContext.Provider>;
}

export default GlobalState;   
