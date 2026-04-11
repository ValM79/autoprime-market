import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext({ lang: 'lt', setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('lt');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);