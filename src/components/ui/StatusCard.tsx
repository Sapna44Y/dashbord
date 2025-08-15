"use client";

interface StatusCardProps {
  title: string;
  value: number;
  color: string;
}

export function StatusCard({ title, value, color }: StatusCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className={`text-2xl font-bold mt-2 ${color} bg-clip-text text-transparent`}>
        {value}
      </p>
    </div>
  );
}