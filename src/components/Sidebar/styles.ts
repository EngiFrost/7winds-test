import styled from '@emotion/styled';

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 8px 20px;
`;

export const SidebarText = styled.div`
  display: flex;
  flex-direction: column;
  color: #a1a1aa;
`;

export const SidebarTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const SidebarSubtitle = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

export const SidebarIcon = styled.div``; // TODO: ???

export const SidebarTabList = styled.div`
  // FIXME: It works without these styles!
  // TODO: make it gray when collapsed!
  display: flex;
  flex-direction: column;
  background-color: #27272a;
  border: 1px solid #414144;
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
    background-color: #A1A1AA;
  }
`;

export const TabLabel = styled.div`
  size: 14px;
  line-height: 17px;
  color: white;
`;

export const Icon = styled.div`
  height: 17px;
  width: 17px;
  margin-bottom: 5px;

  & > svg {
    fill: white;
  }
`;
