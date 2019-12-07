const baseURL = 'http://localhost:3000/api/players/'
const superHeroesURL = 'http://localhost:3000/api/superHeroes'

export default {
  getAllSuperHeroes(){
    return fetch(superHeroesURL)
      .then(res => res.json())
  },
  //
  // getBookings(){
  //   return fetch(baseURL)
  //   .then((res)=>res.json())
  // },
  //
  //
  //
  getData(id) {
    return fetch(baseURL + id, {
      method: "SHOW",
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  addData(data) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  updateData(data) {
    return fetch(baseURL + data._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
  }
}
