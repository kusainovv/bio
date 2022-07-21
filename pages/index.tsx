import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { Biography } from '../components/blocks/Biography'
import { Footer } from '../components/blocks/Footer';

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home: NextPage = () => {
  return <Wrapper>
    <Biography />
    <Footer />
  </Wrapper>
}


export default Home
