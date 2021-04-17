import {request} from "./request"

export function post_data(data) {
  let param = new URLSearchParams()
  param.append('param', data)
  return request({
    url: '/data/goods_list/',
    method: 'post',
    data: param,
  })
}
