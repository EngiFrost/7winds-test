import { FC } from 'react';
import { ELevelIcon } from '../../model/level';
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

  const createRow = (iconType: keyof typeof ELevelIcon) => {
    // FIXME:
    tableStore.saveRow({
      title: '',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      price: 0,
      parent: iconType === 'l1' ? null : id,
      type: iconType === 'f' ? 'row' : 'level',
    });
  };

  const renderContent = () => {
    switch (currentLevelType) {
      case 1:
        return (
          <S.IconContainer>
            <LevelIcon type="l1" onClick={() => createRow('l1')} />
            <LevelIcon type="l2" onClick={() => createRow('l2')} isHidden />
            <LevelIcon type="f" onClick={() => createRow('f')} isHidden />
          </S.IconContainer>
        );
      case 2:
        return (
          <S.IconContainer>
            <LevelIcon type="l2" onClick={() => createRow('l2')} />
            <LevelIcon type="f" onClick={() => createRow('f')} isHidden />
          </S.IconContainer>
        );
      case 3:
        return (
          <S.IconContainer>
            <LevelIcon type="f" onClick={() => createRow('f')} />
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
