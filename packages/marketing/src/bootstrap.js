import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from "history"
import App from './App';

const mount = (el, param) => { 
  const history = param.defaultHistory || createMemoryHistory({
    initialEntries: [param.initialPath]
  });
  if(param && param.onNavigate){
    history.listen(param.onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return{
    onParentNavigate({pathname:nextPathName}){
      const { pathname } = history.location;
      if(pathname !== nextPathName){
        history.push(nextPathName)
      }

    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  
  if (devRoot) {
    mount(devRoot, {defaultHistory:createBrowserHistory()});
  }
}

export { mount };
