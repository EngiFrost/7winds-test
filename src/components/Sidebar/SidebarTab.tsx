import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';

import * as S from './styles';

type SidebarTabProps = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const SidebarTab: FC<SidebarTabProps> = observer((props) => {
  const { label, icon, isActive, onClick } = props;

  return (
    <S.TabWrapper isActive={isActive} onClick={onClick}>
      <S.Icon>{icon}</S.Icon>
      <Typography variant='body2'>{label}</Typography>
    </S.TabWrapper>
  );
});
