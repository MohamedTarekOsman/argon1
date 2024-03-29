import baseUrl from "../API/baseUrl";

export const useInsertDataWithImage =async(url,params)=>{
    const config={
        headers:{"Content-Type": "multipart/form-data",
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }
    }
    const res=await baseUrl.post(url,params,config)
    return res;
}

export const useInsertData = async (url, parmas) => {
    const config={
        headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }
    }
    const res = await baseUrl.post(url, parmas,config);
    return res;
}
