import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);
  console.log("BEFORE", ref)
  useEffect(() => {
    console.log("INSIDE", ref.current)
    mount(ref.current);
  });

  console.log("AFTER", ref)

  return <div ref={ref} />;
};
