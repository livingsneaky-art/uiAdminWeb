import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmploymentPercentageForm = () => {
  const [employedPercentage, setEmployedPercentage] = useState(40);
  const [unemployedPercentage, setUnemployedPercentage] = useState(32);
  const [selfEmployedPercentage, setSelfEmployedPercentage] = useState(28);

  const updateChart = () => {
    const data = {
      labels: ['Employed', 'Unemployed', 'Self-employed'],
      datasets: [
        {
          data: [employedPercentage, unemployedPercentage, selfEmployedPercentage],
          backgroundColor: ['#0070C0', '#E74C3C', '#F39C12'],
          hoverBackgroundColor: ['#005193', '#C0392B', '#D68910'],
        },
      ],
    };

    return data;
  };

  const handlePercentageChange = (type, value) => {
    switch (type) {
      case 'employed':
        setEmployedPercentage(value);
        break;
      case 'unemployed':
        setUnemployedPercentage(value);
        break;
      case 'selfEmployed':
        setSelfEmployedPercentage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="absolute top-[80px] left-[1038px] w-[402px] h-[409px] text-left text-xs text-gray-300 font-poppins">
      {/* ... existing JSX code ... */}
      <div className="absolute top-[375px] left-[0px] w-[81px] h-[34px]">
        {/* ... employed */}
        <input
          type="range"
          min={0}
          max={100}
          value={employedPercentage}
          onChange={(e) => handlePercentageChange('employed', e.target.value)}
        />
      </div>
      <div className="absolute top-[375px] left-[142px] w-[122px] h-[34px]">
        {/* ... unemployed */}
        <input
          type="range"
          min={0}
          max={100}
          value={unemployedPercentage}
          onChange={(e) => handlePercentageChange('unemployed', e.target.value)}
        />
      </div>
      <div className="absolute top-[375px] left-[281px] w-[121px] h-[34px]">
        {/* ... self-employed */}
        <input
          type="range"
          min={0}
          max={100}
          value={selfEmployedPercentage}
          onChange={(e) => handlePercentageChange('selfEmployed', e.target.value)}
        />
      </div>

      {/* Chart rendering */}
      <div className="absolute top-[170px] left-[108px] w-[154px] h-[154px]">
        <Doughnut data={updateChart()} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default EmploymentPercentageForm;
