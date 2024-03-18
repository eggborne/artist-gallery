// import { useEffect } from 'react';
import './Admin.css'
import classNames from 'classnames';

// interface AdminProps {
// pageShowing: string,
// }

function Admin() {
  const adminClass = classNames('site-section', 'admin');
  
  return (
    <div className={adminClass}>
      <div className='input-row'>
        <input type='color' defaultValue={'#ff0000'} /> 
      </div>
    </div>
  )
}

export default Admin;