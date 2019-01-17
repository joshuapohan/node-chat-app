const request = require('request');
const axios = require('axios');

// async function getExchangeRate(from, to){
// 	try{
// 		return new Promise((resolve, reject)=>{
// 			request({
// 				url: 'http://data.fixer.io/api/latest?access_key=a2193a77dacd1d576ddd3aeb0cac8a63&format=1',
// 				json: true
// 			}, (error, response, body)=>{
// 				if(error){
// 					reject(error);
// 				} else{
// 					const euro = 1 / body.rates[from];
// 					const rate = euro * body.rates[to];
// 					resolve(rate);
// 				}
// 			});
// 		});
// 	} catch(e){
// 		throw new Error('Unable to get exchange rate for ' + from + ' to ' + to);
// 	}

// }

async function getExchangeRate(from, to){
	try{
		const response = await axios.get('http://data.fixer.io/api/latest?access_key=a2193a77dacd1d576ddd3aeb0cac8a63&format=1');
		const euro = 1 / response.data.rates[from];
		const rate = euro * response.data.rates[to];

		if(isNaN(rate)){
			throw new Error();
		}
		return rate;		
	} catch (e) {
		throw new Error('unable to get exchange rate for ' + from + ' to ' + to );
	}
}

async function getCountriesUsingCurrency(currencyCode){
	try{
		const response = await axios.get('https://restcountries.eu/rest/v2/currency/' + currencyCode);
		return response.data.map((country)=>country.name);		
	} catch(e){
		throw new Error('unable to get countries that use ' + currencyCode);
	}

}

//OPTION 1
// const convertCurrency = (from, to, amount) =>{
// 	getExchangeRate(from, to).then((rate)=>{
// 		const total = (rate * amount).toFixed(2);
// 		console.log(total);
// 		getCountriesUsingCurrency(to).then((countries)=>{
// 			console.log('Countries that use this currency ' + countries.map((country)=>{
// 				return country;
// 			}));
// 		});
// 	});
// };


//OPTION 2
// async function convertCurrency(from, to, amount){
// 	let convertedAmount;
// 	return getExchangeRate(from, to).then((rate)=>{
// 		convertedAmount = (rate * amount).toFixed(2);
// 		return getCountriesUsingCurrency(to);
// 	}).then((countries)=>{
// 			return (amount + ' ' + from + ' is worth ' + convertedAmount + ' ' + to + '\nCountries that use this currency \n' + countries.map((country)=>{
// 				return country + '\n';
// 			}));
// 	});
// };

async function convertCurrency(from, to, amount){
	const rate = await getExchangeRate(from, to);
	const convertedAmount = (amount * rate).toFixed(2);
	const countries = await getCountriesUsingCurrency(to);
	return (amount + ' ' + from + ' is worth ' + convertedAmount + ' ' + to + '\nCountries that use this currency \n' + countries.map((country)=>{
				return country + '\n';
			})); 
};

// getExchangeRate('USD', 'IDR').then((body) =>console.log(body)).catch((e)=>console.log(e));

// getCountriesUsingCurrency('CAD').then((countries)=>{
// 	console.log(countries);
// });

convertCurrency('IDR','USD',50000).then((result)=>console.log(result)).catch((e)=>console.log(e));