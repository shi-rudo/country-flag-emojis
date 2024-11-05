import { CountryFlag } from "../types";
import {countryCodeToFlag} from "./countryCodeToFlag";

export const lookup = {
    countryFlag: {
        /**
         * Retrieves the CountryFlag object by ISO alpha-2 or alpha-3 country code.
         *
         * @param countryCode - The ISO alpha-2 (e.g., "DE") or alpha-3 (e.g., "DEU") country code.
         * @returns The corresponding CountryFlag object.
         * @throws Will throw an error if the country code is invalid, has an incorrect length, or is not supported.
         */
        byCountryCode: (countryCode: string): CountryFlag => {
            return countryCodeToFlag(countryCode);
        },

        /**
         * Retrieve just the emoji flag by ISO alpha-2 or alpha-3 country code.
         *
         * @param countryCode - The ISO alpha-2 (e.g., "DE") or alpha-3 (e.g., "DEU") country code.
         * @returns The emoji flag string.
         * @throws Will throw an error if the country code is invalid, has an incorrect length, or is not supported.
         */
        emojiByCountryCode: (countryCode: string): string => {
            const countryFlag = countryCodeToFlag(countryCode);
            return countryFlag.flag;
        }
    }
};
