type CSSPreferences = {
  '--header-height': string;
  '--footer-height': string;
  '--main-bg-color': string;
  '--header-bg-color': string;
  '--main-font-color': string;
  '--nav-area-bg-color': string;
  '--text-accent-color': string;
  '--title-font': string;
  '--nav-area-font': string;
  '--nav-area-font-color': string;
  '--nav-area-font-size': string;
  '--main-padding-vert': string;
  '--main-padding-horiz': string;
  '--nav-padding-vert': string,
  '--nav-padding-horiz': string,
  '--header-padding-vert': string;
  '--header-padding-horiz': string;
  '--nav-text-shadow': string;
  '--hamburger-size': string;
  '--hamburger-animation-duration': string;
};

export const defaultCSSPreferences: CSSPreferences = {
  '--header-height': '4rem',
  '--footer-height': '1.75rem',
  '--main-bg-color': 'red',
  '--header-bg-color': '#3f3f2f',
  '--main-font-color': '#ffffffde',
  '--nav-area-bg-color': '#7f8472',
  '--text-accent-color': 'yellow',
  '--title-font': "Helvetica",
  '--nav-area-font': "Helvetica",
  '--nav-area-font-color': 'beige',
  '--nav-area-font-size': '1rem',
  '--main-padding-vert': '1rem',
  '--main-padding-horiz': '1rem',
  '--nav-padding-vert': '1rem',
  '--nav-padding-horiz': '1rem',
  '--header-padding-vert': '1rem',
  '--header-padding-horiz': '0.325rem',
  '--nav-text-shadow': '0.1rem 0.05rem 0.25rem #00000080',
  '--hamburger-size': 'calc(var(--header-height) * 0.85)',
  '--hamburger-animation-duration': '200ms'
};


export const getCurrentCSSValues = () => {
  const newValuesObj: Record<string, string> = {};
  const attributeList = Object.keys(defaultCSSPreferences);
  attributeList.forEach(attributeName => {
    const newValue = getComputedStyle(document.documentElement).getPropertyValue(attributeName).trim();
    newValuesObj[attributeName] = newValue;
  });
  console.table(newValuesObj);
  return newValuesObj;
}

export const applyCSSValues = (newValuesObj: Record<string, string>) => {
  for (let [attributeName, newValue] of Object.entries(newValuesObj)) {
    document.documentElement.style.setProperty(attributeName, newValue);
  }
}

