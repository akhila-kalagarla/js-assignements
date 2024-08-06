// 19. Write a React component that implements a tooltip.

import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {visible && (
        <div style={{
          position: 'absolute', background: 'black', color: 'white', padding: '5px', borderRadius: '5px',
          top: '100%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap'
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
