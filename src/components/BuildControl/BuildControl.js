import React from 'react';
import classes from './BuildControl.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
     <div>Total Price: {props.price.toFixed(2)}</div>
    {controls.map(ctrl => (
        <BuildControl key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        deleted={() => props.ingredientDeleted(ctrl.type)}
        disabled ={props.disabled[ctrl.type]}/>
    ))}

    </div>
)

export default buildControls;