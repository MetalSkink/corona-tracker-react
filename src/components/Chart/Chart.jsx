import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetching();
    }, [])

    const lineChart = (
        dailyData.length ? ( 
            <Line
            data={{
                labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                  data: dailyData.map((data) => data.confirmed),
                  label: 'Infectados',
                  borderColor: '#3333ff',
                  fill: true,
                }, {
                  data: dailyData.map((data) => data.deaths),
                  label: 'Muertos',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true,
                },
                ],
              }}
            /> 
        ): null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart
