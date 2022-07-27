import styled from '@emotion/styled';
import React from 'react';
import { dict } from '../dict';
import { NewArticle } from '../features/NewArticle';

const Wrapper = styled.div`
    margin-top: 50px;
`;

const Title = styled.p`
    margin: 0;
    font-size: 4rem;
`;

const Bio = styled.div`

`;

const Text = styled.p`
    line-height: 30px;
    font-size: 18px;

    > a {
        color: seashell;
    }
`;

const References = styled.div``;

const WorkExperience = styled.div`
    > ul > li {
        margin: 10px 0;
        font-size: 2rem;
    }
`;

const MainMessage = styled.p`
    padding: 10px 5%;
    font-size: 21px;
    color: lightslategrey;
`;

const TechnicaExperience = styled.div`
    > ul > li {
        margin: 10px 0;
        font-size: 20px;
    }
`;

const Socials = styled.div``;

const Social = styled.a`
    margin: 10px 0;
    width: fit-content;
    display: block;
    font-size: 2rem;
    cursor: pointer;
    color: white;
`;

export const Biography = () => {

    return <Wrapper>
        <Title>Resume</Title>

        <Bio>
            <NewArticle article_title={dict.biography.about_me.title}>

                <Text>
                    {dict.biography.about_me.description}
                </Text>

                <MainMessage>
                    {dict.biography.about_me.warningMessage}
                </MainMessage>
            </NewArticle>


            <NewArticle article_title={dict.biography.references.title}>

                <References>

                    <Text>
                        {dict.biography.meetings.description}
                        <a href='https://www.sgu.ru/news/2021-06-08/podvedeny-itogi-iv-chempionata-molodye-professionaly'>
                            {dict.biography.meetings.places.ws}
                        </a>

                    </Text>

                </References>

                <NewArticle article_title={dict.biography.work_experience.title}>
                    <WorkExperience>
                        <ul>
                            {
                                dict.work_experience.map((type: string, key: number) => <li key={key}>
                                    {type}
                                </li>)
                            }
                        </ul>
                    </WorkExperience>
                </NewArticle>

                <NewArticle article_title={dict.biography.technical_skills.title}>
                    <TechnicaExperience>
                        <ul>
                            {
                                dict.technica_experience.map((type: string, key: number) => <li key={key}>
                                    {type}
                                </li>)
                            }
                        </ul>
                    </TechnicaExperience>
                </NewArticle>

                <NewArticle article_title={dict.biography.contact_with_me.title}>
                    <Socials>
                        {
                            dict.socials.map((social: { text: string, link: string }, key: number) => <Social href={social.link} key={key}>
                                {social.text}
                            </Social>)
                        }
                    </Socials>
                </NewArticle>

            </NewArticle>
        </Bio>
    </Wrapper>
}