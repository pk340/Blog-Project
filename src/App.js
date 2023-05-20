import './App.css';
// import Form from './Components/Form';
import Blogs from './Components/Blogs';


// import FormClass from './Components/FormClass'
// import LogIn from './Components/LogIn';
// import Reset from './Components/Reset';
// import { useState } from 'react';




function App() {
  // const [form, setForm] = useState('login');
  return (
    <div className="App">
      <Blogs />
      {/* <Form /> */}
      {/* <h1>Welcome</h1> */}
      {/* <LogIn /> */} 
      {/* {form === 'login'  ? <LogIn /> : <Reset />}
      <button onClick={() => { setForm(form === 'login' ? 'reset' : 'login')} }>
          {(form === 'login' ) ? 'Forget Password' : 'Back to Login'}
      </button> */}
      
    </div>
  );
}

export default App;
