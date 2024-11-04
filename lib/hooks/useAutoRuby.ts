import { useState, useRef, KeyboardEvent } from 'react';

import { AutoRuby } from '@phaier/japanese/dist/auto-ruby';

export function useAutoRuby(): [string, (e: KeyboardEvent<HTMLInputElement>) => void] {
  const [ruby, setRuby] = useState<string>('');
  const autoRuby = useRef<AutoRuby>(new AutoRuby());

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    autoRuby.current.keypress(e, e.currentTarget.value);

    setRuby(autoRuby.current.getRuby());
  };

  return [ruby, onKeyDown];
}
