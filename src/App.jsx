import Name from "./Name";
import Counter from "./Counter"
import Batsman from "./Batsman";
import Users from "./Users";
import './App.css'
import { Suspense } from "react";


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())


function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>React + Vite</h3>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <Name></Name>


      {/* <button onclick= "handeClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('Click Me 2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert('Click 4')}>Click Me 4</button>
      <button onClick={() => handleAdd5(5)}>Click Add 5</button>
    </>
  )
}

export default App
