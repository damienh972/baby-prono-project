import React, { useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {

  const [listPrognosis,setListPrognosis] = useState([]);
  
  const getPrognosis = () => {

  axios.get('http://localhost:3000/api/pronostics',
  )
    .then((response) => {
      setListPrognosis(response.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
};
useEffect(() => {
  getPrognosis();
},[]);
console.log(listPrognosis);

    return (
      <main>
      
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Sexe</th>
                <th scope="col">Poids</th>
                <th scope="col">Taille</th>
                <th scope="col">Date de Naissance</th>
              </tr>
            </thead>
            {listPrognosis.map((prognosis) =>
            <tbody key={prognosis.id}>
              <tr>
                <td >{prognosis.name}</td>
                <td>{prognosis.sex}</td>
                <td>{prognosis.weight}</td>
                <td>{prognosis.height}</td>
                <td>{prognosis.date}</td>
              </tr>
            </tbody>
            )}
          </table>
        </div>
      </main>
    )
  }

// == Export
export default App;
