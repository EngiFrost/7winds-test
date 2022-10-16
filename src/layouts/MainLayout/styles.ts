import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const AppBarSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 44px;
  padding: 0 20px;
  background-color: #27272a;
  box-sizing: border-box;
  border: 1px solid #414144;
`;

export const AppBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
  margin-right: 15px;

  svg:hover {
    cursor: pointer;
  }
`;

export const AppBarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const MainSection = styled.div`
  display: flex;
`;

export const ContentSection = styled.div``;

export const TabsWrapper = styled.div`
  width: 100%;
  height: 44px;
`;
