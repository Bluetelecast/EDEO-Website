import { Link, useLocation } from 'react-router-dom';

const LinkItem = (props)=>{
    const {pathname} = useLocation();

    return(
         <Link to={props.to} className={`p-2 transition-all duration-300 hover:bg-blue-300 hover:text-white  ${pathname===props.to?'bg-blue-300 text-white':''} `}>{props.name}</Link>
    )
}
export default LinkItem;