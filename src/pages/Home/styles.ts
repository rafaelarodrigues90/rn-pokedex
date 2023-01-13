import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background.white};
  `};
`

export const Content = styled.View``

export const Footer = styled.View``
