export const slugify = (text) => {
    if (!text) return "";

    return text
        .toString()
        .toLowerCase()
        .normalize('NFD') // Normalize to decomposite accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-'); // Replace multiple - with single -
};
