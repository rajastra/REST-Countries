import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  country: {},
  countries: [],
  countrySearch: "",
  filteredCountries: [],
};

export const getCountries = async () => {
  const data = await getJSON(API_URL);
  state.countries = data.map((country) => {
    return {
      name: country.name.official,
      img: country.flags.png,
      population: country.population,
      region: country.region,
      capital: country.capital[0],
      languages: Object.values(country.languages),
    };
  });
};
