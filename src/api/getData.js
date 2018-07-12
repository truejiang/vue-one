import { DATA_URL, OPTIONS } from './config'
import axios from 'axios'
import { getParams } from './params'

// 获取日期列表信息
export function getDateList (data = {}) {
  let url = DATA_URL.dataIdList
  data = Object.assign(data, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
// 获取封面页的信息
export function getOneList (dataId) {
  let url = DATA_URL.oneList + dataId + '/0'
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取文章详情，传入文章id
export function getArticle (itemId) {
  let url = DATA_URL.article + itemId
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取图文页面列表信息 传入参数为时间主要看月份返回当月的文章
export function getOnePageList (date) {
  let url = DATA_URL.onePageList + date + '%2000:00:00'
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取阅读列表信息
export function getReadingList (id = 0) {
  let url = DATA_URL.readList + id
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取音乐列表信息
export function getMusicList (id = 0) {
  let url = DATA_URL.musicList + id
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取音乐文章详情，传入文章id
export function getMusicArticle (itemId) {
  let url = DATA_URL.musicDetailList + itemId
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取影视列表信息
export function getMovieList (id = 0) {
  let url = DATA_URL.movieList + id
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 获取影视详情
export function getMovieDetail (id) {
  let url = DATA_URL.movieDetail + id
  let data = Object.assign({}, OPTIONS)
  let params = getParams(url, data)
  return new Promise((resolve, reject) => {
    axios.get(params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
