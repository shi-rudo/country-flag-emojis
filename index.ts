// index.ts

// 1. Export the CountryFlag interface as a named type
export type { CountryFlag } from "./lib/types";

// 2. Export other named exports (flags, errors, etc.)
export * from "./lib/flags/index";
export * from "./lib/errors/CountryCodeError";

// 3. Import the handler (lookup module) and set it as the default export
import CountryFlagHandler from "./lib/lookup/lookup";
export default CountryFlagHandler;
