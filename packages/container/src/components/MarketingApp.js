import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import {useHistory} from "react-router-dom"

export default () => {
  const ref = useRef(null);
  const history = useHistory()
  console.log("BEFORE", ref)
  useEffect(() => {
    console.log("INSIDE", ref.current)
    const {onParentNavigate} = mount(ref.current,{
      onNavigate:({pathname: nextPathName})=>{
        console.log("CROT FUNCTION EVENT")
        console.log("LOCAROOT",nextPathName)
        if(history.location.pathname !== nextPathName){
          history.push(nextPathName)
        }
      }
    });

    history.listen(onParentNavigate)
  },[]);

  console.log("AFTER", ref)

  return <div ref={ref} />;
};
