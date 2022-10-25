import { FC } from 'react';
import { tableStore } from '../../store/TableStore';
import { LevelConnector } from './LevelConnector';
import { LevelIcon } from './LevelIcon';

import * as S from './styles';

type LevelProps = {
  id: number;
  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
};

export const Level: FC<LevelProps> = ({ id, parent, type }) => {
  const currentLevelType: 1 | 2 | 3 = !parent ? 1 : type === 'level' ? 2 : 3;
  // TODO: level position const --> file can be a child of l1!

  const createRow = (iconType: 1 | 2 | 3) => {
    tableStore.saveRow({
      title: '', // TODO: from user input
      unit: '', // TODO: from user input
      quantity: 0, // TODO: from user input
      unitPrice: 0, // TODO: from user input
      price: 0, // TODO: from user input
      parent: iconType === 1 ?  null : iconType === 2 ? parent : id,
      type: iconType === 3 ? 'row' : 'level',
    });
  };

  const renderContent = () => {
    switch (currentLevelType) {
      case 1:
        return (
          <S.IconContainer>
            <LevelIcon type="l1" onClick={createRow} />
            <LevelIcon type="l2" onClick={createRow} isHidden />
            <LevelIcon type="f" onClick={createRow} isHidden />
          </S.IconContainer>
        );
      case 2:
        return (
          <S.IconContainer>
            <LevelIcon type="l2" onClick={createRow} />
            <LevelIcon type="f" onClick={createRow} isHidden />
          </S.IconContainer>
        );
      case 3:
        return (
          <S.IconContainer>
            <LevelIcon type="f" onClick={createRow} />
          </S.IconContainer>
        );
    }
  };

  return (
    <S.Wrapper level={currentLevelType}>
      {currentLevelType !== 1 && (
        <>
          <LevelConnector multiplier={1 /* FIXME: */} />
          <LevelConnector isHorizontal />
        </>
      )}

      {renderContent()}
    </S.Wrapper>
  );
};
