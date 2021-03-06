import gray from "gray-percentage"

const colors = {
  keguigong: {
    white: `#f8f8f8`,
    LessWhite: `#e1e1e1`,
    lightGray: `#5f5f5f`,
    lightWhite: `#a1a1a1`,
    dark: `#222222`,
  },
  nio: {
    greyLighten3: `#F7F7F8`,
    grayLighten2: `#F0F1F2`,
    grayLighten1: `#CDCED4`,
    gray: `#9B9DA9`,
    grayDarken1: `#696D7F`,
    grayDarken2: `#363C54`,
    grayDarken3: `#2B2B2B`,
    white: `#ffffff`,
    black: `#000000`,
    red: `#EF7575`,
    redLighten1: `#FF5A53`,
    redLighten2: `#FF772F`,
    redDarken1: `#E83131`,
    orange: `#FFCE27`,
    green: `#24BD4C`,
    teal: `#00BEBE`,
    tealLighten1: `#B7E8EB`,
    tealLighten2: `#E7F4F8`,
    blue: `#4BACF1`,
    blueLighten1: `#70B7E9`
  },
  // original palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  gatsby: `#663399`, // was #744c9e
  gatsbyDark: `#442266`,
  gatsbyDarker: `#221133`,
  lemon: `#ffdf37`,
  mint: `#73fff7`,
  lilac: `#8c65b3`,
  lavender: `#b190d5`,
  wisteria: `#ccb2e5`,
  // accent color from the "bolder palette" by @ArchieHicklin
  // @see https://github.com/gatsbyjs/gatsby/issues/1173#issuecomment-309415650
  accent: `#ffb238`, // "Mustard",
  success: `#37b635`,
  warning: `#ec1818`,
  accentLight: `#ffeccd`,
  accentDark: `#9e6100`,
  skyLight: `#dcfffd`,
  skyDark: `#0a75c2`,
  ui: {
    border: `#ede7f3`,
    bright: `#e0d6eb`,
    light: `#f5f3f7`,
    whisper: `#fbfafc`,
  },
  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    lightCopy: gray(35, 270),
    calm: gray(46, 270),
    bright: gray(64, 270),
    light: gray(80, 270),
    superLight: gray(96, 270),
  },
  code: {
    bgInline: `#fbf2e9`,
    bg: `#fdfaf6`,
    border: `#faede5`,
    text: `#866c5b`,
    remove: `#e45c5c`,
    add: `#4a9c59`,
    selector: `#b3568b`,
    tag: `#4084a1`,
    keyword: `#538eb6`,
    comment: `#6f8f39`,
    punctuation: `#53450e`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
  },
}

export default colors
