export const listContact = [
	{
		name: 'Yahaira',
		number: '56985117173',
	},
	{
		name: 'Benjamin',
		number: '51918176352',
	},
	{
		name: 'Bff',
		number: '51936087701',
	},
];

// verify if the number is in the blacklist

export const isBlackList = (number: string) => {
	const contact = listContact.find(contact => number.includes(contact.number));
	return !!contact;
};
