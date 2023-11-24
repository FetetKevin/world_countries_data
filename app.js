import countries_data from "./data/countries_data.js";
import displayPopulation from "./scripts/displayPopulation.js";
import displayLanguages from "./scripts/displayLanguages.js";

document.querySelector(".nb_countries").textContent = countries_data.length;

const pop_button = document.querySelector(".population");
pop_button.addEventListener("click", () => displayPopulation(countries_data));

const lang_button = document.querySelector(".languages");
lang_button.addEventListener('click', () => displayLanguages(countries_data))
