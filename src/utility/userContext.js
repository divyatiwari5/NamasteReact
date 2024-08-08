import { createContext } from "react";

export const UserContext = createContext({
    loggedInUser: 'Default User',
});

export const AppContext = createContext({
    appName: 'Namaste React'
})