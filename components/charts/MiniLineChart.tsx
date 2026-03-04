"use client";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", value: 24 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 28 },
  { name: "Thu", value: 34 },
  { name: "Fri", value: 32 },
  { name: "Sat", value: 36 },
  { name: "Sun", value: 38 }
];

export default function MiniLineChart() {
  return (
    <div className="h-28 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(56,189,248,0.3)",
              borderRadius: 10,
              color: "#fff",
              fontSize: 12
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#38bdf8"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
