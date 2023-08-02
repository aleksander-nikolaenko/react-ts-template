import { ICONS } from 'ui-kit/icons';

import s from './UnderDevelopment.module.scss';

export const UnderDevelopment = () => {
  return (
    <section className={s.section}>
      <div>
        <h2 className={s.titleDark}>{'Under development page'}</h2>
        <div className={s.imageWrapper}>
          {ICONS.UNDER_DEVELOPMENT_MAIN({
            className: s.main,
          })}
          {ICONS.GEAR_BLUE({ className: s.gearBlue })}
          {ICONS.GEAR_GRAY({ className: s.gearGray })}
          {ICONS.CIRCLE_BLUE({ className: s.circleBlue })}
          {ICONS.CIRCLE_GRAY({ className: s.circleGray })}
        </div>
      </div>
    </section>
  );
};
