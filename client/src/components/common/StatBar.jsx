//me
import React from 'react';

function StatBar({ value }) {
  return (
    <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '8px' }}>
      <div
        style={{
          backgroundColor: '#1976d2',
          width: `${value}%`,
          height: '100%',
        }}
      />
    </div>
  );
}

export default StatBar;
