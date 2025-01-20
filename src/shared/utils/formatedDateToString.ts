export const formatedDateToString = (dateString: string, locale = 'ru-RU') => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    return date.toLocaleDateString(locale);
};
