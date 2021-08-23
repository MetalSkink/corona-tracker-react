import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    // console.log(confirmed, recovered, deaths, lastUpdate);
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} className={styles.card+ ' ' + styles.infected} sm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed?.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={styles.card+ ' ' + styles.recovered} sm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered?.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recoveries from covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={styles.card+ ' ' + styles.deaths} sm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths?.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
