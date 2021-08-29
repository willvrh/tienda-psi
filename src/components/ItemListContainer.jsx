import React from 'react'
import Alert from '@material-ui/lab/Alert';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
export default function ItemListContainer (props) {
    
    return (
        <div>
            <Alert icon={<InfoOutlinedIcon fontSize="inherit" className="pulsatingIcon" />} severity="success" severity="info">{props.greetings}</Alert>
            {props.children}
        </div>
    )
}

