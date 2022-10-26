import { FC } from 'react';
import { TLevel } from '../../model/level';
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
  const currentTLevel: TLevel = !parent ? 1 : type === 'level' ? 2 : 3;
  const levelPosition: TLevel = !parent ? 1 : tableStore.getRow(parent).parent === null ? 2 : 3

  const createRow = (iconType: TLevel) => {
    tableStore.saveRow({
      title: '', // TODO: from user input
      unit: '', // TODO: from user input
      quantity: 0, // TODO: from user input
      unitPrice: 0, // TODO: from user input
      price: 0, // TODO: from user input
      parent: iconType === currentTLevel ? parent : id,
      type: iconType === 3 ? 'row' : 'level',
    });
  };

  const renderContent = () => {
    switch (currentTLevel) {
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
    <S.Wrapper position={levelPosition}>
      {currentTLevel !== 1 && (
        <>
          <LevelConnector multiplier={tableStore.getRowPosition(id, parent!)} />
          <LevelConnector isHorizontal />
        </>
      )}

      {renderContent()}
    </S.Wrapper>
  );
};
