/*eslint-disable no-unused-vars*/
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POSTS2 = 'fetch_post';
export const DELETE_POSTS = 'delete_posts';

const FETCH_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DOOKIEFUN';

export function FetchPosts() {
	const req = axios.get(`${FETCH_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: req,
	};
}

export function CreatePosts(values, callback) {
	const req = axios.post(`${FETCH_URL}/posts${API_KEY}`, values).then(() => callback());

	return {
		type: CREATE_POSTS,
		payload: req,
	};
}

export function FetchPosts2(id) {
	const req = axios.get(`${FETCH_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POSTS2,
		payload: req,
	};
}

export function deletePost(id, callback) {
	const req = axios.delete(`${FETCH_URL}/posts/${id}${API_KEY}`).then(() => callback());

	return {
		type: DELETE_POSTS,
		payload: id,
	};
}
