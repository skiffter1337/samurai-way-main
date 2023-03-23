import React, {ReactNode} from "react";
import {StoreType} from "./redux/store";


type ProviderType = {
    store: StoreType
    children: ReactNode
}

export const StoreContext = React.createContext({} as StoreType)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

