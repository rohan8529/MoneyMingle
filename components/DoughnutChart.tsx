"use client";
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement,Tooltip,Legend)

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data={
    datasets:[{
     label:'Banks',
     data:[35000,22000,25000],
     backgroundColor:['#0747bG','#2265d8','#2f91fa']
    }],
    labels:['HDFC','SBI','ICICI']
  }
    return <Doughnut data={data} 
    options={{
        cutout:'70%',
        plugins:{
            legend:{
                display:false
            }}
    }}
    />
}

export default DoughnutChart