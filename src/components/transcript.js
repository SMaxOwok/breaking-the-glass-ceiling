import React, { useState, useCallback, Fragment, useMemo } from "react";

const Transcript = ({ transcript }) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const classNames = useMemo(() => {
    if (!expanded) return "transcript";

    return "transcript transcript--open";
  }, [expanded]);
  const handleKeyDown = useCallback(event => {
    if (event.keyCode !== 13) return;

    handleToggle();
  }, [handleToggle]);

  return (
    <div className={classNames}>
      <div className="transcript__toggle" tabIndex={0} onClick={handleToggle} onKeyDown={handleKeyDown}>
        <h3>Transcript</h3>
        <span className="transcript__toggle-indicator">{expanded ? '-' : '+'}</span>
      </div>

      <div
        className="transcript__content"
        dangerouslySetInnerHTML={{ __html: transcript }}
      />

      {expanded && (
        <div className="transcript__toggle" onClick={handleToggle}>
          <span>Close</span>
        </div>
      )}
    </div>
  );
};

export default Transcript;
