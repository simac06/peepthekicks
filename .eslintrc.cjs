module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/all",
  ],
  // ...
  overrides: [
    {
      files: ["*.astro"],
      // ...
      processor: "astro/client-side-ts", // <- Uses the "client-side-ts" processor.
      rules: {
        // ...
      },
    },
    // ...
  ],
};