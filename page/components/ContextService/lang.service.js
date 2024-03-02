import { createContext, useState } from 'react';

export const LangContext = createContext();

export function ProvLangContext(props) {

    const [isLang, setLang] = useState(process.env.NEXT_PUBLIC_HOST_LANG === 'pl' ? 'pl': 'eng');

    const chengeLang = (site) => {
        console.log(site);
        if (!site) {
            return setLang(prev => prev === 'pl' ? 'eng' : 'pl');
        } else if (site === 'pl') {
            return setLang('pl');
        } else if (site === 'eng') {
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
        return pl
    } else if (lang === 'eng') {
        return eng
    }
    return lang
}

export const isPl = (lang) => {
    return lang === 'pl';
}