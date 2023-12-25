import {request} from "./requestConfig.js"

export function userloginRequest(data){
	return request({
		url:"/User/login",
        method:"post",
        data
	})
}
export function adminloginRequest(data){
	return request({
		url:"/User/login",
        method:"post",
        data
	})
}
export function registerRequest(data){
	return request({
		url:"/admin/register",
        method:"post",
        data
	})
}
