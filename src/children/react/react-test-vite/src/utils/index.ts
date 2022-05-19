export const getStaticFilePath = (type: string, name: string, suffix: string) => {
  return new URL(`../assets/${type}/${name}.${suffix}`, import.meta.url).href
}