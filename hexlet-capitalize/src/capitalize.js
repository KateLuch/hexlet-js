const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const [firstChar, ...restText] = text;
    return `${firstChar.toUpperCase()}${restText.join('')}`;
};
export default capitalize;
