import LinkItemsWrapper from "./LinkItemsWrapper";

const MobileNavegation = ()=>{
    return(
        <nav className="flex flex-col gap-2 p-3 mt-[1rem] md:hidden">
            <LinkItemsWrapper/>
    </nav>
    );
};

export default MobileNavegation;