import React, { FC } from 'react';
import styled from 'styled-components/native';

const HomePage: FC = () => {
    return (
        <TextWrap>
            <HomeText1>Welcome!</HomeText1>
            <ImageLogo source={require('../assets/logoHome.png')}/>
            <HomeText2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at augue turpis. In sed magna quis tellus pulvinar ornare. Donec eget dignissim nisi, id viverra erat. Sed pulvinar dolor sed nibh tristique, at cursus sem consequat. Morbi feugiat libero id lectus semper efficitur. Duis et quam quis augue hendrerit lobortis. Sed ante nibh, lacinia eu fringilla finibus, convallis non lorem. Donec varius ultricies lorem, id sagittis tellus. Morbi eget porta nisl. Cras lobortis nulla turpis, at sodales lacus ornare vestibulum. Fusce suscipit mi diam, ut gravida massa venenatis eu.
            Quisque pulvinar sagittis felis. Etiam eget purus consequat nisi viverra bibendum a id enim. </HomeText2>
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
    font-size: 30px;
    text-align: center;
    color: white;
`;
const HomeText2 = styled.Text`
    margin: 1px 1px;
    font-size: 12px;
    color: white;
`;

const ImageLogo = styled.Image`
    opacity: 0.8;
    margin: 5px 38px;
    width: 50%;
 `;

export default HomePage;




