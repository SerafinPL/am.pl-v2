import { createContext, useState } from 'react';

export const LangContext = createContext();

export function ProvLangContext(props) {

    const [isLang, setLang] = useState(process.env.NEXT_PUBLIC_HOST_LANG === 'pl' ? 'pl' : 'eng');

    const chengeLang = (site) => {
        if (!site) {
            return setLang(prev => prev === 'pl' ? 'eng' : 'pl');
        }
        if (site === 'pl') {
            return setLang('pl');
        }
        if (site === 'eng') {
            return setLang('eng');
        }
    }

    return (
        <LangContext.Provider value={{ isLang, chengeLang }}>
            {props.children}
        </LangContext.Provider>
    );
}

export const langAnswer = (lang, pl, eng) => {
    if (lang === 'pl') {
        return pl;
    } else if (lang === 'eng') {
        return eng;
    }
    return lang;
}

export const isPl = (lang) => {
    return lang === 'pl';
}

export const secondLang = (lang) => {
    if (lang === 'pl') {
        return 'ENG';
    } else if (lang === 'eng') {
        return 'PL';
    }
    return lang;
}