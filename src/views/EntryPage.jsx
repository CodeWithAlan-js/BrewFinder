import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { MdFastfood } from "react-icons/md";
import "animate.css";
import { useNavigate } from "react-router-dom";
import UserLocalisation from "../components/UserLocalisation";
import { useUserContext } from "../components/UserContext";

export default function EntryPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { handleNameEntry } = useUserContext();
  let navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userNameEntry");
    if (storedName) {
        setName(storedName);
    }
}, []);

  const handleError = () => {
    if (name.trim() === "") {
      setError("Enter your name");
    } else {
      setError(null);
      handleNameEntry(name)
      navigate("/home-page");
    }
  };

  const handleInputName = (e) => {
    setName(e.target.value);
    setError(false);
  };


  return (
    <div className="principal-background w-screen h-screen center-item-1">
      <UserLocalisation />
      <div className="center-col-item-2 flex-col h-2/5 w-4/5">
        <h1 className=" text-center mb-10 text-lg font-bold animate__animated animate__backInDown">
          Welcome! <br /> To access the application, kindly enter your{" "}
          <span className="secondary-text-color">first name</span> below and{" "}
          <span className="secondary-text-color">grant</span> geolocation
          access.
        </h1>

        <div className="w-72 mb-10 animate__animated animate__backInLeft">
          {error && (
            <div className="text-red-700 underline-offset-4 underline absolute -top-7 left-20">
              {error}
            </div>
          )}
          <Input
            size="lg"
            color="teal"
            label="Your name"
            icon={<MdFastfood size={20} />}
            onChange={handleInputName}
          />
        </div>
        <div className="animate__animated animate__backInUp">
          <Button onClick={handleError} variant="outlined" color="teal">
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
}
