import React, { useState, useEffect } from 'react'
import ComponentForm from './componentForm'
function Education(props) {
    const [values, setValues] = useState([
        'Education',
        'Some helpful information or tips about what the user should include in this education section of the cv creator',
        'Untitled',
        'Period',
        'School',
        'Degree',
        'Start and end date',
        'Location',
        'Add Education'
    ]);
    const translate = async () => {
        if(props.initialLanguage === props.finalLanguage){
            return
        }
        else{
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
        <ComponentForm
            finalLanguage = {props.finalLanguage}
            initialLanguage = {props.initialLanguage}
            printID='Education'
            displayID='edu'
            container='educationContainer'
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
            type3='text'
            type4='text'
            buttonContent={values[8]}
        />
    )
}
export default Education