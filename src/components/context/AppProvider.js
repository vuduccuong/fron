import React,{createContext, useState} from 'react';

export const AppContext = createContext();

const AppProvider = ({ children })=>{

    const [val, setVal] = useState(false);
    const SetLogin = ()=>{
        setVal(!val);
    }
return (
    <AppContext.Provider
     value={{
        isLg : val,
        setLogin: SetLogin
    }}
    >
    {children}
</AppContext.Provider>
);
};

export default AppProvider;
