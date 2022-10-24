import { FC } from 'react';

import * as S from './styles';

type VerticalLevelConnector = {
  multiplier: number;
  isHorizontal?: false;
};

type HorizontalLevelConnector = {
  multiplier?: null;
  isHorizontal: boolean;
};

type LevelConnectorProps = VerticalLevelConnector | HorizontalLevelConnector; // FIXME: use generics

export const LevelConnector: FC<LevelConnectorProps> = (props) => {
  const { multiplier = null, isHorizontal = false } = props;

  return <S.Connector multiplier={multiplier} isHorizontal={isHorizontal} />;
};
