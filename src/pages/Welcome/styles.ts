import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.backgroundWater};
  `};
`

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.text_white};
    margin-top: 20px;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.text_white};
    margin-top: 20px;
  `}
`

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background: ${theme.colors.types.water};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg);
  `}
`

export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 30%;
    background: ${theme.colors.background};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
  `}
`
