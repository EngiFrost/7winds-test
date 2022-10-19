import { FC } from 'react';

import * as S from './styles';

type LevelProps = {};

export const Level: FC<LevelProps> = () => {
  return (
    <S.Wrapper>
      <img src={`${process.env.PUBLIC_URL}/svg/level_1_folder.svg`} alt="level 1" />
      <img src={`${process.env.PUBLIC_URL}/svg/level_2_folder.svg`} alt="level 2" />
      <img src={`${process.env.PUBLIC_URL}/svg/file.svg`} alt="file" />
    </S.Wrapper>
  );
};
