import React from 'react'
import Alert from '@material-ui/lab/Alert';

export default function ItemListContainer (props) {

    return (
        <div>
            <Alert severity="info">{props.greetings}</Alert>
            {props.children}
        </div>
    )
}

