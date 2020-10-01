import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/homepage'));
const Heroes = lazy(() => import('./pages/heroes'));

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/heroes/:id' component={Heroes} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;