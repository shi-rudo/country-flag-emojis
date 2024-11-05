// Define a union type for allowed error codes
type CountryCodeErrorCode = "INVALID_INPUT" | "INVALID_LENGTH" | "NOT_FOUND";

// Base class for country code related errors
export class CountryCodeError extends Error {
    public readonly errorCode: CountryCodeErrorCode;

    constructor(errorCode: CountryCodeErrorCode, message: string) {
        super(message);
        this.errorCode = errorCode;
        this.name = this.constructor.name;

        // Set the prototype explicitly to maintain instanceof checks
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// Error for invalid input (e.g., non-string or empty string)
export class InvalidInputError extends CountryCodeError {
    constructor(message: string = "Country code must be a non-empty string.") {
        super("INVALID_INPUT", message);
    }
}

// Error for invalid length of the country code
export class InvalidLengthError extends CountryCodeError {
    constructor(message: string = "Country code must be either exactly 2 or 3 characters long.") {
        super("INVALID_LENGTH", message);
    }
}

// Error when a country code is not found or unsupported
export class CountryNotFoundError extends CountryCodeError {
    public readonly countryCode: string;

    constructor(countryCode: string, message?: string) {
        const defaultMessage = `Invalid or unsupported country code: "${countryCode}".`;
        super("NOT_FOUND", message || defaultMessage);
        this.countryCode = countryCode;
    }
}
