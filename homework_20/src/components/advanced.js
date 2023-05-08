/*let genderlist = [true, true, true];
  const [genderchange, setGenderchange] = useState(genderlist)
  
  const genderFilter = phonebook.filter((item) => {
    if ((item.gender === 'female' && genderchange[0]) || (item.gender === 'male' && genderchange[1]) || (item.gender === 'none' && !genderchange[2])) {
      return true;
    }
    else return false;
  })

  const handleGenderChange = (index) => {
    genderlist = genderFilter.map((item, i) => {
      if (index === i) { return !genderFilter[i] }
      else return genderFilter[i];

    });
    setGenderchange(genderlist)
  }


<div className='gender_block'>
        <input type='checkbox' name='male' value='male' onChange={(e) => { handleGenderChange(0) }} defaultChecked/>
        <span>Male</span>
        <input type='checkbox' name='female' value='female' onChange={(e) => { handleGenderChange(1) }} defaultChecked/>
        <span>Female</span>
        <input type='checkbox' name='NA' value='NA' onChange={(e) => { handleGenderChange(2) }} defaultChecked/>
        <span>NA</span>
      </div>

*/


