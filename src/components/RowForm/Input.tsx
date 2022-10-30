import { FC, useState } from 'react'

import * as S from './styles' 

type InputProps = {
  name: string
  value: string
  placeholder: string
}

export const Input: FC<InputProps> = ({name, value, placeholder}) => {
  const [currentValue, setCurrentValue] = useState<string>(value)
  
  return <S.InputField name={name} value={currentValue} placeholder={placeholder} onChange={(e) => setCurrentValue(e.target.value)}/>
}
