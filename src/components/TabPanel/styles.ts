import styled from '@emotion/styled';

export const TabsWrapper = styled.div`
  display: flex;
  height: 44px;
  width: calc(100vw - 234px);
  background-color: #27272a;
  border-bottom: 1px solid #414144;
  box-sizing: border-box;
`;

export const TabWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 10px;
  height: 44px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  border-right: 1px solid #414144;
  background-color: #27272a;

  ${(p) =>
    p.isActive
      ? 'color: white;'
      : `
        &:hover {
          cursor: pointer;
        }
      `}
`;

export const Icon = styled.div`
  svg {
    height: 16px;
    width: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
