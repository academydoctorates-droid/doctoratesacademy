// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className='loader_spiner'>
        <div className='loaderSpiner'></div>
        <p style={{fontSize:24,fontWeight:'500'}}>Loading....</p>
    </div>
  );
};

export default Loading;
