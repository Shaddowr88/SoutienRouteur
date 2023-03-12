

let ar = (el)=>{
    el.map((i,k) =>
    <li key={k.toString()} >
        <a  href={'/'+i} className="dropdown-item" >{i}</a>
    </li>
)}

const  DropMenu=(props)=>{

    return  <>
        {props.childs ?
            <ul className="dropdown-menu text-small">
                {props.childs.map((i,k) =>
                    <li key={k.toString()} >
                        <a  href={'/'+i} className="dropdown-item">{i}</a>
                    </li>
                )}
            </ul>
            :
            <ul className="dropdown-menu text-small" >
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        }

    </>
}
export default DropMenu;
