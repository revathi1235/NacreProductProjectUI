import React, { useState, useEffect } from 'react';
import ReactGaugeChart from "react-gauge-chart";

function GaugeChartWithEffect(props) {
  // Dummy values for testing (50% pointer)
  const [pendingpicklists, setPendingpicklists] = useState(50); // 50% of total
  const [totalPicks, setTotalPicks] = useState(100); // Total picks = 100

  // Simulate fetching data
  useEffect(() => {
    // Normally, you would fetch data here. For testing, we're using static values.
    // Comment out the API request part as we are testing with dummy data.
    /*
    const fetchData = async () => {
      try {
        const res = await fetch('http://192.168.1.104:8000/supervisor/supervisor_login_api', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const response = await res.json();
        setTotalPicks(response.Total_Picks || 100); // Default to 100 for testing
        setPendingpicklists(response.Pending_Picks || 50); // Default to 50 for testing
        console.log("res of apex chart4 page", response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
    */
  }, []);

  // Function to calculate gauge labels and zones
  const calculateLabelsAndZones = () => {
    const values = totalPicks / 4;
    const labels = [];
    
    // Calculate label values
    for (let i = 0; i <= 4; i++) {
      labels.push(Math.round(i * values));
    }

    const zones = [
      { strokeStyle: '#AC0000', min: 0, max: values },
      { strokeStyle: '#FF0000', min: values, max: values * 2 },
      { strokeStyle: '#FF9898', min: values * 2, max: values * 3 },
      { strokeStyle: '#FFDD00', min: values * 3, max: values * 4 },
      { strokeStyle: '#30B32D', min: values * 4, max: totalPicks }, // Max zone up to totalPicks
    ];

    return { labels, zones };
  };

  const { labels } = calculateLabelsAndZones();

  // Only render the chart when totalPicks is not zero
  const gaugePercentage = totalPicks ? pendingpicklists / totalPicks : 0;

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
