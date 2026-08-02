import axios from "axios";
const rawBaseUrl = import.meta.env.VITE_BACKEND_LINK || import.meta.env.VITE_API_BASE_URL || "";
const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "");
const apiBase = normalizedBaseUrl.endsWith("/api")
    ? normalizedBaseUrl
    : `${normalizedBaseUrl}/api`;

console.log("Backend link:", link); // Debug log

const add=async (userid,username)=>{
    try{
        console.log("Frontend: Attempting to add username", { userid, username });
        const body={userid,username};
        const response=await axios.post(`${apiBase}/user/add`, body);
        console.log("Frontend: Add response received", response.data);
        
        if (response.data.success) {
            return { success: true, message: response.data.message };
        }
        return { success: false, message: response.data.message };
    }catch(err){
        console.error("Frontend: Add username error", err);
        return { success: false, message: err.response?.data?.message || "Server error" };
    }
}

const remove=async (userid,username)=>{
    try{
        console.log("Frontend: Attempting to remove username", { userid, username });
        const body={username,userid};
        const response=await axios.post(`${apiBase}/user/remove`, body);
        console.log("Frontend: Remove response received", response.data);
        
        if (response.data.success) {
            return { success: true, message: response.data.message };
        }
        return { success: false, message: response.data.message };
    }catch(err){
        console.error("Frontend: Remove username error", err);
        return { success: false, message: err.response?.data?.message || "Server error" };
    }
}

const fetchusernames=async (userid)=>{
    try{
        console.log("Frontend: Fetching usernames for userid", userid);
        const response=await axios.get(`${apiBase}/user/fetchusernames?userid=${userid}`);
        console.log("Frontend: Fetch response received", response.data);
        
        if (response.data.success) {
            return { success: true, message: response.data.data };
        }
        return { success: false, message: "No competitors found" };
    }catch(err){
        console.error("Frontend: Fetch usernames error", err);
        return { success: false, message: err.response?.data?.message || "Server error" };
    }
}

export {add,remove,fetchusernames};