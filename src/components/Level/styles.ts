import styled from '@emotion/styled';
import { ROW_HEIGHT } from '../../model/row';

export const Wrapper = styled.div<{ level: 1 | 2 | 3 }>`
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

  ${(p) => {
    switch (p.level) {
      case 1:
        return 'margin-left: 0;';
      case 2:
        return 'margin-left: 24px;';
      case 3:
        return 'margin-left: 48px;';
    }
  }}
`;

export const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const HiddenContent = styled.div`
  display: none;
`;

export const Connector = styled.div<{multiplier: number | null, isHorizontal: boolean}>`
border: 1px solid #C6C6C6;

${(p) => p.multiplier ? `height: ${p.multiplier * ROW_HEIGHT}px;` : ''}
${(p) => p.isHorizontal ? 'width: 12px;' : ''}`