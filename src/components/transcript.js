import React, { useState, useCallback, Fragment } from "react";

const Transcript = ({ transcript }) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className="transcript">
      <div className="transcript__toggle" onClick={handleToggle}>
        <h3>Transcript</h3>
        <span className="transcript__toggle-indicator">{expanded ? '-' : '+'}</span>
      </div>

      {expanded && (
        <Fragment>

          <div
            className="transcript__content"
            dangerouslySetInnerHTML={{ __html: transcript }}
          />

          <div className="transcript__toggle" onClick={handleToggle}>
            <span>Close</span>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Transcript;
