export const pause = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const applyCSSValues = (newValuesObj: Record<string, string>) => {
  for (let [attributeName, newValue] of Object.entries(newValuesObj)) {
    document.documentElement.style.setProperty(attributeName, newValue);
  }
}