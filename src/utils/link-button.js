import React from 'react';
import './index.less'
export default function LinkButton(props){
    console.log('link-button',props)
    return <button {...props} className='link-button'></button>
}
