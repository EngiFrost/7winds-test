import styled from '@emotion/styled';
import { ROW_HEIGHT } from '../../model/row';

export const Wrapper = styled.div`
  background-color: #202124;
  height: calc(100vh - 88px);
  padding: 0 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  th,
  td {
    padding: 0 12px;
    margin: auto 0;
    border-color: #414144;
    height: ${ROW_HEIGHT}px;
    box-sizing: border-box;
  }
`;
