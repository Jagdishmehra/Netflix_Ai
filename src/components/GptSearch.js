import React from 'react'

import GptSearchBar from './GptSearchBar';
import { LOGO_IMG } from '../utilities/constants';


const GptSearch = () => {
  return (
    
    <div className=''>
      
      
        <img src={LOGO_IMG} alt='bg-image'/>
      
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch;
