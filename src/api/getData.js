import { DATA_URL, OPTIONS } from './config'
import axios from 'axios'
// import qs from 'qs'
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
