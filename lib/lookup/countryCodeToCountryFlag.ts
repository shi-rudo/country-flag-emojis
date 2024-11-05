import {CountryFlag} from "../types";
import {iso2CountryMap} from "../mapping/iso2CountryMap";
import {CountryNotFoundError, InvalidInputError, InvalidLengthError} from "../errors/CountryCodeError";

/**
 * Converts an ISO alpha-2 country code to its corresponding CountryFlag object.
 *
 * @param countryCode - The ISO alpha-2 country code (e.g., "US", "GB").
 * @returns The corresponding CountryFlag object.
 * @throws Will throw an error if the country code is invalid or not supported.
 */
export function countryCodeToCountryFlag(
    countryCode: string
): CountryFlag {
    if (!countryCode) {
        throw new InvalidInputError();
    }

    const normalizedCode = countryCode.trim().toUpperCase();

    if (normalizedCode.length !== 2) {
        throw new InvalidLengthError();
    }

    const countryFlag = iso2CountryMap[normalizedCode];

    if (!countryFlag) {
        throw new CountryNotFoundError(countryCode);
    }

    return countryFlag;
}