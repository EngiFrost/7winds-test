import { FC, useState } from 'react';

import * as S from './styles';

type InputProps = {
  name: string;
  value: string;
  placeholder: string;
  handleSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void; // FIXME:
};

export const Input: FC<InputProps> = ({ name, value, placeholder, handleSubmit }) => {
  const [currentValue, setCurrentValue] = useState<string>(value);

  return <S.InputField name={name} value={currentValue} placeholder={placeholder} onChange={(e) => setCurrentValue(e.target.value)} onKeyDown={handleSubmit} />;
};
