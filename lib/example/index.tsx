import * as React from 'react';

import { createRoot } from 'react-dom/client';

import { useAutoRuby } from '../hooks/useAutoRuby';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [ruby, onKeyDown] = useAutoRuby();

  const inputText = React.useId();
  const inputRuby = React.useId();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('handleKeyDown', e);
    onKeyDown(e);
  };

  return (
    <div className="container" style={{ marginTop: '4rem' }}>
      <div className="row">
        <div className="col">
          <form>
            <div className="row mb-3">
              <label htmlFor={inputText} className="col-sm-2 col-form-label">
                Text
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id={inputText} onKeyDown={handleKeyDown} />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor={inputRuby} className="col-sm-2 col-form-label">
                Ruby
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id={inputRuby} readOnly value={ruby} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('application')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
