import React, { useEffect, useState } from "react";
import { useUserContext } from "./UserContext";

const UserLocalisation = () => {
    const { setCoordinates } = useUserContext();

    useEffect( () => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const newLatitude = (position.coords.latitude);
                        const newLongitude= (position.coords.longitude);
                        setCoordinates(newLatitude, newLongitude);
                    },
                    (error) => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED :
                                break;
                            case error.POSITION_UNAVAILABLE :
                                break;  
                            case error.TIMEOUT :
                                break;
                            default: 
                        }
                    }
                );
            } 
            };
            getLocation();
    }, [])

};

export default UserLocalisation;