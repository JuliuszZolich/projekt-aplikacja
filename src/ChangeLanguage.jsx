import { createContext, useContext, useState } from 'react';
import plTranslations from './translations/pl.json';
import enTranslations from './translations/en.json';
import PropTypes from 'prop-types';

const translations = {
    pl: plTranslations,
    en: enTranslations
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pl');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pl' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
