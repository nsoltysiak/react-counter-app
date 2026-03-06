import { useState, useEffect } from "react";
import React from "react";
import "../AddCounter.css";

function AddCounter ( {isAddingCounter, setIsAddingCounter, newTitle, setNewTitle, newStep, setNewStep, handleCreate, handleCancel })
{
    return (
      <div className="addCounter">
        {/* Idle Mode */}
        {!isAddingCounter && (
          <button onClick={() => setIsAddingCounter(true)}>
            + Add New Counter
          </button>
        )}

        {/* Form Mode */}
        {isAddingCounter && (
          <div className="formCounterCancel">
            <h4>Create New Counter</h4>
            <label htmlFor="countername">Counter Name:</label>
            <input
              type="text"
              id="countername"
              name="countername"
              placeholder="Counter Name"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <label htmlFor="incrementamount">Increment Amount:</label>
            <input
              type="number"
              id="incrementamount"
              name="incrementamount"
              min="1"
              value={newStep}
              onChange={(e) => setNewStep(e.target.value)}
            />

            <button onClick={handleCreate} className="createCounter">
              Create Counter
            </button>
            <button onClick={handleCancel} className="cancelCounter">
              Cancel
            </button>
          </div>
        )}
      </div>
    );
}

export default AddCounter;