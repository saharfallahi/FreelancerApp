import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({data})=>data.data);
}

export function checkOtp(data){
    return http.post("/user/check-otp",data).then(({data})=>data.data);
}

export function completeProfile(data){
    return http.post("/user/complete-profile",data).then(({data})=>data.data);
}

export function getUser(){
  return http.get("/user/profile").then(({data})=>data.data);
} 
// How do API know which user to send information to?
// res: Refresh and Access Token