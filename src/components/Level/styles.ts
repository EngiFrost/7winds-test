import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 6px;
  padding: 3px 4px;
  max-width: 80px;
  width: fit-content;
  box-sizing: border-box;

  &:hover {
    background: #414144;

    div {
      display: flex;
    }
  }
`;

export const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const HiddenContent = styled.div`
  display: none;
`;
