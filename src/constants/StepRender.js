import React, { useContext, useEffect } from 'react';
import DateModule from '../modules/DateModule';
import { DocContext } from "../components/DocContext";

const StepRender = (props) => {
    const [state, setState] = useContext(DocContext);

    const renderData = [
        {
            modules: [
                {
                    module: <DateModule name="print-date"/>,
                    title: 'Виберіть дату видачі документа'
                }
            ]
        }
    ];

    useEffect(() => {
        if(state.count === 0){
            setState(state => ({
                ...state,
                count: renderData[props.id - 1].modules.length
            }))
        }
    });

    if(renderData[props.id - 1] !== undefined){
        return(
            <div>
                <h2>Крок {state.step}</h2>
                <h3>{ renderData[props.id - 1].modules[state.step - 1].title }</h3>
                { renderData[props.id - 1].modules[state.step - 1].module }
            </div>
        )
    } else {
        return (
            <div>Такого id не існує</div>
        )
    }

}

export default StepRender
