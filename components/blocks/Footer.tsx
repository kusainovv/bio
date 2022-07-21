import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
    padding: 20px;
    font-size: 30px;
    color: black;
    background-color: white;
`;

const Text = styled.p``;

export const Footer = () => {
    return <Wrapper>
        {
            [
                `This's just static site for displaying text without animation and complex interface.`,
                `I can do much better.`
            ].map((text : string, key: number) => <Text key={key}>{text}</Text>)
        }
    </Wrapper>
}