const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: {
				description: "",
				properties: {}
			},
			vehicles: [],
			vehiclesDetails: {
				decription: "",
				properties: {}
			},
			planets: [],
			planetDetails: {
				description: "",
				properties: {}
			},
			favorites: []
		},

		actions: {
			getPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({people: data.results})
			},
			getPeopleDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if(!response.ok) {
					throw new Error(`${response.status} - ${response.statusText}`);
				}	
			 	const data = await response.json();
				const peopleDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({peopleDetails: peopleDetails});
			},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({ vehicles: data.results });
			},
			getVehicleDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				if (!response.ok) {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
				const data = await response.json();
				const updatedVehicleDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({ vehiclesDetails: updatedVehicleDetails });
			},
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({planets: data.results})
			},
			getPlanetsDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				if (!response.ok) {
					throw new Error(`${response.status} - ${response.statusText}`);
				}
				const data = await response.json();
				const updatedPlanetDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({ planetDetails: updatedPlanetDetails });
			},
			addFavorite: (favorite) => {
				let store = getStore();
				store.favorites.push(favorite);
				setStore({ favorite: store.favorite });
			},
			removeFavorite: (removeFav) => {
				let store = getStore();
				const updatedFavorites = store.favorites.filter(item => item !== removeFav);
				setStore({ favorites: updatedFavorites })
			}
		}
	};
};

export default getState;
