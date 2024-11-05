// src/errors/CountryCodeError.ts
export class CountryCodeError extends Error {
    public readonly errorCode: string;

    constructor(errorCode: string, message: string) {
        super(message);
        this.name = "CountryCodeError";
        this.errorCode = errorCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class InvalidInputError extends CountryCodeError {
    constructor(message: string = "Country code must be a non-empty string.") {
        super("INVALID_INPUT", message);
        this.name = "InvalidInputError";
    }
}

export class InvalidLengthError extends CountryCodeError {
    constructor(message: string = "Country code must be exactly 2 characters long.") {
        super("INVALID_LENGTH", message);
        this.name = "InvalidLengthError";
    }
}

export class CountryNotFoundError extends CountryCodeError {
    constructor(countryCode: string, message: string = "") {
        super(
            "NOT_FOUND",
            message || `Invalid or unsupported country code: "${countryCode}".`
        );
        this.name = "CountryNotFoundError";
    }
}
