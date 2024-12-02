import {Dimensions} from 'react-native'
import { createTamagui, createTokens, createFont } from 'tamagui'
const { widthPercentageToDP: wp, heightPercentageToDP: hp } = require('react-native-responsive-screen');


const { height, width } = Dimensions.get('window');
const size = {
  small: 12,
  medium: 19,
  large: 22,
  true: 16,
  responsiveContainerWidth: wp('100%'),
  responsiveContainerHeight: hp('100%'),
  marginLogo: hp((26 / height) * 100),
  marginText: hp((54/height)*100),
  heightContainerLogo: hp((296/width)*100)
}


const radius = {
  small: 4,
  medium: 8,
  large: 12,
  true: 8,
}

const zIndex = {
  low: 1,
  medium: 10,
  high: 100,
  true: 1,
};


const interFont = createFont({
  family: 'Poppins, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: '300',
    // 2 will be 300
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
})

export const tokens = createTokens({
  size,
  radius,
  zIndex,
  space: { small: 8, medium: 12, large: 16, true: 12 },
  color: {
    primary: '#3498db',
    secondary: '#2ecc71',
    tertiary: '#FFFFFF',
    quaternary: '#000000',
    quinary: '#736A6A',
    Senary: '#4285F4'

  },
})

const config = createTamagui({
  tokens,

  fonts: {
    heading: interFont,
    body: interFont,
  },

  themes: {
    light: {
      bg: tokens.color.tertiary,
      color: tokens.color.quaternary,
    },
    dark: {
      bg: tokens.color.quaternary,
      color: tokens.color.tertiary,
    },
  },

  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    ai: 'alignItems',
    as: 'alignSelf',
    bg: 'backgroundColor',
    br: 'borderRadius',
    h: 'height',
    jc: 'justifyContent',
    p: 'padding',
    mt: 'marginTop',
    fw: 'fontWeight',
    fs: 'fontSize',
  } as const,
})


type AppConfig = typeof config


declare module 'tamagui' {
  interface tamaguiCustomConfig extends AppConfig { }


  interface typeOverride {
    groupNames(): 'a' | 'b' | 'c'
  }
}

export default config
