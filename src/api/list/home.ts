import service from "@/api/request";

/**
 * 
 * @param params 入参
 * @returns 返回promise解构的 data数据
 */
export const getUrl = (params?: object) => {
  const data = service({
    url: "/api/getJoke",
    params,
  })
  return data
}

export default { getUrl };
