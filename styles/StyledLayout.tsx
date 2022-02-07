import GlobalStyle from "./GlobalStyle";

const StyledBasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default StyledBasicLayout;
