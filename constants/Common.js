export const BACKEND_PUBLIC_DNS = 'http://ec2-18-216-159-255.us-east-2.compute.amazonaws.com';
export const BACKEND_PORT = 8090;
export const BACKEND_HEADER_KEY = 'secretKey';
export const BACKEND_HEADER_VALUE = 'secretValue';
let BACKEND_HEADER = {}
BACKEND_HEADER[BACKEND_HEADER_KEY] = BACKEND_HEADER_VALUE
export default BACKEND_HEADER;

export const CHECKIN_COLOR = '#b94a48';
export const HOST_CHECKIN_COLOR = '#3a87ad';

const UserInfoPrefix = '@UserInfo:';
export const UserInfo = {
	userName: `${UserInfoPrefix}userName`,
	passWord: `${UserInfoPrefix}passWord`,
	checked: `${UserInfoPrefix}checked`
}
