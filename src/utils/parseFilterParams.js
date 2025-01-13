const parseString = (value) => {
  return typeof value === 'string' ? value : undefined;
};

export const parseFilterParams = (query) => {
  const { description } = query;

  const parsedDescription = parseString(description);

  return {
    description: parsedDescription,
  };
};
