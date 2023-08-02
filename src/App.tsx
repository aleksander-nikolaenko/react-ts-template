import { Suspense } from 'react';
import { AppRoutes } from 'routes';
import { Spinner } from 'ui-kit';

import './styles/global.scss';
import './styles/variables.scss';

export const App = () => {
  return (
    <Suspense fallback={<Spinner className='spinnerPosition' />}>
      <AppRoutes />
    </Suspense>
  );
};
