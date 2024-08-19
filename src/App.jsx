import { useState } from 'react'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import MyComponent from './MyComponent';
import SearchBar from './SearchBar';
import './App.css'

function App() {


  const [count, setCount] = useState(0)


  const handleLogin = (loginData) => {
    console.log('User lpgin data:', loginData);
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс в компонент LoginForm */}
      <FeedbackForm />
      <MyComponent />
      <SearchBar/>
      
    </div>
  )
  
}

export default App
