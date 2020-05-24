export const formatPokeId = (id: number): string => id.toString().padStart(3, '0');

export const getIdFromLink = (url: string): number => {
    const parseUrl = url.split('/').filter(Boolean);

    const id = parseUrl[parseUrl.length - 1];

    return id ? parseInt(id) : 0;
}
