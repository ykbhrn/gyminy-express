import axios from 'axios'
import { getToken } from './auth'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const getAllImages = () => {
  return axios.get('/api/images/')
}

export const getSingleImage = id => {
  return axios.get(`/api/images/${id}`)
}

export const getAllVideos = () => {
  return axios.get('/api/videos/')
}

export const getSingleVideo = id => {
  return axios.get(`/api/videos/${id}`)
}

export const getPortfolio = () => {
  return axios.get('/api/profile/', withHeaders())
}

export const getPublicPortfolio = id => {
  return axios.get(`/api/profile/${id}`)
}

export const registerUser = formData => {
  return axios.post('/api/register', formData)
}

export const loginUser = formData => {
  return axios.post('/api/login', formData)
}

export const getAllSports = () => {
  return axios.get('/api/sports/')
}

export const getAllTrainings = () => {
  return axios.get('/api/trainings/')
}

export const getSingleTraining = id => {
  return axios.get(`/api/trainings/${id}`, withHeaders())
}

export const addTraining = formData => {
  return axios.post('/api/trainings/', formData, withHeaders())
}

export const bookTraining = id => {
  return axios.put(`/api/trainings/${id}`, {}, withHeaders())
}

export const addImages = formData => {
  return axios.post('/api/images/', formData, withHeaders())
}

export const addVideos = formData => {
  return axios.post('/api/videos/', formData, withHeaders())
}

export const addArticles = formData => {
  return axios.post('/api/articles/', formData, withHeaders())
}

export const getAllArticles = () => {
  return axios.get('/api/articles/')
}

export const getSingleArticle = id => {
  return axios.get(`/api/articles/${id}`)
}

export const postComment = ( formData, imageId ) => {
  return axios.post(`/api/images/${imageId}/comments`, formData, withHeaders())
}

export const deleteComment = ( imageId, commendId ) => {
  return axios.delete(`/api/images/${imageId}/comments/${commendId}`, withHeaders())
}

export const postVideoComment = ( formData, videoId ) => {
  return axios.post(`/api/videos/${videoId}/comments`, formData, withHeaders())
}

export const deleteVideoComment = ( videoId, commendId ) => {
  return axios.delete(`/api/videos/${videoId}/comments/${commendId}`, withHeaders())
}

export const postChat = (formData, receiverId) => {
  return axios.post(`/api/chats/${receiverId}`, formData, withHeaders())
}

export const getChat = (id) => {
  return axios.get(`/api/chats/${id}`, withHeaders())
}

export const getAllUsers = () => {
  return axios.get('/api/users')
}

export const giveLike = (formData) => {
  return axios.post('/api/likes', formData,  withHeaders())
}

export const giveVideoLike = (formData) => {
  return axios.post('/api/videolikes', formData,  withHeaders())
}

export const follow = (id, formData) => {
  return axios.post(`/api/follow/${id}`, formData, withHeaders())
}

export const turnOffNotifications = (formData) => {
  return axios.post('/api/notifications', formData, withHeaders())
}