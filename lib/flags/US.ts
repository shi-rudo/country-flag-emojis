import { CountryFlag } from "../types";

/**
 * Represents the country flag for United States.
 * 
 * @constant
 * @type {CountryFlag}
 * @property {string} flag - The emoji representation of the United States flag.
 * @property {string} isoAlpha2 - The ISO 3166-1 alpha-2 code for United States.
 * @property {string} unicode - The Unicode code points for the United States flag emoji.
 * @property {string} nameEnglish - The English name of the country.
 */
const US: CountryFlag = {
  flag: "🇺🇸",
  isoAlpha2: "US",
  unicode: "U+1F1FA,U+1F1F8",
  nameEnglish: "United States",
};

export default US;
