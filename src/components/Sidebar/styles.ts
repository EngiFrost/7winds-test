import styled from '@emotion/styled';

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 8px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #414144;
`;

export const SidebarText = styled.div`
  display: flex;
  flex-direction: column;
  color: #a1a1aa;
`;

export const SidebarTabList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #27272a;
  box-sizing: border-box;
`;

export const TabWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 17px;
  height: 32px;
  align-items: center;
  padding: 0 23px;
  box-sizing: border-box;
  ${(p) => (p.isActive ? 'background-color: #A1A1AA;' : '')}

  &:hover {
    cursor: pointer;
    background-color: #a1a1aa;
  }
`;

export const Icon = styled.div`
  height: 17px;
  width: 17px;
  margin-bottom: 7px;
`;
