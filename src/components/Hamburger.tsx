import './Hamburger.css';
import classNames from 'classnames';

interface HamburgerProps {
  open: boolean,
  handleClick: () => void;
}

function Hamburger(props: HamburgerProps) {
  const { open, handleClick } = props;
  const hamburgerClass = classNames('hamburger', { open })
  
  return (
    <div onClick={handleClick} className={hamburgerClass}>
      <div className='hamburger-bar-container'>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
      </div>
    </div>
  )
}

export default Hamburger;