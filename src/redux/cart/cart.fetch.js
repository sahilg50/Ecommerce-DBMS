import axios from 'axios';

//Inert new Item into the databse
export const Insert_Cart_Item = async (item) => {
	try {
		const response = await axios({
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			url: 'http://localhost:4000/insert_item_to_cart',
			data: item,
			responseType: 'json',
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

//Add Items in the cart
export const Add_Cart_Item = async (item) => {
	try {
		const response = await axios({
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			url: 'http://localhost:4000/add_item_to_cart',
			data: item,
			responseType: 'json',
		});
		console.log(response);
	} catch (error) {
		console.log('Add to cart Item failed');
	}
};

//Remove Items in the cart
export const Remove_Cart_Item = async (item) => {
	try {
		const response = await axios({
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			url: 'http://localhost:4000/remove_item_from_cart',
			data: item,
			responseType: 'json',
		});
		console.log(response);
	} catch (error) {
		console.log('Remove item from cart failed');
	}
};

//Clear Items in the cart
export const Clear_Cart_Item = async (Id) => {
	try {
		const response = await axios({
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			url: 'http://localhost:4000/clear_item_from_cart',
			data: { Id: Id },
			responseType: 'json',
		});
		console.log(response);
	} catch (error) {
		console.log('Clear item from cart failed');
	}
};
