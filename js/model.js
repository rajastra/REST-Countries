import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  country: {},
  countries: [],
  countrySearch: "",
  regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
  region: "Africa",
};

export const getCountry = async (name) => {
  try {
    const url = `${API_URL}/name/${name}`;
    const [data] = await getJSON(url);
    const borderName = data.borders?.map(async (border) => {
      const url = `${API_URL}alpha?codes=${border}`;
      const [data] = await getJSON(url);
      return data.name.common;
    });
    const borders = borderName ? await Promise.all(borderName) : undefined;

    state.country = {
      name: data.name.common,
      capital: data.capital,
      region: data.region,
      population: data.population,
      languages: Object.values(data.languages),
      subregion: data.subregion,
      currencies: Object.values(data.currencies)[0].name,
      borders: borders ? borders : undefined,
      img: data.flags.svg,
      cca3: data.cca3,
    };
  } catch (error) {
    throw error;
  }
};

export const getCountries = async (region = state.region) => {
  try {
    state.region = region;
    const data = await getJSON(`${API_URL}/region/${region}`);
    state.countries = data.map((country) => {
      return {
        name: country.name.common,
        img: country.flags.svg,
        population: country.population,
        region: country.region,
        capital: country.capital,
        languages: Object.values(country.languages),
      };
    });
  } catch (error) {
    throw error;
  }
};

export const changeRegion = (region) => {
  state.region = region;
};
