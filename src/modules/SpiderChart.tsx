/* eslint-disable @typescript-eslint/no-explicit-any */
import { Radar } from 'react-chartjs-2';
import { data } from '../utils/dataset';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
);

export const SpiderChart = () => {
    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: { dataset: { label: string; }; raw: any; }) {
                        let label = tooltipItem.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.raw;
                        return label;
                    }
                },
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10,
            }
        },
        scales: {
            r: {
                ticks: {
                    beginAtZero: true,
                    color: '#000', // Tick color
                    backdropColor: 'rgba(255, 255, 255, 0.75)', // Background color for the ticks
                },
                grid: {
                    color: 'rgba(255,255,255 ,0.2)',
                    circular: true,
                    backgroundColor: 'rgba(240, 240, 240, 0.5)'

                },
                angleLines: {
                    color: 'rgba(255,255,255, 0.2)', // Color of the lines radiating from the center
                },
                pointLabels: {
                    font: {
                        size: 14,
                        weight: 'normal'
                    },
                    color: 'rgba(255, 99, 132, 1)', // Color of the point labels
                }
            },
        },
    };

    return (
        <>
            <Radar data={data} options={options} />
        </>
    )
}

