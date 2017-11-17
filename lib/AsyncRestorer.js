import { AsyncStorage } from 'react-native';

export const loadItems = async (storageKeyMap) => {
	let ret = {};

	for (let entry of Object.entries(storageKeyMap)) {
		const propsKey = entry[0];
		const storageKey = entry[1];
		ret[propsKey] = await loadItem(storageKey);
	}

	return ret;
}

const loadItem = async (key) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.log("error retrieving key");
		return undefined;
	}
}

export const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log('error reading data');
	}
}