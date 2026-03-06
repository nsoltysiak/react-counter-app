import { useState, useEffect } from "react";
import React from "react";
import "../CounterSummary.css";

function CounterSummary( {countersExist, totalCount, clearAllCounters} )
{
    return (
    <>
      {/* Counters Exist*/}
      {countersExist && (
        <div className="count-and-clear">
          <h3>
            Total Count: <span>{totalCount}</span>
          </h3>
          <button onClick={clearAllCounters}>Clear All Counters</button>
        </div>
      )}

      {!countersExist && (
        <div className="no-counters">
          <h3>No counters yet</h3>
          <p>Create your first counter to start tracking!</p>
        </div>
      )}
    </>
    );
}

export default CounterSummary;