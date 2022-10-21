import { FC } from 'react';
import { LevelIcon } from './LevelIcon';

import * as S from './styles';

type LevelProps = {
  id: number;
  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
};

export const Level: FC<LevelProps> = ({ id, parent, type }) => {
  const currentLevelType: 1 | 2 | 3 = !parent ? 1 : type === 'level' ? 2 : 3;

  const createRow = () => {
    // TODO:
  };

  const renderContent = () => {
    switch (currentLevelType) {
      case 1:
        return (
          <>
            <LevelIcon type="l1" onClick={createRow} />
            <LevelIcon type="l2" onClick={createRow} isHidden />
            <LevelIcon type="f" onClick={createRow} isHidden />
          </>
        );
      case 2:
        return (
          <>
            <LevelIcon type="l2" onClick={createRow} />
            <LevelIcon type="f" onClick={createRow} isHidden />
          </>
        );
      case 3:
        return <LevelIcon type="f" onClick={createRow} />;
    }
  };

  return <S.Wrapper level={currentLevelType}>{renderContent()}</S.Wrapper>;
};

/*
level 1 -- left position
level 2 -- middle position
file with parent leval 1 -- middle position
file with parent leval 2 -- left position
*/
