export const BACKEND_PUBLIC_DNS = 'http://ec2-18-216-159-255.us-east-2.compute.amazonaws.com';
export const BACKEND_PORT = 8090;
export const BACKEND_HEADER_KEY = 'secretKey';
export const BACKEND_HEADER_VALUE = 'secretValue';
let BACKEND_HEADER = {}
BACKEND_HEADER[BACKEND_HEADER_KEY] = BACKEND_HEADER_VALUE
export default BACKEND_HEADER;

export const CHECKIN_COLOR = '#b94a48';
export const HOST_CHECKIN_COLOR = '#3a87ad';

export const PHOTO_NUM = 100;

const UserInfoPrefix = '@UserInfo:';
export const UserInfo = {
	userName: `${UserInfoPrefix}userName`,
	passWord: `${UserInfoPrefix}passWord`,
	checked: `${UserInfoPrefix}checked`
}

const ProfilePrefix = '@Profile:';
export const Profile = {
	age: `${UserInfoPrefix}age`,
	alias: `${UserInfoPrefix}alias`,
	email: `${UserInfoPrefix}email`,
	name: `${UserInfoPrefix}name`,
	profileImage: `${UserInfoPrefix}profileImage`
}

export const ProfileAttributesList = [
	'name',
	'alias',
	// 'email',
	'age'
];

export const KeyboardTypeMap = {
	name: 'default',
	alias: 'default',
	email: 'email-address',
	age: 'numeric'
}

export const ProfilePlaceholderMap = {
	name: 'e.g. Andrew',
	alias: 'e.g. anonymous unicorn',
	email: 'e.g. andrew@cmu.edu',
	age: 'e.g. 55'
}

export const DBProfileAttrMap = {
	name: 'NAME',
	alias: 'ALIAS',
	email: 'EMAIL',
	age: 'AGE',
}

export const RankingAttrList = [
	'rank',
	'alias',
	'total_score'
]

export const RankingDisplayNameMap = {
	'rank': 'RANK',
	'alias': 'ALIAS',
	'total_score': 'TOTAL'
}

export const ActivitiesAttrList = [
	'today',
	'yesterday',
	'last_week',
	'last_month',
]

export const ActivitiesDisplayNameMap = {
	today: 'Today',
	yesterday: 'Yesterday',
	last_week: 'Last week',
	last_month: 'Last month',
}

export const ActivitiesBreakdown = [
	'total_score',
	'SITTING_DURATION',
	'WATER_INTAKE'
]

export const ScoreDisplayNameMap = {
	total_score: 'Total score',
	WATER_INTAKE: 'Water intake score',
	SITTING_DURATION: 'Sitting score'
}
