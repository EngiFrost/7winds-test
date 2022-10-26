import { FC } from 'react';
import { ELevelIcon, TLevel, typeMap } from '../../model/level';

import * as S from './styles';

type LevelIconProps = {
  type: keyof typeof ELevelIcon;
  onClick: (iconType: TLevel) => void;
  isHidden?: boolean;
};

export const LevelIcon: FC<LevelIconProps> = ({ type, onClick, isHidden = false }) => {
  const content = <S.Icon src={`${process.env.PUBLIC_URL}/svg/${ELevelIcon[type]}.svg`} alt="type" onClick={() => onClick(typeMap[type])} />;
  return isHidden ? <S.HiddenContent>{content}</S.HiddenContent> : content;
};
