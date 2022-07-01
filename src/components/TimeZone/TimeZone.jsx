import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import "./TimeZone.scss";

import TimeZoneLogo from "../../assets/img/TimeZoneLogo.svg";

const TimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <div className="timezone">
      <img src={TimeZoneLogo} alt="" />
      <span>Select Timezone</span>
      <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
    </div>
  );
};

export default TimeZone;
