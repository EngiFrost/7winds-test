import { FC } from 'react';
import { ELevelIcon } from '../../model/level';

import * as S from './styles';

type LevelIconProps = {
  type: keyof typeof ELevelIcon;
  onClick: (iconType: 1 | 2 | 3) => void;
  isHidden?: boolean;
};

const typeMap: Record<keyof typeof ELevelIcon, 1 | 2 | 3> = {
  // FIXME: move to entity
  l1: 1,
  l2: 2,
  f: 3,
};

export const LevelIcon: FC<LevelIconProps> = ({ type, onClick, isHidden = false }) => {
  const content = <S.Icon src={`${process.env.PUBLIC_URL}/svg/${ELevelIcon[type]}.svg`} alt="type" onClick={() => onClick(typeMap[type])} />;
  return isHidden ? <S.HiddenContent>{content}</S.HiddenContent> : content;
};
