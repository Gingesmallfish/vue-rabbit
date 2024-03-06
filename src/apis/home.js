import httpInstance  from "@/utils/http.js";

// 获取banner
export function getBannerAPI () {
    return httpInstance({
        url: '/home/banner'
    })
}


/**
* @description: 获取新鲜好物
 * @param []
 * @return {*}
*/

export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}


// 获取人气推荐
export const getHotAPI=()=>{
    return httpInstance({
        url:'/home/hot'
    })
}


/**
 * @description: 获取所有商品模块
 * @return {*}
 */

export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}
