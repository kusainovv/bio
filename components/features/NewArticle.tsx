import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const Wrapper = styled.div`
    margin: 50px 0;
`;

const Title = styled.p`
    font-size: 2rem;
    font-family: 'Red Hat Mono', monospace;
    color: darkgray;
`;

type Article = {
    children: ReactNode,
    article_title: string
}

export const NewArticle : React.FC<Article> = ({ children, article_title }) => {
    return <Wrapper>
        <Title>{article_title}</Title>
        {children}
    </Wrapper>
}