import { Bar } from "react-chartjs-2";

function PieChartGraph ( {wasteData})  {
    const labels = wasteData.map(item => item.name);
    const dataPoints = wasteData.map(item => item.quantity)
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Waste Categories',
                data: dataPoints,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.6)',
                
            },
        ],
    };
    return (
        <>
        <Bar data={data} />
        </>
    )
}

export default PieChartGraph;