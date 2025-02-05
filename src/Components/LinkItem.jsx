import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { hideMenu } from '../Global_feature/GlobalSlice';

const LinkItem = (props)=>{
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    return(
         <Link onClick={()=>dispatch(hideMenu())} to={props.to} className={`p-2 transition-all duration-500 hover:bg-blue-300 hover:text-white ${pathname===props.to?'bg-blue-300 text-white':''} `}>{props.name}</Link>
    )
}
export default LinkItem;