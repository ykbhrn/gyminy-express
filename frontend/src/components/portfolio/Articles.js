import React from 'react'
import { getAllArticles } from '../../lib/api'
import { Link } from 'react-router-dom'

class Articles extends React.Component {
  state = {
    articles: []
  }

  async componentDidMount() {
    try {
      const res = await getAllArticles()
      this.setState({ articles: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    // if (!this.state.images) return null
    console.log(this.state.articles)
    return (
      <div className="article-container">
        {this.state.articles.slice(0).reverse().map( article => (
          <div key={article._id}>
            <div className="card-article">

              < Link to = {`/articles/${article._id}`}> 
                <img className='image-article' src={article.imageUrl} alt={article.title} />
              </Link >    
              <span className='article-author'>
                <Link to={`/profile/${article.user._id}`}>{article.user.name}</Link>
              </span>
              <div className='article-text'>
                < Link to = {`/articles/${article._id}`}> 
                  <div className="article-title">{article.title}</div>
                  <div className='article-border'></div>
                </ Link>
                <div className="subtitle-article">{article.text}</div>
              </div>

            </div>
          </div>
        ))}
      </div>
    )
  }

}
export default Articles