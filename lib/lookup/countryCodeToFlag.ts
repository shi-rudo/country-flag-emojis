import {CountryFlag} from "../types";
import {iso2CountryMap} from "../mapping/iso2CountryMap";
import {CountryNotFoundError, InvalidInputError, InvalidLengthError} from "../errors/CountryCodeError";
import {iso3CountryMap} from "../mapping/iso3CountryMap";

/**
 * Converts an ISO alpha-2 or alpha-3 country code to its corresponding CountryFlag object.
 *
 * @param countryCode - The ISO alpha-2 (e.g., "US", "GB") or alpha-3 (e.g., "USA", "GBR") country code.
 * @returns The corresponding CountryFlag object.
 * @throws Will throw an error if the country code is invalid, has an incorrect length, or is not supported.
 */
export function countryCodeToFlag(countryCode: string): CountryFlag {
    if (!countryCode) {
        throw new InvalidInputError("Country code cannot be empty.");
    }

    const normalizedCode = countryCode.trim().toUpperCase();

    let countryFlag: CountryFlag | undefined;

    switch (normalizedCode.length) {
        case 2:
            countryFlag = iso2CountryMap[normalizedCode];
            break;
        case 3:
            countryFlag = iso3CountryMap[normalizedCode];
            break;
        default:
            throw new InvalidLengthError(
                `Country code must be either 2 or 3 characters long. Received length: ${normalizedCode.length}`
            );
    }

    if (!countryFlag) {
        throw new CountryNotFoundError(
            `Country not found for code: ${countryCode}`
        );
    }

    return countryFlag;
}