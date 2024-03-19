import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "John", math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: "Emma", math: 78, physics: 82, chemistry: 85 },
    { id: 3, name: "Michael", math: 92, physics: 88, chemistry: 95 },
    { id: 4, name: "Sophia", math: 80, physics: 75, chemistry: 82 },
    { id: 5, name: "James", math: 88, physics: 91, chemistry: 87 },
    { id: 6, name: "Olivia", math: 83, physics: 79, chemistry: 88 },
    { id: 7, name: "William", math: 90, physics: 85, chemistry: 92 },
    { id: 8, name: "Ava", math: 79, physics: 81, chemistry: 83 },
    { id: 9, name: "Benjamin", math: 86, physics: 89, chemistry: 91 },
    { id: 10, name: "Charlotte", math: 94, physics: 90, chemistry: 96 },
  ];

  return (
    <div>
      <LChart width={400} height={400} data={studentMarks}>
        <Line dataKey="math" stroke="#red" />
        <Line dataKey="physics" stroke="#green" />
        <Line dataKey="chemistry" stroke="#blue" />
        <XAxis dataKey="name" />
        <YAxis dataKey="id" />
      </LChart>
    </div>
  );
};

export default LineChart;
