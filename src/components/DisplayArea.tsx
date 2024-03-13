import './DisplayArea.css'

interface DisplayAreaProps {
  pageShowing: string,
}

function DisplayArea(props: DisplayAreaProps) {
  return (
    <div className='display-area'>

      displaying {props.pageShowing}
    </div>
  )
}

export default DisplayArea;