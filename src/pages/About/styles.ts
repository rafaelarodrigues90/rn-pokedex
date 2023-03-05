import styled, { css } from 'styled-components/native'
import { TypeName } from '.'
import * as Progress from 'react-native-progress'

type TypeProps = {
  type: TypeName
}

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundTypes[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  `};
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`
export const ContentImage = styled.View`
  position: relative;
`
export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`

export const Content = styled.View`
  margin-left: 30px;
`

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.text.light_text};
  `};
`

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-size: 28px;
    line-height: 38px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.text.white};
    text-transform: capitalize;
  `};
`

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`

export const PokemonType = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: 61px;
    height: 25px;
    background: ${theme.colors.types[type]};
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 5px;
  `};
`

export const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`

export const DotsImage = styled.Image`
  width: 85px;
  position: absolute;
  right: -20px;
  top: 220px;
`

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 20px;
    background: ${theme.colors.background};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: -40px;
  `}
`

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.types[type]};
  `};
`

export const StatsBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
`

export const Attributes = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 110px;
    text-transform: capitalize;
    color: ${theme.colors.text.light_text};
  `};
`

export const AttributeNumber = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.text.grey};
    margin-left: 20px;
  `};
`

export const ContentBar = styled.View`
  margin-left: 20px;
`

export const Ability = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 20px;
    text-transform: capitalize;

    color: ${theme.colors.text.grey};
  `}
`

export const ProgressBar = styled(Progress.Bar).attrs({})<TypeProps>``

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
`
