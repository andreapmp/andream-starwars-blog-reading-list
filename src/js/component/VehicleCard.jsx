import React from "react";

const VehicleCard = ({uid, name, url}) => {

      return (
            <>
                  <div className="col-3">
                        <div className="card" style={{width: "18rem"}}>
                              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt={name}/>
                              <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <p className="card-text">_________</p>
                              <a href="#" className="btn btn-primary">Learn More</a>
                              </div>
                        </div>
                  </div>
            </>

      );
}

export default VehicleCard;
