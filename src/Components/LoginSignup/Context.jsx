import React, {useContext, createContext, useState, useEffect} from "react";

const FormContext = createContext();

export const FormProvider = ({children}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ispasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [Data, setData] = useState([]);
  const [loginmessage, setLoginMessage] = useState("");
  const [signupmessage, setSignupMessage] = useState("");

// reject the login if the user not found and allow if the user found
  const RevokeLogin = () => {
    const userFound = Data.find(user => user.name.toLowerCase() == name.toLowerCase() && user.password === password );
    if(userFound){
        setLoginMessage(<p className='text-blue-500 mb-4'>LogIn Successful</p>);
        console.log("Logged in:",{name: name, password: password, email: [userFound.email]});
        setTimeout(()=> {
          setLoginMessage("");
        },3000);
        // if the name and password fields are empty
    }else if(name === "" || password === ""){
      setLoginMessage(<p className='text-red-500 mb-4'>Empty Inputs</p>);
      setTimeout(()=> {
        setLoginMessage("");
      },3000);
    }
    // if user details not matched
    else{
      setLoginMessage(<p className='text-red-500 mb-4'>Details not matched</p>);
      setTimeout(()=> {
        setLoginMessage("");
      },3000);
    }
  };

  // for creating new account
  const NewAccount = (e) => {

    if(name !== "" && email !== "" && password !== ""){
      if (password.length >= 8) {
        if (!isChecked) {
          e.preventDefault();
          setSignupMessage(<p className='text-red-500 mb-4'>Agree to terms & conditions</p>);
          setTimeout(() => {
            setSignupMessage("");
          }, 3000);
        }else{
          setSignupMessage(<p className='text-blue-500 mb-4'>Account Created. Login Now</p>);
          setTimeout(() => {
            setSignupMessage("");
          }, 3000);
        };
      } else {
        e.preventDefault();
        setSignupMessage(<p className='text-red-500 mb-4'>Password must be at least 8 characters long</p>);
        setTimeout(() => {
          setSignupMessage("");
        }, 3000);
      }
    }
    else if(name == "" || email == "" || password == ""){
      setSignupMessage(<p className='text-red-500 mb-4'>Empty Input</p>);
      setTimeout(()=> {
        setSignupMessage("");
      },3000);
    }
  };

  // empty the input fields after successfully creating account
  const handleFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  }

  // update the states
  const handleSignUp = (e) => {
    e.preventDefault();
    const newData = 
      {name: name.toLowerCase(),
      email: email,
      password: password,
    };
  setData(prevData => [...prevData, newData]);
  handleFields();
  setIsChecked(false);
  console.log("Account Created:", {name: name, email: email, password: password });
};

// toggle the visibility of password
  const Toggle = () => {
    setIsPasswordVisible(!ispasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsChecked(false);
    handleFields();
  };

  // context for providing the state variables and functions
  const ContextValue = {name, setName, email, setEmail, password, setPassword, ispasswordVisible, setIsPasswordVisible, Toggle, handleSubmit, handleFields, isChecked, setIsChecked, Data, handleSignUp, loginmessage, signupmessage, RevokeLogin, NewAccount};

  return(
    <FormContext.Provider value={ContextValue}>
        {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);