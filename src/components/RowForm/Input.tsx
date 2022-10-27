import { FC, useState } from 'react'

import * as S from './styles' 

type InputProps = {
  placeholder: string
}

export const Input: FC<InputProps> = ({placeholder}) => {
  const [value, setValue] = useState<string>('')
  
  return <S.InputField value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}/>
}
