import request from "@/api/request";

/**
 * 
 * @param params 入参
 * @returns 返回promise解构的 data数据
 */
export const getUrl = async (params?: object) => {
  const { data } = await request({
    url: "/api/getJoke",
    params,
  })
  return data
}

export default { getUrl };
