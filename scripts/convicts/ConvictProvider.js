let convicts = [];

export const useConvicts = () => {
	return convicts.slice();
};

export const getConvicts = () => {
	return fetch("https://criminals.glassdale.us/convicts")
		.then((response) => response.json())
		.then((parsedConvicts) => {
			console.table(parsedConvicts);
			convicts = parsedConvicts;
		});
};
