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

// Using ISO alpha-2 code
const japanFlagAlpha2 = lookup.countryFlag.byCountryCode('JP');
console.log('Japan Flag (Alpha-2):', japanFlagAlpha2);
// Output:
// Japan Flag (Alpha-2): {
//   flag: "🇯🇵",
//   isoAlpha2: "JP",
//   isoAlpha3: "JPN",
//   unicode: "U+1F1EF,U+1F1F5",
//   nameEnglish: "Japan"
// }

// Using ISO alpha-3 code
const japanFlagAlpha3 = lookup.countryFlag.byCountryCode('JPN');
console.log('Japan Flag (Alpha-3):', japanFlagAlpha3);
// Output:
// Japan Flag (Alpha-3): {
//   flag: "🇯🇵",
//   isoAlpha2: "JP",
//   isoAlpha3: "JPN",
//   unicode: "U+1F1EF,U+1F1F5",
//   nameEnglish: "Japan"
// }

// Retrieving just the emoji flag using ISO alpha-2 code
const japanEmojiAlpha2 = lookup.countryFlag.emojiByCountryCode('JP');
console.log('Japan Emoji (Alpha-2):', japanEmojiAlpha2);
// Output:
// Japan Emoji (Alpha-2): 🇯🇵

// Retrieving just the emoji flag using ISO alpha-3 code
const japanEmojiAlpha3 = lookup.countryFlag.emojiByCountryCode('JPN');
console.log('Japan Emoji (Alpha-3):', japanEmojiAlpha3);
// Output:
// Japan Emoji (Alpha-3): 🇯🇵
```

### Alternative: Named Imports of Individual Flag Emojis

You can also import individual flags directly using named exports from the `flags/index.ts`. This method is less efficient but useful if you need to import multiple specific flags.

```typescript
import { DE, JP, ES } from 'country-flag-emojis/lib/flags';

console.log(DE); // 🇩🇪
console.log(JP); // 🇯🇵
console.log(ES); // 🇪🇸
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
  const flag = lookup.countryFlag.countryCodeToFlag('XYZ');
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
    isoAlpha3: string;   // The ISO 3166-1 alpha-3 country code
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
    isoAlpha3: string;   // Country ISO alpha-3 code (e.g., "AND")
    unicode: string;     // Unicode code points (e.g., "U+1F1EA,U+1F1FA")
    nameEnglish: string; // English name of the country (e.g., "Andorra")
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License