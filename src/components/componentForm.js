import React, { useEffect, useState } from 'react'
import UntitledImg from './images/greynote.png'
import titledImg from './images/check.svg'
import arrowDown from './images/dropdown.png'
import arrowUp from './images/arrowUp.png'
import AddBtn from './images/add.svg'
import deleteImg from './images/delete.svg'
function ComponentForm(props) {
    const componentContainer = props.container
    const componentToPrintDisplay = props.printID
    const componentDisplay = props.displayID;
    const [val, setVal] = useState([
        {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            id: crypto.randomUUID(),
            visible: true
        }
    ]);
    const [currentImg,setCurrentImg] = useState(UntitledImg)
    const updateImg = () =>{
        for(let i = 0; i <= val.length - 1; i++){
            if (val[i].input1.length > 0 || val[i].input2.length > 0 || val[i].input3.length > 0 || val[i].input4.length > 0){
                setCurrentImg(titledImg);
            }
            else{
                setCurrentImg(UntitledImg)
            }
        }
    }
    const [progressValue, setProgressValue] = useState(0);
    const updateProgressValue = ()=>{
        if (val.length === 0){
            return;
        }
        else{
            if (val[0].input1.length > 0 && val[0].input2.length > 0 && val[0].input3.length > 0 && val[0].input4.length > 0) {
                setProgressValue(25);
            }
            else {
                setProgressValue(0);
            }
        }
    }
    const renderComponent = () => {
        const finalDisplay = document.querySelector(`.${componentToPrintDisplay}`);
        const initialDisplay = document.querySelector(`.${componentDisplay}`);
        finalDisplay.innerHTML = initialDisplay.innerHTML;
    }
    const hideContent = (e) => {
        const arr = [...val];
        let id = e.target.id;
        const itemPos = val.findIndex(item => item.id == id);
        if (arr[itemPos].visible === false) {
            setVal(arr[itemPos].visible = true);
        }
        else {
            setVal(arr[itemPos].visible = false);
        }
        setVal(arr)
    }

    const showPrintableContent = () => {
        const container = document.querySelector(`.${componentContainer}`)
        for (let i = 0; i <= val.length - 1; i++) {
            if (val[i].input1.length > 0 || val[i].input2.length > 0 || val[i].input3.length > 0 || val[i].input4.length > 0) {
                container.style.display = 'flex';
            }
            else {
                container.style.display = 'none';
            }
        }
    }
    useEffect(() => {
        updateProgressValue();
        renderComponent();
        showPrintableContent();
        updateImg()
    }, [val])
    const handleInput1 = (e, index) => {
        const inputData = [...val];
        inputData[index].input1 = e.target.value;
        setVal(inputData);
    }
    const handleInput2 = (e, index) => {
        const inputData = [...val];
        inputData[index].input2 = e.target.value;
        setVal(inputData);
    }
    const handleInput3 = (e, index) => {
        const inputData = [...val];
        inputData[index].input3 = e.target.value;
        setVal(inputData);
    }
    const handleInput4 = (e, index) => {
        const inputData = [...val];
        inputData[index].input4 = e.target.value;
        setVal(inputData);
    }
    const handleInput5 = (e, index) => {
        const inputData = [...val];
        inputData[index].input5 = e.target.value;
        setVal(inputData);
    }
    const handleAdd = () => {
        setVal([...val, {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            id: crypto.randomUUID(),
            visible: true
        }]);
    }
    const handleDelete = (e) => {
        const arr = [...val];
        let id = e.target.id;
        const itemPos = val.findIndex(item => item.id == id);
        if (itemPos > -1) {
            arr.splice(itemPos, 1);
            setVal(arr);
        }
    }
    return (
        <div className='item' id= {props.currentLanguage}>
            <div className='componentTitle'>
                <div>{props.header}</div>
                <div>{props.description}</div>
            </div>
            {val.map((data, index) => {
                if (data.visible === true) {
                    return <div className='ComponentForm' key={data.id}>
                        <div className='formHeader'>
                            <div>
                                <img src={currentImg} alt = 'demo img' />
                            </div>
                            <div>
                                <div>{data.input1 || props.title}</div>
                                <div>{data.input3 || props.period}</div>
                            </div>
                            <div className='dropDown'>
                                <div className='deleteBtn' onClick={handleDelete} id={data.id}> <img src={deleteImg} id={data.id} alt = 'delete'/> </div>
                                <img src={arrowDown} onClick={hideContent} id={data.id} alt = 'expand' />
                            </div>
                        </div>
                        <div className='formContainer'>
                            <form>
                                <div>
                                    <label>{props.label1}</label>
                                    <input onKeyUp ={()=>{props.formProgress(progressValue)}} type={props.type1} value={data.input1} onChange={(e) => { handleInput1(e, index) }} ref = {props.ref} />
                                </div>
                                <div>
                                    <label>{props.label2}</label>
                                    <input onKeyUp={() => { props.formProgress(progressValue) }} type={props.type2} value={data.input2} onChange={(e) => { handleInput2(e, index) }} />
                                </div>
                                <div>
                                    <label>{props.label3}</label>
                                    <input onKeyUp={() => { props.formProgress(progressValue) }} type={props.type3} value={data.input3} onChange={(e) => { handleInput3(e, index) }} />
                                </div>
                                <div>
                                    <label>{props.label4}</label>
                                    <input onKeyUp={() => { props.formProgress(progressValue) }} type={props.type4} value={data.input4} onChange={(e) => { handleInput4(e, index) }} />
                                </div>
                                <div>
                                    <textarea value={data.input5} onChange={(e) => { handleInput5(e, index) }}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                else {
                    return <div className='ComponentForm' key={data.id}>
                        <div className='formHeader'>
                            <div>
                                <img src={currentImg} alt = 'demo'/>
                            </div>
                            <div>
                                <div>{data.input1 || props.title}</div>
                                <div>{data.input3 || props.period}</div>
                            </div>
                            <div className='dropDown'>
                                <div className='deleteBtn' onClick={handleDelete} id={data.id}> <img src={deleteImg} id={data.id} alt = 'delete' /> </div>
                                <img src={arrowUp} onClick={hideContent} id={data.id} alt = 'arrow up'/>
                            </div>
                        </div>
                        <div className='invisible'>
                            <input value={data.input1} />
                            <input value={data.input2} />
                            <input value={data.input3}/>
                            <input value={data.input4}/>
                            <textarea value={data.input5}></textarea>
                        </div>
                    </div>
                }
            })}
            <div className='addBtn' onClick={handleAdd}>
                <div>
                    <img src={AddBtn} alt = 'add button'/>
                </div>
                <div>
                    {props.buttonContent}
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className={componentDisplay}>
                {val.map((item, index) => {
                    return <div key={index}>
                        <div>{item.input1}</div>
                        <div>{item.input2}</div>
                        <div>{item.input3}</div>
                        <div>{item.input4}</div>
                        <div>{item.input5}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default ComponentForm
