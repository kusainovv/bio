import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const ArticleTitle = styled.p`  
    font-size: 2rem;
    font-family: 'Red Hat Mono', monospace;
    color: darkgray;
`;

const References = styled.div``;

const ReferencesArticle = styled.div`
    margin: 40px 0;
`;

const CodeWarsBlock = styled.div`
    color: white;
    font-family: 'Red Hat Mono', monospace;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(60,59,73,1) 0%, rgba(106,87,139,1) 41%, rgba(73,88,91,1) 100%);
    padding: 20px;
`;

const Honor = styled.div``;
const Lang = styled.span``;

const Languages = styled.div``;

const Tip = styled.p`
    margin: 10px 0;
    text-decoration: underline;
    letter-spacing: 1px;
    font-family: 'Didact Gothic', sans-serif;
`;

const MediumBlock = styled.div``;

const MediumArticles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;
    padding: 10px;
    background: linear-gradient(90deg, rgba(60,59,73,1) 0%, rgba(106,87,139,1) 41%, rgba(73,88,91,1) 100%);
    color: white;
    border-radius: 8px;
`;

const Icon = styled.img`
    border-top-left-radius: 10%;
    border-bottom-right-radius: 100%;
`;

const LastArticle = styled.div`
`;

const LastArticleTitle = styled.p`
    margin: 10px;
    color: white;
`;

const LastArticleCategories = styled.div``;

const WorkExperience = styled.div`
    > ul > li {
        margin: 10px 0;
        font-size: 2rem;
    }
`;

const MainMessage = styled.p`
    padding: 10px 20px;
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
`;

export const Biography = () => {
    const [medium, setMedium] = useState<any>({
        logo: "",
        articles: []
    });

    const [codeWars, setCodeWars] = useState<any>({
        honor: 0,
        languages: []
    });

    useEffect(() => {
        axios.get(`https://www.codewars.com/api/v1/users/kusainovv`).then(r => {
            setCodeWars((prevState: any) => ({
                ...prevState,
                honor: r.data.honor,
                languages: [...Object.keys(r.data.ranks.languages)]
            }));
        });

        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kusainovratmir").then(r => {
            setMedium((prevState: any) => ({
                ...prevState,
                logo: r.data.feed.image,
                articles: [...r.data.items]
            }))
        })
    }, []);

    console.warn(medium.articles.slice(-1))

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

                    <ReferencesArticle>
                        <Text>
                            {dict.biography.references.description}
                        </Text>
                        <CodeWarsBlock>
                            <Honor>
                                <Tip>
                                    {dict.references.codeWars.points}
                                </Tip>
                                {codeWars.honor}
                            </Honor>
                            <Languages>
                                <Tip>
                                    {dict.references.codeWars.description}
                                </Tip>
                                {
                                    codeWars.languages.map((lang: string, key: number) => <Lang key={key}>{key !== codeWars.languages.length - 1 ? `${lang}, ` : lang}</Lang>)
                                }
                            </Languages>

                        </CodeWarsBlock>
                    </ReferencesArticle>

                    <ReferencesArticle>
                        <MediumBlock>
                            {dict.references.medium.title}
                        </MediumBlock>

                        <MediumArticles>
                            <Icon src={medium.logo} />
                            <LastArticle>
                                <LastArticleTitle>
                                    {medium.articles[0]?.title}
                                </LastArticleTitle>
                                <LastArticleCategories>
                                    {medium.articles[0]?.pubDate}
                                </LastArticleCategories>
                            </LastArticle>
                        </MediumArticles>

                    </ReferencesArticle>

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
                            dict.socials.map((social: { text: string, link: string }, key: number) => <Social key={key}>
                                {social.text}
                            </Social>)
                        }
                    </Socials>
                </NewArticle>

            </NewArticle>
        </Bio>
    </Wrapper>
}