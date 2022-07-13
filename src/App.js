import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const options = {
      method:'GET',
      headers:{Accept: 'application/json','Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
      mode : 'no-cors',
    };
    fetch("http://192.168.0.102:8000/teams/1",options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <li>{items}</li>
      </ul>
    );
  }
}

/*
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchData = () => {
      const options = {
        headers:{'content-type': 'application/json'},
        mode : 'no-cors'
      };
      fetch(`http://192.168.0.102:8000/teams/1`, options)
        .then(response => response.json())
        .then((data) => {          
          setTeams(data)
        },
        (error) => {
          setError(error);
        }
        )
    }
    useEffect(() => {
      fetchData()
    }, []);
    if (error) {
      return <div>Erreur : {error.message}</div>;
    }else{ 
  return (
    <>
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100}/>
        <p>FIFA Qatar 2022</p>
      </header>
    </div>
    <div className="container">
      <div className='group'><span>Group A</span></div>
        <table className='team-group' >
          <tbody>
          <tr><th colSpan={3} >Team</th>
              <th className='result'>MP</th>
              <th className='result'>W</th>
              <th className='result'>D</th>
              <th className='result'>L</th>
              <th className='result'>GF</th>
              <th className='result'>GA</th>
              <th className='result'>GD</th>
              <th className='result'>Pts</th>
          </tr>
          <tr><td width={20}>1</td>
              <td width={28} height={28}><img src= {require("./media/logos/QA.png")} alt='' className='logo'/></td>
              <td>Qatar</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
              <td align='center'>0</td>
          </tr>
          </tbody>
        </table>
    </div>
    <div> {teams.id}</div>
    </>
  );
}
}
*/
export default App;
