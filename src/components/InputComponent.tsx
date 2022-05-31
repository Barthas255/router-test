import {useState, useEffect, useCallback} from "react";
import React from 'react';

interface InputComponentProps {
    defaultValue?: string;
}
const storageFormkey = 'inputValue'

export const InputComponent = (props?: InputComponentProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('pusta wartość')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('User name is too short')
            }
            if (messageLength > 20) {
                setErrorMessage('User name is too long')
            }
            setDisplayError(true)
        }
        else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const HandleSubmit = useCallback( () => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormkey, inputValue)
        }
    }, [inputValue])

    useEffect( () => {
        let ValueToSet = '';
        const localStorageData = localStorage.getItem(storageFormkey)
        if (!!localStorageData) {
            ValueToSet = localStorageData;
        }
        else {
            if (!!props?.defaultValue) {
                ValueToSet = props?.defaultValue
            }
        }

        setInputValue(ValueToSet);
    }, [])

    return <div style={{display: "flex", flexDirection: 'column'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>User name:</div>
        <input onInput={handleInputChange} value={inputValue} type={"text"}/>
        <br/>
        <button onClick={HandleSubmit} disabled={!formReadyToSubmit}>submit data</button>
    </div>
}