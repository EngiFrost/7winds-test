import { FC } from 'react';

import * as S from './styles';

type LevelProps = {
  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
};

export const Level: FC<LevelProps> = ({ parent, type }) => {
  return (
    <S.Wrapper>
      {!parent ? (
        <>
          <Level1Icon />
          <S.HiddenContent>
            <Level2Icon />
            <FileIcon />
          </S.HiddenContent>
        </>
      ) : type === 'level' ? (
        <>
          <Level2Icon />
          <S.HiddenContent>
            <FileIcon />
          </S.HiddenContent>
        </>
      ) : (
        <FileIcon />
      )}
    </S.Wrapper>
  );
};

const Level1Icon = () => {
  return <img src={`${process.env.PUBLIC_URL}/svg/level_1_folder.svg`} alt="level 1" />;
};

const Level2Icon = () => {
  return <img src={`${process.env.PUBLIC_URL}/svg/level_2_folder.svg`} alt="level 2" />;
};

const FileIcon = () => {
  return <img src={`${process.env.PUBLIC_URL}/svg/file.svg`} alt="file" />;
};
