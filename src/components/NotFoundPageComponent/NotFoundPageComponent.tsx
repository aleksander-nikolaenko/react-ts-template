import { NavLink } from 'react-router-dom';

import { ICONS } from 'ui-kit/icons';
import { ROUTES } from 'routes/routes.const';

import s from './NotFoundPageComponent.module.scss';

export const NotFoundPageComponent = () => {
  return (
    <section className={s.section}>
      <h2 className={s.titleDark}>{'404 Not Found'}</h2>
      <ICONS.PAGE_404 className={s.image} />
      <NavLink to={ROUTES.HOME} className={s.button}>
        {'Home page'}
      </NavLink>
    </section>
  );
};
