import styled from "styled-components";
import StyledBasicLayout from "layout/Basic";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <StyledBasicLayout>
      <div>
        <p>hello</p>
        <Title>Title</Title>
      </div>
    </StyledBasicLayout>
  );
};

export default Home;
