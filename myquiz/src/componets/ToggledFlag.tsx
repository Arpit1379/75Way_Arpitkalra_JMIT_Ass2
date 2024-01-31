import React, { useState } from 'react';

const ToggleFlag: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(false);

  const handleToggle = () => {
    setFlag(!flag);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px' }}>
      <button onClick={handleToggle}>
        {flag ? 'Unset Flag' : 'Set Flag'}
      </button>
      <div>
        {flag ? <span>🚩</span> : <span style={{ visibility: 'hidden' }}>🚩</span>}
      </div>
    </div>
  );
};

export default ToggleFlag;
