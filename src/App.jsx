import { useState } from 'react'
import './style/App.scss'
import posts from './posts.json'
import Card from './Components/Card/Card';
console.log(posts);

function App() {
  const [arr, setArr] = useState(posts)




  function delPost(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter(item => item.id !== id)
    setArr(resultArr)
  }

  function addPost() {
    const object = {
      userId: 1,
      id: 2,
      title: "Добавленный пост",
      body: "Lorem"
    }
  }

  return (
    <>
      <button onClick={addPost}>Add Post</button>


      <div className="container">
        {arr.map((item, index) => (
          <Card post={item} delPost={delPost} key={index} />
        ))}
      </div>

    </>
  )
}

export default App
