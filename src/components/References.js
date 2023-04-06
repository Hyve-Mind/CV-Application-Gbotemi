import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react'
import ComponentForm from './componentForm';
function References(props) {
  const [values, setValues] = useState([
    'References',
    'Add some references and quotes to increase hiring probability',
    'untitled',
    'Start and end date',
    'Name',
    'Company',
    'Email',
    'Phone',
    'Add References'
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
    console.log('poppy')
    translate();
  }, [props.finalLanguage]);

  return (
    <ComponentForm
      finalLanguage={props.finalLanguage}
      initialLanguage={props.initialLanguage}
      printID='Reference'
      displayID='ref'
      container='referenceContainer'
      formProgress={props.formProgress}
      header={values[0]}
      description={values[1]}
      title={values[2]}
      period={values[3]}
      label1={values[4]}
      label2={values[5]}
      label3={values[6]}
      label4={values[7]}
      type1='text'
      type2='text'
      type3='email'
      type4='number'
      buttonContent={values[8]}
    />
  )
}
export default References

