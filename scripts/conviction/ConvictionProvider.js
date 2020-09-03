let convictions = [];

export const useConvictions = () => {
	return convictions.slice();
};

export const getConvictions = () => {
	return fetch("https://criminals.glassdale.us/criminals")
		.then((response) => response.json())
		.then((parsedConvictions) => {
			convictions = parsedConvictions;
		});
};
