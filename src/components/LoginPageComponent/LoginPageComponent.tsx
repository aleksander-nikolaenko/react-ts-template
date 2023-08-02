import { NavLink } from 'react-router-dom';

import { ROUTES } from 'routes/routes.const';
import { ICONS } from 'ui-kit/icons';
import s from './LoginPageComponent.module.scss';

export const LoginPageComponent = () => {
  return (
    <section className={s.section}>
      <h2 className={s.titleDark}>{'Login page'}</h2>
      <ICONS.REGISTRATION_MONITOR className={s.image} />
      <NavLink to={ROUTES.HOME} className={s.button}>
        {'Home page'}
      </NavLink>
      <NavLink to={ROUTES.REGISTER} className={s.button}>
        {'Register page'}
      </NavLink>
    </section>
  );
};
