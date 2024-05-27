import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PeopleCard from "../component/PeopleCard.jsx";

const StarWarsHome = () => {
    const { store, actions } = useContext(Context);
    
    return(
        <>
           {/* //Characters// */}
        <div className="row mt-5" >
            <div className="col-2"></div>    
            <div className="col-8 fs-1">Characters</div>
            <div className="col-2"></div>   
        </div>  

        <div className="row">
        <div className="col-2"></div>    
        <div className="col-8 d-flex overflow-auto justify-content-evenly">
        {store.people.map(person => {
        return ( 
            <PeopleCard key={person.uid} name={person.name} uid={person.uid} url={person.url}/>
        );
        })}
        </div> 
        <div className="col-2"></div>   
        </div>

            
        </>
    );
}

export default StarWarsHome;