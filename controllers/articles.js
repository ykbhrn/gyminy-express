const Article = require('../models/article')
const User = require('../models/user')

async function articlesIndex(req, res) {
  try {
    const articles = await Article.find()
    res.status(200).json(articles)
  } catch (err) {
    res.json(err)
  }
}

async function articleCreate(req, res) {
  try {
    req.body.user = req.currentUser
    req.body.userStuff = req.currentUser
    const createArticle = await Article.create(req.body)
    res.status(201).json(createArticle)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function articleShow(req, res) {
  const articleId = req.params.id 
  try {
    const article = await Article.findById(articleId)
    if (!article) throw new Error('notFound')
    const user = await User.findById(article.user)
    article.user = user
    res.status(200).json(article)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function articleUpdate(req, res) {
  const articleId = req.params.id
  try {
    const article = await Article.findById(articleId)
    if (!article) throw new Error('Not Found')
    if (!article.user.equals(req.currentUser.id)) throw new Error('Not Found')
    Object.assign(article, req.body)
    await article.save()
    res.status(202).json(article)
  } catch (err) {
    res.status(422).json(err)
  }
}


async function articleDelete(req, res) {
  const articleId = req.params.id
  try {
    const articleToDelete = await Article.findById(articleId)
    if (!articleToDelete) throw new Error('Not Found')
    if (!articleToDelete.user.equals(req.currentUser._id)) throw new Error('Not Found')
    await articleToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function commentCreate(req, res, next) {
  console.log('comment created')
  try {
    req.body.user = req.currentUser
    const articleId = req.params.id
    const article = await Article.findById(articleId)
    if (!article) throw new Error('notFound')
    article.comments.push(req.body)
    console.log(article)
    console.log(req.body)
    await article.save()
    res.status(201).json(article)
  } catch (err) {
    next(err)
  }
}

async function commentDelete(req, res) {
  try {
    const user = req.currentUser._id
    const articleId = req.params.id
    const commentId = req.params.commentid

    const article = await Article.findById(articleId)
    if (!article) throw new Error({ message: 'notFound' })

    const commentToRemove = article.comments.id(commentId)
    if (!commentToRemove) throw new Error({ message: 'notFound' })

    if (user.toString() !== commentToRemove.user.toString()) throw new Error({ message: 'notFound' })

    await commentToRemove.remove()
    await article.save()

    res.sendStatus(204)
  } catch (err) {
    res.json(err.data)
  }
}

module.exports = {
  index: articlesIndex,
  create: articleCreate,
  show: articleShow,
  update: articleUpdate,
  delete: articleDelete,
  commentCreate: commentCreate,
  commentDelete: commentDelete
}