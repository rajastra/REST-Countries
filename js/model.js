import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  country: {},
  countries: [],
  countrySearch: "",
  regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
};

export const getCountries = async (region) => {
  const data = await getJSON(`${API_URL}${region}`);
  state.countries = data.map((country) => {
    return {
      name: country.name.official,
      img: country.flags.svg,
      population: country.population,
      region: country.region,
      capital: country.capital,
      languages: Object.values(country.languages),
    };
  });
};
