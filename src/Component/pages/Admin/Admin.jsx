import React, { useState, useEffect } from 'react';
import Bowser from 'bowser';

function Admin() {
  const [browser, setBrowser] = useState('');
  const[plateform,setplateform]= useState();
  const[vendor,setverdor]= useState('');
  const[type,setype]= useState();
  const[engine,setengine]= useState();
  const[os,setos]= useState('')
  // console.log(window.navigator.userAgentData.mobile)
  // window.navigator.userAgentData.mobile ? console.log("mobile"):console.log("wed")
  // console.log(window.navigator.userAgentData.platform)
  // console.log(window.navigator.userAgentData.brands)
  useEffect(() => {
    setBrowser(Bowser.getParser(window.navigator.userAgent).getBrowserName());
    
    setos(Bowser.getParser(window.navigator.userAgent).getOSVersion())
    setplateform(Bowser.getParser(window.navigator.userAgent).getPlatform())
    setype(Bowser.getParser(window.navigator.userAgent).getPlatform().type)
    setverdor(Bowser.getParser(window.navigator.userAgent).getPlatform().vendor)
    setengine(Bowser.getParser(window.navigator.userAgent).getEngine())
    
  }, []);
  
console.log(type);
console.log(vendor)
console.log(plateform)
console.log(engine)
  return (
    <div>
      <p>Browser:-  : {browser}</p>
     
      <p>mobile  :- {type || "null"}</p>
      <p>plateform:-  {vendor|| "null"}</p>
    
      <p>os version:- {os}</p>
    </div>
  );
}

export default Admin;