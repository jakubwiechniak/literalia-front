import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import bg from './../assets/tlo.png';

export const Colors = {
    light: "#e0e0e0",
    dark: "#181818",
    purpleLight: "#270a46",
    purpleDark: "#21063c"
}

const { light, dark, purpleLight, purpleDark } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${purpleDark};
    background-image: ${bg};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 248px;
    margin-top: 50px;
`

export const PageTitle = styled.Text`
    font-size: 26px;
    text-align: center;
    font-weight: bold;
    color: ${light};
    padding: 10px;
`

export const StyledFormArea = styled.View`
    width: 90%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${light};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${dark};
`

export const StyledInputLabel = styled.Text`
    color: ${dark};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${dark};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`

export const ButtonText = styled.Text`
    color: ${light};
    font-size: 16px;
`