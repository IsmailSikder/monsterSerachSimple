
import './App.css';
import React from 'react';

class App  extends React.Component{
  constructor(){
      super()

      this.state ={
        monsters : [],
        searchField:'',
      }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  
  }

  onSearchChange = (e)=>{
    this.setState({searchField : e.target.value})
    const filterMonster = this.state.monsters.filter(monster=>(
      monster.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
      ))

    this.setState({monsters: filterMonster})

}

  render(){

    return (
    
      <div className='App'>
         <div>
          <input
             className ='search-box'
               type='search'
               placeholder = 'search monster'
               onChange= {this.onSearchChange}         
          />
          </div>
          <div className="container">
          {
          this.state.monsters.map((monster)=>(
            <div className='list'>
               <img  alt='Monster' src='https://robohash.org/{props.monster.id}?set=set2&size=180x180'/>
              <p>{monster.name}</p>
              <p>{monster.username}</p>
              <p>{monster.email}</p>
           </div>
          ))

          }
        </div>
        </div>
   
  
    )
  }

}

export default App;
