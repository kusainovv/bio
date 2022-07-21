import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

const Article = styled.div`
    margin: 50px 0;
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
            <Article>
                <ArticleTitle>about_me()</ArticleTitle>

                <Text>
                    {
                        `
                            Junior+/Middle Front-end developer with a desire to improve, receive new tasks, learn new
                            technologies, apply new approaches and become a developer with experience. My goal as
                            Fronte-end developer is to apply my technical skills, utilize my knowledge, get knowledge
                            from other developers and just do my work by 100%. 
                            I strive to bring success to the company, learn and educate others, develop IT
                            solutions and solve problems!
                        `
                    }
                </Text>

                <MainMessage>
                    {
                        `
                            I read articles by other developers, attend IT events, 
                            analyze the code of other developers,
                            look for only relevant solutions and am always ready to offer my solution. My interest in
                            creating a project is very helpful in meeting the company's technical requirements. I am a team
                            player, ready to adapt to changes and big challenges
                            solver. Having said that, I can assure you that I can be a useful developer for your company
                        `
                    }
                </MainMessage>
            </Article>

            <article>
                <ArticleTitle>references()</ArticleTitle>

                <References>

                    <ReferencesArticle>
                        <Text>
                            {
                                `
                                    For improving my tech skills I often use CodeWars and try to solve some interesting tasks 
                                `
                            }

                        </Text>
                        <CodeWarsBlock>
                            <Honor>
                                <Tip>
                                    Honor:
                                </Tip>
                                {codeWars.honor}
                            </Honor>
                            <Languages>
                                <Tip>
                                    Languages that i use:
                                </Tip>
                                {
                                    codeWars.languages.map((lang: string, key: number) => <Lang key={key}>{key !== codeWars.languages.length - 1 ? `${lang}, ` : lang}</Lang>)
                                }
                            </Languages>

                        </CodeWarsBlock>
                    </ReferencesArticle>

                    <ReferencesArticle>
                        <MediumBlock>
                            When i want to share with my experience and find some interesting information - i use Medium
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
                        {
                            `
                                Also i often visit some programming meetings, for example:
                            `
                        }
                        <a href='https://www.sgu.ru/news/2021-06-08/podvedeny-itogi-iv-chempionata-molodye-professionaly'>Worldskills(I place)</a>

                    </Text>

                </References>

                <Article>
                    <ArticleTitle>work_experience()</ArticleTitle>
                    <WorkExperience>
                        <ul>
                            {
                                [
                                    "3+ company",
                                    "5+ offer",
                                    "1y+ experience",
                                    "2y+ programming"
                                ].map((type: string, key: number) => <li key={key}>
                                    {type}
                                </li>)
                            }
                        </ul>
                    </WorkExperience>
                </Article>

                <Article>
                    <ArticleTitle>technical_skills()</ArticleTitle>
                    <TechnicaExperience>
                        <ul>
                            {
                                [
                                    "React, TS, Next.js, Python, Clojure",
                                    "MATERIAL UI, ANT-DESIGN and other ui libs",
                                    "Redux, Mobx, Recoil and other sm",
                                    "CSS Preprocessors, PostCSS",
                                    "Architectural patterns",
                                    "Webpack",
                                    "Git / Github / Bitbucket / Gitlab",
                                    "Responsive Design, Cross-Browser Development",
                                    "Smart approach to layout / Standarts, Screen Reader and etc",
                                    "CSR, SSR, SSG, WPA. "
                                ].map((type: string, key: number) => <li key={key}>
                                    {type}
                                </li>)
                            }
                        </ul>
                    </TechnicaExperience>
                </Article>

                <Article>
                    <ArticleTitle>contact_with_me()</ArticleTitle>
                    <Socials>
                        {
                            [
                                { text: "Telegram", link: "" },
                                { text: "CodeWars", link: "" },
                                { text: "Medium", link: "" },
                            ].map((social : { text: string, link: string }, key: number) => <Social key={key}>
                                {social.text}
                            </Social>)
                        }
                    </Socials>
                </Article>

            </article>
        </Bio>
    </Wrapper>
}