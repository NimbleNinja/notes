export const getTagsFromString = str => {
  return str.split(' ').reduce((acc, tag) => {
    if (acc.includes(tag)) {
      return acc;
    }

    if (tag.startsWith('#')) {
      return [...acc, tag];
    }

    return acc;
  }, []);
};
