import React, { useState, useEffect} from 'react';
import {Table, Input, Form, Button} from 'semantic-ui-react';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';


const App = () => {

  const [listUsers, setListUsers] = useState([]);
  const getUsers = () => {

    axios.get('http://localhost:3000/api/users',)
      .then((response) => {
        setListUsers(response.data);
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
    };
    console.log(listUsers);
  const [userEmail, SetUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCampaign, setUserCampaign] = useState([]);
  const newUser = {
    email:userEmail,
    password:userPassword,
    campaigns:userCampaign,
  }
  const sendUser = () => {
    axios('http://localhost:3000/api/users',{
      method: 'post',
      data: newUser,
      },
    )
    .then((response) => {
      console.log(newUser);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const [listPrognosis, setListPrognosis] = useState([]);
  const getPrognosis = () => {

    axios.get('http://localhost:3000/api/pronostics',)
      .then((response) => {
        setListPrognosis(response.data);
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
    };

  const options = [
    { key: 'g', text: 'Garçon', value: 'G' },
    { key: 'f', text: 'Fille', value: 'F' },
  ];
  
  const [userName,setUserName] = useState("");
  const [sexBet,setSexBet] = useState("");
  const [weightBet,setWeightBet] = useState(0);
  const [heightBet,setHeightBet] = useState(0);
  const [dateBet,setDateBet] = useState("");
  const prognosis = {
    name: userName,
    sex: sexBet,
    weight: weightBet,
    height: heightBet,
    date: dateBet,
  };
  console.log(prognosis);
  
  const sendPrognosis = () => {
    axios('http://localhost:3000/api/pronostics',{
      method: 'post',
      data: prognosis,
      },
    )
    .then((response) => {
    })
    .catch((error) => {
      console.log(error);
    });
  };

  
  const handleSubmitPrognosis = (evt) => {
    evt.preventDefault();
    sendPrognosis();
  }

 
  const handleCreateUser = (evt) => {
    evt.preventDefault();
    sendUser();
  }
 
useEffect(() => {
  getPrognosis();
  getUsers();
},[]);

    return (
      <main className='main'>
        <Table selectable stackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>Sexe</Table.HeaderCell>
              <Table.HeaderCell>Poids</Table.HeaderCell>
              <Table.HeaderCell>Taille</Table.HeaderCell>
              <Table.HeaderCell>Date de Naissance</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {listPrognosis.map((prognosis) =>
            <Table.Row key={prognosis._id}>           
              <Table.Cell>{prognosis.name}</Table.Cell>
              <Table.Cell>{prognosis.sex}</Table.Cell>
              <Table.Cell>{prognosis.weight}</Table.Cell>           
              <Table.Cell>{prognosis.height}</Table.Cell>
              <Table.Cell>{prognosis.date}</Table.Cell>                 
            </Table.Row>
            )} 
          </Table.Body>         
        </Table>
        <Form widths={'equal'}>
          <Form.Group>
            <Form.Field>
              <label>prénom du participant</label>
              <Input
                className='bet-input'
                onChange={(e)=>setUserName(e.target.value)}
                value={userName}
                fluid
                placeholder='Entrez votre prénom' />
            </Form.Field>
            <Form.Field>
              <Form.Select
                className='bet-input'
                fluid
                label='Sexe à la naissance'
                options={options}
                placeholder='entrez votre prédiction'
                onChange={(e, data)=>setSexBet(data.value)}
                value={sexBet}
              />
            </Form.Field>
            <Form.Field>
              <label>Poids à la naissance (en kg)</label>
              <Input
                className='bet-input'
                onChange={(e)=>setWeightBet(e.target.value)}
                value={weightBet}
                fluid
                placeholder='Entrez votre prédiction' />
            </Form.Field>
            <Form.Field>
              <label>Taille à la naissance (en cm)</label>
              <Input
              className='bet-input'
              onChange={(e)=>setHeightBet(e.target.value)}
              value={heightBet}
              fluid
              placeholder='Entrez votre prédiction' />
            </Form.Field>
            <Form.Field>
              <label>Date de naissance (jj/mm/aaaa)</label>
              <Input
                className='bet-input'
                onChange={(e)=>setDateBet(e.target.value)}
                value={dateBet}
                fluid
                placeholder='Entrez votre prédiction' />
            </Form.Field>
          </Form.Group>
          <Button fluid centered='true' onClick={handleSubmitPrognosis}>Valider</Button>
        </Form>
        <Form widths={'equal'}>
          <Form.Group>
          <Form.Field>
            <label>Email</label>
              <Input
                type={'email'}
                className='bet-input'
                onChange={(e)=>SetUserEmail(e.target.value)}
                value={userEmail}
                fluid
                placeholder='Entrez votre email' />
            </Form.Field>
            <Form.Field>
              <label>Mot de passe</label>
              <Input
                type={'password'}
                className='bet-input'
                onChange={(e)=>setUserPassword(e.target.value)}
                value={userPassword}
                fluid
                placeholder='Entrez votre mot de passe' />
            </Form.Field>
          </Form.Group>
          <Button fluid centered='true' onClick={handleCreateUser}>Valider</Button>
        </Form>
      </main>
    )
  }

// == Export
export default App;
