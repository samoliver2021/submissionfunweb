class CountryItem extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: 'open'});
	}

	set country(country) {
		this._country = country;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML =  `
		<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		
		:host {
			display: block;
			margin-bottom: 18px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			border-radius: 10px;
			overflow: hidden;
		 }
		 
		.country_flag {
			width: 100%;
			max-height: 300px;
			object-fit: cover;
			object-position: center;
		 }
		 
		 .country-info {
			padding: 24px;
		 }
		 
		 .country-info > h2 {
			font-weight: lighter;
		 }
		 
		 .country-info > p {
			margin-top: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 10; /* number of lines to show */
		 }

		</style>
		<img class="country_flag" src="${this._country.flags.png}" alt="Country flag">
		<div class="flag-info"> 
		<h2><b>${this._country.name} (${this._country.cca3})</b></h2>
		<p>${this._country.capital}</p>
		<p>${this._country.region}</p>
	  </div>
		`;
	}

}
customElements.define('country-item', CountryItem);