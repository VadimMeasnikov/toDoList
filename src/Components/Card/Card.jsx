
import './card.scss'

export default function Card(props) {
  console.log(props);
  return (
    <div className='post' onClick={() => props.delPost(props.post.id)}>
      <h1 className='title'>{props.post.title}</h1>
      <p className='info'>{props.post.body}</p>
    </div>
  )
}
