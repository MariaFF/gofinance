//arquivo para sobreescrever tipos
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme

  //acrescentando o nosso theme ao default theme do styled-components
  export interface DefaultTheme extends ThemeType {}
}