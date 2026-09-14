const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

export class logoDevApi {
    getUrlToLogo = source => `${logoApiUrl}/${new URL(source.url.toString()).host}?token=${apiKey}`;
}