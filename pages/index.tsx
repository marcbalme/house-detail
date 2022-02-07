import styled from "styled-components";
import StyledBasicLayout from "styles/StyledLayout";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <StyledBasicLayout>
      <div>
        <p>hello</p>
        <Title>Title test de titre un plus long</Title>
      </div>
    </StyledBasicLayout>
  );
};

export default Home;
