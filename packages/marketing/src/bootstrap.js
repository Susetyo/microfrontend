import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory} from "history"
import App from './App';

// IKI MOUNT COMPONENT E
const mount = (el, param) => { 
  const history = createMemoryHistory();
  console.log("CROT NAVIGATE",param)
  if(param){
    history.listen(param.onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return{
    onParentNavigate({pathname:nextPathName}){
      console.log("CROT NAVIGATE FROM PARENT",nextPathName);
      const { pathname } = history.location;
      console.log("CROT NAVIGATE FROM pathName",pathname);
      if(pathname !== nextPathName){
        history.push(nextPathName)
      }

    }
  }
};

// JIKA MODE DEVELOPMENT DAN ISOLATION
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
