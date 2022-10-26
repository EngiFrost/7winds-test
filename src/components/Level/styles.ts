import styled from '@emotion/styled';
import { TLevel } from '../../model/level';
import { ROW_HEIGHT } from '../../model/row';

export const Wrapper = styled.div<{ position: TLevel }>`
  position: relative;
  width: fit-content;
  height: fit-content;

  ${(p) => {
    switch (p.position) {
      case 1:
        return 'margin-left: 0;';
      case 2:
        return 'margin-left: 24px;';
      case 3:
        return 'margin-left: 48px;';
    }
  }}
`;

export const IconContainer = styled.div`
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
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const HiddenContent = styled.div`
  display: none;
`;

export const Connector = styled.div<{ multiplier: number | null; isHorizontal: boolean }>`
  border: 0.5px solid #c6c6c6;
  background-color: #c6c6c6;
  z-index: 0;

  position: absolute;
  left: -9px;

  ${(p) =>
    p.multiplier &&
    `
    height: calc(${p.multiplier * ROW_HEIGHT}px - 8px); 
    width: 0;
    top: calc(50% - ${p.multiplier * ROW_HEIGHT}px + 7px);
  `}

  ${(p) =>
    p.isHorizontal &&
    `
    width: 16px; 
    height: 0;
    top: calc(50% - 1px);
  `}
`;
