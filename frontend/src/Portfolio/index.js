import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
    makeStyles,
    Typography
} from "@material-ui/core";

const ParentElem = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.heading}>Performance</Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography className={classes.heading}>Value</Typography>
                    </AccordionSummary>
                </Accordion>



            </CardContent>
        </Card>
    );
}

export default ParentElem;
