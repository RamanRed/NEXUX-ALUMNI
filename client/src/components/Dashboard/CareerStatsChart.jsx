/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CareerStatsChart = ({ careerStats }) => {
  return (
    <Card>
      <CardHeader title="Career Statistics" />
      <CardContent style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={careerStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="field" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CareerStatsChart;
