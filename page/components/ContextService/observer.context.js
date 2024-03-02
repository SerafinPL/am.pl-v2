import { createContext, useState } from 'react';
export const ObserverContext = createContext();

export function ProvObserverContext(props) {

    const [observer, setObserver] = useState(1);

    const chengeObserver = (sector) => {
        return setObserver(sector);
    }

    return (
        <ObserverContext.Provider value={{ observer, chengeObserver }}>
            {props.children}
        </ObserverContext.Provider>
    );
}