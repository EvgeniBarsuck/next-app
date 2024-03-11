const basePath = '/next-app';

export const getPath = (mainPath: string) => {
  if (process.env.NODE_ENV === "development") {
    const fullPath = `${mainPath}`;

    return {
      fullPath,
      basePath: "",
    };
  }

  const fullPath = basePath + mainPath;

  return {
    fullPath,
    basePath,
  };
};
