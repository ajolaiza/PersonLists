import React from 'react';

import './App.css';


const App=()=><PersonList/>;

const PersonList=()=>{
const people=[
  { img:22,
    name:'prabin sharma',
    job:'Data analyst'

},
{ img:22,
  name:'tilak basyal',
  job:'software developer'

}
,
{ img:22,
  name:'ankit karki',
  job:'no job'

}
];
return (
  <section>
    <Person person={people[0]}/>
    <Person person={people[1]}/>
    <Person person={people[2]}/>

  </section>
)

};

const Person=(props)=>{
  const {img,name,job}=props.person;
  const { childern }=props;
  
  const url=`https://randomuser.me/api/portraits/thumb/men/${ img }.jpg`;
 
 
 
  return (
    <div className="person">
    
    <img src={url} alt=""/>
    <div>
  <h4>{name}</h4>
      <h4>{job}</h4>
      {childern}

    </div>

    </div>

  )
};






export default App;
