import {request} from "./request"
export function get_data() {
  return request({
    url: '/data/home/',
  })
}

