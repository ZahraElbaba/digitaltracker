import React, { useState, useEffect } from "react";

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState("");
  
    useEffect(() => {
      // Format the current date
      const date = new Date();
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  
      setCurrentDate(formattedDate);
    }, []);
  
    return (
      <div>
        <p>{currentDate}</p>
      </div>
    );
  };
  
  export default CurrentDate;