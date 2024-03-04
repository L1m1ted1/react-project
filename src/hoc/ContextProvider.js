import {createContext, useState} from "react";


const Context = createContext(null)
const ContextProvider = ({children}) => {

    const [trigger, setTrigger] = useState(true)

    const switcher = () =>{
        setTrigger(prev => !prev)
    }

    console.log(trigger)

    return (
        <Context.Provider value={{trigger, switcher}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};
