const basePath = 'next-app';
console.log("🚀 ~ basePath:", basePath)

export const getPath = (mainPath: string) => {
  console.log("🚀 ~ getPath ~ process.env.NODE_ENV:", process.env.NODE_ENV)
  if (process.env.NODE_ENV === "development") {
    const fullPath = `${mainPath}`;

    return {
      fullPath,
      basePath: '',
    };
  }

  const fullPath = `${basePath}/${mainPath}`;

  return {
    fullPath,
    basePath,
  };
};
