import BACKEND_HEADER, { BACKEND_PUBLIC_DNS, BACKEND_PORT } from '../constants/Common';
import { Alert } from 'react-native';

export const asyncGet = async (
	endpoint,
	jsonParameters,
	callback = () => {},
	publicDNS = BACKEND_PUBLIC_DNS,
	port = BACKEND_PORT,
	header = BACKEND_HEADER
) => {
	try {
		const parameterString = Object.entries(jsonParameters).map(query => query.join('=')).join('&');
		const queryString = `${publicDNS}:${port}/${endpoint}?${parameterString}`;
		const response = await fetch(queryString, {
			method: 'GET',
			headers: header
		});

		return response;
	} catch (error) {
		callback();	
	}
}

export const asyncPost = async (
	endpoint,
	jsonPayload,
	callback = () => {},
	publicDNS = BACKEND_PUBLIC_DNS,
	port = BACKEND_PORT,
	header = BACKEND_HEADER
) => {
	try {
		const queryString = `${publicDNS}:${port}/${endpoint}`;
		const response = await fetch(queryString, {
			method: 'POST',
			headers: header,
			body: JSON.stringify(jsonPayload)			
		});

		return response;
	} catch (error) {
		callback();	
	}
}

export const errorAlert = (title, content) => {
	Alert.alert(
		title,
		content,
		[{
			text: 'Ok'
		}]
	);
}
