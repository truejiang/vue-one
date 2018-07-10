// 基础的代理请求url
export const BASE_URL = 'https://bird.ioliu.cn/v1'

export const DATA_URL = {
  dataIdList: 'http://v3.wufazhuce.com:8000/api/onelist/idlist/',
  oneList: 'http://v3.wufazhuce.com:8000/api/onelist/',
  article: 'http://v3.wufazhuce.com:8000/api/essay/',
  onePageList: 'http://v3.wufazhuce.com:8000/api/hp/bymonth/'
}

/*
* 请求的一些基础信息
* @params:
* channel 代表设备品牌
* version app版本号
* uuid 个人设备Id
*/
export const OPTIONS = {
  channel: 'mi' || 'wdj',
  version: '4.5.4',
  uuid: 'ffffffff-a90e-706a-63f7-ccf973aae5ee',
  platform: 'android' || 'ios' || 'web'
}
