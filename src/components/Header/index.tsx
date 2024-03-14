import igniteLogo from '../../assets/ignite-logo.svg';

import style from './style.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <img
        src={igniteLogo}
        alt="Logotipo do Ignite"
      />
    </header>
  );
}