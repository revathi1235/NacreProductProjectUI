

import React, { useState, useEffect } from 'react';
import ReactGaugeChart from "react-gauge-chart";


function GaugeChartWithEffect() {
  const [pendingpicklistsinprogress, setPendingpicklistinprogress] = useState(0);
  const [totalPicks, setTotalPicks] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://192.168.1.104:8000/supervisor/supervisor_login_api', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const response = await res.json();
        console.log("res of apex chart3 page", response);

        setTotalPicks(response.Total_Picks);
        setPendingpicklistinprogress(response.Picks_in_process);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const calculateLabelsAndZones = () => {

    // const values = [0, 69, 138, 208, 346];
    // const labels = [];


    // for (let i = 0; i < values.length; i++) {
    //   labels.push(values[i]);
    // }

    const values = totalPicks / 4;
    const labels = [];
    for (let i = 0; i <= 4; i++) {
      labels.push(Math.round(i * values));

    }
    console.log(labels);

    const zones = [
      { strokeStyle: '#AC0000', min: values[0], max: values[1] },
      { strokeStyle: '#FF0000', min: values[1], max: values[2] },
      { strokeStyle: '#30B32D', min: values[2], max: values[3] },
      { strokeStyle: '#FF9898', min: values[3], max: values[4] },
      { strokeStyle: '#FFDD00', min: values[4], max: pendingpicklistsinprogress },
    ];

    return { labels, zones };
  };
  const gaugePercentage = totalPicks ? pendingpicklists / totalPicks : 0;
  const [pendingpicklists, setPendingpicklists] = useState(50); // 50% of total

  const { labels } = calculateLabelsAndZones();
  return (

    <div style={{ position: 'relative' }}>
    <ReactGaugeChart
      id="gauge-chart3"
      nrOfLevels={5}
      colors={[
        '#30B32D',
        '#FFDD00', 
        '#FF9898',
        '#FF0000',
        '#AC0000',
      ]}
      arcWidth={0.2}
      needleLength={0.1}
      needleWidth={1}
      arcPadding={0.01}
      cornerRadius={1} 
      percent={gaugePercentage}
      textColor={'black'}
    />
    <div style={{ position: 'absolute', top: '80%', left: '33%', transform: 'rotate(289deg) translateX(90%)' }}>
      {labels.map((label, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            transform: `rotate(${index * (180 / 5)}deg) translateY(-100px)`,
            transformOrigin: '0% 200%',
            fontSize:'20px'
          }}
        >
          {label}
        </span>
      ))}
    </div>
  </div>
  );
}


export default GaugeChartWithEffect;
