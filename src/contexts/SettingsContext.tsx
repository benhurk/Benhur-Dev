/* eslint-disable react-refresh/only-export-components */
import React, { SetStateAction, createContext, useState } from "react";

type ContextType = {
    darkMode: boolean,
    setDarkMode: React.Dispatch<SetStateAction<boolean>>,
    language: 'pt' | 'en',
    setLanguage: React.Dispatch<SetStateAction<'pt' | 'en'>>
}

export const SettingsContext = createContext<ContextType>({
    darkMode: true,
    setDarkMode: () => {},
    language: 'pt',
    setLanguage: () => {}
});

export default function SettingsProvider({children}: {children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [language, setLanguage] = useState<ContextType['language']>('pt');

    return (
        <SettingsContext.Provider value={{darkMode, setDarkMode, language, setLanguage}}>{children}</SettingsContext.Provider>
    )
}