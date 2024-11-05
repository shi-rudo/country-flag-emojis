// src/lookup/lookup.ts

import { CountryFlag } from "../types";
import {countryCodeToCountryFlag} from "./countryCodeToCountryFlag";

export const lookup = {
    countryFlag: {
        /**
         * Retrieves the CountryFlag object by ISO alpha-2 country code.
         *
         * @param countryCode - The ISO alpha-2 country code (e.g., "DE").
         * @returns The corresponding CountryFlag object.
         * @throws Will throw an error if the country code is invalid or not supported.
         */
        byCountryCodeIso2: (countryCode: string): CountryFlag => {
            return countryCodeToCountryFlag(countryCode);
        },

        /**
         * Optionally, retrieve just the emoji flag.
         *
         * @param countryCode - The ISO alpha-2 country code (e.g., "DE").
         * @returns The emoji flag string.
         * @throws Will throw an error if the country code is invalid or not supported.
         */
        emojiByCountryCodeIso2: (countryCode: string): string => {
            const countryFlag = countryCodeToCountryFlag(countryCode);
            return countryFlag.flag;
        }
    }
};
