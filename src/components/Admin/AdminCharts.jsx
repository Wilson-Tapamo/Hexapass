import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Lun', connections: 400, apps: 240 },
    { name: 'Mar', connections: 300, apps: 139 },
    { name: 'Mer', connections: 200, apps: 980 },
    { name: 'Jeu', connections: 278, apps: 390 },
    { name: 'Ven', connections: 189, apps: 480 },
    { name: 'Sam', connections: 239, apps: 380 },
    { name: 'Dim', connections: 349, apps: 430 },
];

export const ActivityChart = () => (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorConnections" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5E3BEE" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#5E3BEE" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <Tooltip
                    contentStyle={{
                        borderRadius: '12px',
                        border: 'none',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                />
                <Area
                    type="monotone"
                    dataKey="connections"
                    stroke="#5E3BEE"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorConnections)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);
