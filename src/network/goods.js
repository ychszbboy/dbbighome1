import {request} from "./requestConfig.js"

export function getGoodsData(){
	return request({
		url:"http://localhost:7777/Category/page?page=1&pagesize=100",
		// method:"get"
	})
}
export function addNewGoodsData(data){
	return request({
		url:"http://localhost:7777/Category/Add",
		method:"post",
		data
	})
}
export function deleteGoodsData(data){
	return request({
		url:"http://localhost:7777/Category/delete",
		method:"post",
		data
	})
}
export function AddShoppingCartData(data){
	return request({
		url:"http://localhost:7777/shoppingCart/add",
		method:"post",
		data
	})
}