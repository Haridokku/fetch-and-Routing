import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  /*
  getLoader = () => {
    return (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    )
  }
  */

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogData
    return (
      <div className="display-blog-details">
        <h1 className="head">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="author-pic" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image-pic" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
