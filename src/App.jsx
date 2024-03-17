import './App.css'
import { FormProvider } from './Components/LoginSignup/Context.jsx';
import LogIn from './Components/LoginSignup/Login.jsx';
import SignUp from './Components/LoginSignup/Signup.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
    <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </Router>
    </FormProvider>
    </div>
  )
}

export default App;
