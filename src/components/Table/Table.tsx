import { FC } from 'react'

import * as S from './styles'

type TableProps = {}

export const Table: FC<TableProps> = () => {
  const openedPages: [] = [] // TODO: get from store
  const rows: [] = [] // TODO: get from store

  return <S.Wrapper>
    <S.TableHeader>
      {openedPages.map(page => <></>)}
    </S.TableHeader>
    <S.TableContent>
      {rows.map(row => <></>)}
    </S.TableContent>
  </S.Wrapper>
}