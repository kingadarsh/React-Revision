import './Cards.css';



function Cards({post}) {
  return (
    <div className='card'>
        <h3 className='postTitle' >{post.title}</h3>
        <p className='author'>By {post.author} on {post.category}</p>
        <p className='postDate'>Posted On {post.date} </p>
        <p className='postContent'> {post.content} </p>
        <div className='tagContainer'>
        {        
            post.tags.map((tag,ind)=><span key={ind} className='tags'>#{tag}</span>)
        }
        </div>


        


    </div>
  )
}

export default Cards
