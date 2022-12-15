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


const WorkExperience = styled.div`
    > ul > li {
        margin: 10px 0;
        font-size: 2rem;
    }
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

const WorkExperienceRole = styled.div`
    margin-bottom: 0;

    > span {
        margin-left: 14px;
        font-size: 20px;
    }
`;

const WorkExperienceProof = styled.a`
    margin-top: 20px;
    display: block;
    font-size: 26px;
    color: white;
`;

const WorkExperienceDate = styled.div`
    font-size: 19px;
    margin-top: 6px;
    
    > span {
        margin-left: 20px;
        text-decoration: underline;
        font-size: 20px;
        color: orange;
    }
`;

export const Biography = () => {

    return <Wrapper>
        <Title>Resume</Title>

        <Bio>
            <NewArticle article_title={dict.biography.about_me.title}>

                <Text>
                    {dict.biography.about_me.description}
                </Text>
            </NewArticle>

                <NewArticle article_title={dict.biography.work_experience.title}>
                    <WorkExperience>
                        <ul>
                            <li>
                                <WorkExperienceRole>
                                    Frontend developer.
                                </WorkExperienceRole>
                                
                                <WorkExperienceDate>
                                    sep 2021 - nov 2022.
                                    <span>General: 1y, 3m</span>
                                </WorkExperienceDate>

                                <WorkExperienceProof href='https://www.linkedin.com/in/%D1%80%D0%B0%D1%82%D0%BC%D0%B8%D1%80-%D0%BA%D1%83%D1%81%D0%B0%D0%B8%D0%BD%D0%BE%D0%B2-b67b5a257'>
                                    LinkedIn proofs + Reference letter
                                </WorkExperienceProof>
                            </li>
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
        </Bio>
    </Wrapper>
}