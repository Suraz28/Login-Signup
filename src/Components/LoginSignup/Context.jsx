import React, {useContext, createContext, useState, useEffect} from "react";

const FormContext = createContext();

export const FormProvider = ({children}) => {
    const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ispasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [Data, setData] = useState([]);
  const [loginmessage, setLoginMessage] = useState("");
  const [signupmessage, setSignupMessage] = useState("");


  const RevokeLogin = () => {
    const userFound = Data.find(user => user.name.toLowerCase() == text.toLowerCase() && user.password === password );
    if(userFound){
        setLoginMessage(<p className='text-blue-500 mb-4'>LogIn Successful</p>);
        console.log("Logged in:",{name: text, password: password, email: email});
        setTimeout(()=> {
          setLoginMessage("");
        },3000);
    }else if(text === "" || password === ""){
      setLoginMessage(<p className='text-red-500 mb-4'>Empty Inputs</p>);
      setTimeout(()=> {
        setLoginMessage("");
      },3000);
    }
    else{
      setLoginMessage(<p className='text-red-500 mb-4'>Details not matched</p>);
      setTimeout(()=> {
        setLoginMessage("");
      },3000);
    }
  };

  const NewAccount = (e) => {

    if(text !== "" && email !== "" && password !== ""){
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
    else if(text == "" || email == "" || password == ""){
      setSignupMessage(<p className='text-red-500 mb-4'>Empty Input</p>);
      setTimeout(()=> {
        setSignupMessage("");
      },3000);
    }
  };

  const handleFields = () => {
    setText("");
    setEmail("");
    setPassword("");
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const newData = 
      {name: text.toLowerCase(),
      email: email,
      password: password,
    };
  setData(prevData => [...prevData, newData]);
  handleFields();
  setIsChecked(false);
  console.log("Account Created:", {name: text, email: email, password: password });
};

  const Toggle = () => {
    setIsPasswordVisible(!ispasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsChecked(false);
    handleFields();
  };

  const ContextValue = {text, setText, email, setEmail, password, setPassword, ispasswordVisible, setIsPasswordVisible, Toggle, handleSubmit, handleFields, isChecked, setIsChecked, Data, handleSignUp, loginmessage, signupmessage, RevokeLogin, NewAccount};

  return(
    <FormContext.Provider value={ContextValue}>
        {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);