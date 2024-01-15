import React from 'react';

import { Octicons } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors
} from './../components/styles';

import { Formik } from 'formik';
import { View } from 'react-native';

const { dark } = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
                <PageTitle>Logowanie</PageTitle>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                        <MyTextInput
                            label="Email"
                            icon="mail"
                            placeholder="email@emai.le"
                            placeholderTextColor={dark}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                    </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}

export default Login;