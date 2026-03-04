"use client";
import dynamic from "next/dynamic";

const MiniLineChart = dynamic(() => import("./MiniLineChart"), { ssr: false });

export default function ChartClient() {
  return <MiniLineChart />;
}
