import Name from "./Name";
import Counter from "./Counter"
import Batsman from "./Batsman";
import Users from "./Users";
import './App.css'
import { Suspense } from "react";
import Friends from "./Friends";
import Bowler from "./Bowler";
import Posts from "./Posts";
import Todos from "./Todos";
import Comments from "./Comments";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())

// const fetchFriend = async()=> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

// const fetchPosts = async()=> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

// const fetchTodos= async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   return res.json();
// }

// const fetchComments = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   return res.json();
// }


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

  // const friendsPromise = fetchFriend(); 
  // const postsPromise = fetchPosts();
  // const todosPromise = fetchTodos();
  // const commentsPromise = fetchComments();

  return (
    <>
      <h3>React + Vite</h3>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise= {friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h2>Posts are loading....</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h2 className="card">Todos are loading...</h2>}>
        <Todos todosPromise={todosPromise}></Todos>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Comments are loading...</h3>}>
        <Comments commentsPromise={commentsPromise}></Comments>
      </Suspense> */}

      <Players></Players>

      <Batsman></Batsman>
      <Bowler></Bowler>
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
