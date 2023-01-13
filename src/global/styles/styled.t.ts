import 'styled-components'
import theme from './theme'

declare module 'styled-components' {
  // inferência de tipo
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}

/**
 * Conceitos:
 * - tipagem manual
 * - inferência de tipo
 */
