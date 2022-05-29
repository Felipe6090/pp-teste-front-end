const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptop: `@media (max-width: ${size.laptop})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  desktop: `@media (max-width: ${size.desktop})`,
  desktopL: `@media (max-width: ${size.desktop})`,
};
