import qs from 'qs'

export function getParams (url, params) {
  for (let key in params) {
    if (url.includes('?')) {
      url += `&${qs.stringify(key)}=${qs.stringify(params[key])}`
    } else {
      url += `?${qs.stringify(key)}=${qs.stringify(params[key])}`
    }
  }
  return url
}
