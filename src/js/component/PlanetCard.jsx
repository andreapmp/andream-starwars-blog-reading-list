import React from "react";

const PlanetCard = ({ name, uid, url }) => {

    return (
        <div className="row d-inline-block">
            <div className="col">
                <div className="card ms-5 my-4" style={{width: "18rem"}}>
                    <img src={uid === "1"
                    ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                    : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                    } 
                    className="card-img-top" alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Population</li>
                            <li class="list-group-item">Terrain</li>
                        </ul>
                        <Link to={`/people/${uid}`}>
                            <button className="btn btn-outline-primary me-5">
                                Learn more
                            </button>
                        </Link>
                        <button type="button" className="btn btn-outline-warning ms-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;