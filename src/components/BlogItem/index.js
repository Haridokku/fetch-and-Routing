import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails
  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="blog-item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="author-container">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
