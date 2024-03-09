import request from "@/utils/http.js";

// 获取商品详情
export const getDetail = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}
