import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            borderColor: '#1E90FF',
            color: '#1E90FF',
            fontWeight: 600,
            marginBottom: "8px",
            textTransform: "none",
            "&:hover": {
                backgroundColor: '#1E90FF',
                color: '#fff'
            }
        }
    })
));

const Answer = (props) =>{
    const classes = useStyles();

    return(
        <>
            <Button
                className={classes.button} 
                variant="outlined" onClick={() => props.select(props.content, props.nextId)}
            >
                {props.content}
            </Button>
        </>
    )
}

export default Answer;