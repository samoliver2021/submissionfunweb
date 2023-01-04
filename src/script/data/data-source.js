class DataSource {
	static searchCountry(name) {
		return fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then(response => {
				return response.json();
			})

			
			.then(responseJson => {
				if (responseJson) {
					return Promise.resolve(responseJson.name);
				}

				else {
					return Promise.reject(`<h2>${name} is not found</h2>`);
				}
			});
	}
}

export default DataSource;