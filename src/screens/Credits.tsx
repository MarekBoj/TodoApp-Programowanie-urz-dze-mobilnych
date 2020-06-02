import React, { FC } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const About: FC = () => {
    return (
        
    <TextWrap>
    <HomeText1>About Author!</HomeText1>
    <HomeText2>Ut in neque mi. Morbi facilisis ante a commodo tristique. Sed nunc nisl, ultrices ut sapien in, mattis bibendum dolor. Maecenas sit amet posuere mauris. Phasellus dapibus, ante sed lobortis molestie, odio dolor dictum elit, ut laoreet lorem neque id nulla. </HomeText2>
    <ImageLogo source={require('../assets/Author.jpg')}/>
    </TextWrap>

    );
};

const TextWrap = styled.ScrollView`
    padding: 100px;
    min-height:100%;
    background-color: #1f1f1f;
`;

const HomeText1 = styled.Text`
    margin: 2px 2px;
    font-size: 20px;
    text-align: center;
    color: white;
`;
const HomeText2 = styled.Text`
    margin: 1px 1px;
    font-size: 12px;
    text-align: center;
    color: white;
`;
const ImageLogo = styled.Image`
    opacity: 0.8;
    margin: 5px 39px;
    width: 50%;
 `;
export default About;