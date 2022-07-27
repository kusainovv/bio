import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { Biography } from '../components/blocks/Biography'

const Wrapper = styled.div`
  width: 600px;
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home: NextPage = () => {
  return <Wrapper>
    <Biography />
  </Wrapper>
}


export default Home
