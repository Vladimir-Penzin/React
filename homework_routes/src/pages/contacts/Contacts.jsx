import React , { useState } from 'react';
import './contacts.css';
import phonebook from './Phonebook';
import maleicon from './icons/mars-solid.svg';
import femaleicon from './icons/venus-solid.svg';
import naicon from './icons/venus-mars-solid.svg'

function Contact(props) {
  let genderIcon
  if (props.gender === "male") {
    genderIcon = maleicon;
  } else if (props.gender === "female") {
    genderIcon = femaleicon
  } else {genderIcon = naicon}
  return (
    <div className='contacts'>
        <div className='initials-box'>
          <p className='initials'>{props.firstName.charAt(0) + props.lastName.charAt(0)}</p>
        </div>
        <div className='card-item'>
          <p>Firstname: {props.firstName}</p>
        </div>
        <div className='card-item'>
          <p>Lastname: {props.lastName}</p>
        </div>
        <div className='card-item'>
          <p>Phone No: <span className='phone'>{props.phone}</span></p> 
        </div>
        <div className='card-item'>
          <span>Gender: {props.gender || "NA"}</span>
          <img src = {genderIcon} className='icon' alt='gender'/> 
        </div>
      </div>
  )
}
function Contacts() {
  const [contacts, setContacts] = useState(phonebook);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setContacts(phonebook.filter((el) => {
      return el.lastName.includes(search) || el.firstName.includes(search) || el.phone.includes(search)
    }))
  }

  return (
    <div className="app">
      <input className='search' placeholder='Find contact' value={search} onChange={(e) => { handleSearchChange(e) }} />
         
      {contacts.map((contact, i) => <Contact {...contact} key={i}/>)}
            
    </div>
  );
}

export default Contacts;