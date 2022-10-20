import { FC } from 'react';
import { ELevelIcon } from '../../model/level';

import * as S from './styles';

type LevelIconProps = {
  type: keyof typeof ELevelIcon;
  onClick: () => void;
  isHidden?: boolean;
};

export const LevelIcon: FC<LevelIconProps> = ({ type, onClick, isHidden = false }) => {
  const content = <img src={`${process.env.PUBLIC_URL}/svg/${ELevelIcon[type]}.svg`} alt="type" onClick={onClick} />;
  return isHidden ? <S.HiddenContent>{content}</S.HiddenContent> : content;
};
