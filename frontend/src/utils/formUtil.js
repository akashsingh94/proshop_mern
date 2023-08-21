export function getFormErrors(data) {
  if (!data) return undefined;
  let hasError = Object.values(data.errors).some((v) => v);
  if (hasError) {
    return {
      hasError,
      errors: data.errors,
    };
  }
  const clonedData = { ...data };
  delete clonedData.errors; // delete error object from formData

  const errors = Object.keys(clonedData).reduce((currErr, key) => {
    if (!clonedData[key]) {
      hasError = true;
      currErr = { ...currErr, [key]: `${key} is required` };
    }
    return currErr;
  }, {});

  return {
    hasError,
    errors,
  };
}
