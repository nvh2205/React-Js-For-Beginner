import axiosClient from "./axiosClient";

const provincesApi = {
  getAll: (params) => {
    const url = `/${params}`;
    return axiosClient.get(url);
  },

  getDepth:(key,params) => {
    const url=`/${key}`
    return axiosClient.get(url,{params});
  }
}

export default provincesApi; 