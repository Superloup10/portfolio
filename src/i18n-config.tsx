export const i18n = {
    defaultLanguage: "fr",
    locales: ["fr", "en"]
} as const;

export type Locale = (typeof i18n)["locales"][number];
