import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userLatitude, setUserLatitude] = useState(0);
    const [userLongitude, setUserLongitude] = useState(0);
    const [userNameEntry, setUserNameEntry] = useState("")

    const setCoordinates = (latitude, longitude) => {
        setUserLatitude(latitude);
        setUserLongitude(longitude);
    }

    const handleNameEntry = (name) => {
        setUserNameEntry(name);
        localStorage.setItem("userNameEntry", name)
    }

    useEffect(() => {
        const storedUserName = localStorage.getItem("userNameEntry");
        if (storedUserName) {
            setUserNameEntry(storedUserName);
        }
    }, []);

    return (
        <UserContext.Provider value={{ handleNameEntry, userNameEntry, userLatitude, userLongitude, setCoordinates}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}