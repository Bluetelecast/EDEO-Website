import LinkItem from "./LinkItem";

const LinkItemsWrapper =()=><>
        <LinkItem to={'/'} name={"Home"}/> 
        <LinkItem to={'/about'} name={"About"}/>
        <LinkItem to={'/projects'} name={"Projects"}/>
        <LinkItem to={'/team'} name={"Team"}/>
        <LinkItem to={'/what_we_do'} name={"What we do"}/>
        <LinkItem to={'/contacts'} name={"Contacts"}/>
        <LinkItem to={'/donate'} name={"Donate"}/>  
</>

export default LinkItemsWrapper;
