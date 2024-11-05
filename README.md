# Country Flag Emojis

A TypeScript library providing country flag emojis with metadata, optimized for tree-shaking and type safety.

## Installation

```bash
npm install country-flag-emojis
```

## Usage

### Recommended: Use the `lookup` Method with the Mapping

Leverage the `lookup` method to efficiently access country flag data using ISO alpha-2 codes. This approach ensures optimal bundle sizes through effective tree-shaking.

```typescript
import { lookup } from 'country-flag-emojis';

// Get the full CountryFlag object
const germany = lookup.countryFlag.byCountryCodeIso2('DE'); 
console.log(germany); 
// Output: { flag: '🇩🇪', isoAlpha2: 'DE', unicode: 'U+1F1E9,U+1F1EA', nameEnglish: 'Germany' }

// Get just the emoji
const japanEmoji = lookup.countryFlag.emojiByCountryCodeIso2('JP');
console.log(japanEmoji); // Output: 🇯🇵
```

### Alternative: Named Imports of Individual Flag Emojis

You can also import individual flags directly using named exports from the `flags/index.ts`. This method is less efficient but useful if you need to import multiple specific flags.

```typescript
import { DE, JP, ES } from 'country-flag-emojis/lib/flags';

console.log(DE); // 🇩🇪
console.log(JP); // 🇯🇵
console.log(ES); // 🇪🇸
```

**Note:** While direct imports are possible, using the `lookup` method is recommended for better tree-shaking and optimized bundle sizes.

## Lookup Method and Mapping

The library provides a `lookup` utility that utilizes a mapping file for efficient retrieval of country flag data based on ISO alpha-2 codes.

### Example: Using the Mapping

```typescript
import { iso2CountryMap } from 'country-flag-emojis/lib/mapping/iso2CountryMap';

const countryCode = 'FR';
const franceFlag = iso2CountryMap[countryCode];

console.log(franceFlag.flag);        // Outputs: 🇫🇷
console.log(franceFlag.nameEnglish); // Outputs: France
```

## Error Handling

The `lookup` methods will throw the following errors:

- `InvalidInputError`: If the input is null, undefined, or an empty string.
- `InvalidLengthError`: If the country code is not exactly 2 characters long.
- `CountryNotFoundError`: If the provided country code is not supported.

```typescript
import { lookup } from 'country-flag-emojis';
import { CountryNotFoundError } from 'country-flag-emojis';

try {
  const flag = lookup.countryFlag.byCountryCodeIso2('XYZ');
} catch (error) {
  if (error instanceof CountryNotFoundError) {
    console.error(`Country code not found: ${error.message}`);
  } else {
    console.error(`An unexpected error occurred: ${error}`);
  }
}
```

## Types

The `CountryFlag` interface defines the structure of the country flag objects:

```typescript
interface CountryFlag {
    flag: string;        // The emoji flag
    isoAlpha2: string;   // The ISO 3166-1 alpha-2 country code
    unicode: string;     // Unicode representation of the emoji
    nameEnglish: string; // English name of the country
}
```

## Building the Library

```bash
npm run build
```

This generates CommonJS and ES Module builds in the `dist` directory.

## Additional Information

### Tree-Shakable Exports

The library uses **named exports** for individual flags in `flags/index.ts`, enabling effective tree-shaking. This ensures that only the flags you import are included in your final bundle, optimizing performance and reducing bundle size.

**Example of Named Exports in `flags/index.ts`:**

```typescript
export { default as DE } from "./DE";
export { default as JP } from "./JP";
export { default as US } from "./US";
// ... more exports
```

### Mapping File

The `iso2CountryMap.ts` file located in `lib/mapping/` provides a convenient mapping from ISO alpha-2 codes to `CountryFlag` objects, ensuring type safety and ease of access.

**Example of `iso2CountryMap.ts`:**

```typescript
import { CountryFlag } from "../types";
import * as Flags from "../flags/index";

/**
 * Mapping of ISO alpha-2 country codes to their corresponding CountryFlag objects.
 */
export const iso2CountryMap: { [key: string]: CountryFlag } = {
  "DE": Flags.DE,
  "JP": Flags.JP,
  "US": Flags.US,
  // ... more mappings
};
```

### Type Consistency

All flag files and the mapping file utilize the `CountryFlag` interface from `types.ts` to ensure consistent typing across the library.

**Example `lib/types.ts`:**

```typescript
/**
 * Interface representing the structure of each country flag.
 */
export interface CountryFlag {
    flag: string;        // Actual Emoji (e.g., "🇦🇩")
    isoAlpha2: string;   // Country ISO alpha-2 code (e.g., "AD")
    unicode: string;     // Unicode code points (e.g., "U+1F1EA,U+1F1FA")
    nameEnglish: string; // English name of the country (e.g., "Andorra")
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License