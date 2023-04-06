import React, { useEffect, useState } from 'react'
import ComponentForm from './componentForm'
const UserDetails = (props => {
  const [values, setValues] = useState([
    'Your Details',
    'CV Language',
    'Job Title',
    'First Name',
    'Last Name',
    'Email'
  ]);
  const translate = async () => {
    if (props.initialLanguage === props.finalLanguage) {
      return
    }
    else {
      try {
        const propsArr = [...values];
        let collector = [];
        for (let i = 0; i <= propsArr.length - 1; i++) {
          const url = `https://api.mymemory.translated.net/get?q=${propsArr[i]}&langpair=${props.initialLanguage}|${props.finalLanguage}`;
          const data = await fetch(url);
          const jsonData = await data.json();
          const processedData = jsonData.responseData.translatedText;
          collector.push(processedData);
        }
        setValues([...collector]);
      } catch (error) {
        if (error.status === 429) {
          console.log('error0000')
        }
      }
    }
  }
  useEffect(() => {
    console.log('poppy');
    translate();
  }, [props.finalLanguage]);
  return (
    <div className='userDetails'>
      <div>
        <div className='designHeader'>{values[0]}</div>
        <div>
          <div>{values[1]} :</div>
          <img src= {`https://flagsapi.com/${props.flag}/flat/64.png`} className='countryImg' alt='flag' />
          <select value={props.finalLanguage} onChange={props.handleChange}>
            <option value='ar'>Arabic</option>
            <option value='zh'>Chinese</option>
            <option value='en'>English</option>
            <option value='fr'>french</option>
            <option value='ha'>Hausa</option>
            <option value='hi'>Hindi</option>
            <option value='ig'>Igbo</option>
            <option value='it'>Italian</option>
            <option value='ja'>Japanese</option>
            <option value='pt'>Portuguese</option>
            <option value='ru'>Russian</option>
            <option value='es'>Spanish</option>
            <option value='yo'>Yoruba</option>
          </select>
        </div>
      </div>
      <div>
        <ComponentForm
          finalLanguage={props.finalLanguage}
          initialLanguage={props.initialLanguage}
          printID='Details'
          displayID='det'
          container='userDetailsContainer'
          formProgress={props.formProgress}
          label1={values[2]}
          label2={values[3]}
          label3={values[4]}
          label4={values[5]}
          type1='text'
          type2='text'
          type3='text'
          type4='email'
        />
      </div>
    </div>
  )
})
export default UserDetails

