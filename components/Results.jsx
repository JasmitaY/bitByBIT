import React from "react";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

const ResultsStateToggle = ({ state, onUpdateState }) => {
  return (
    <>
      <div className="flex flex-row gap-4 font-normal">
        <div
          className={`${
            state === 0
              ? "flex rounded-lg bg-code-darkpurple px-3 py-1"
              : "flex cursor-pointer"
          }`}
          onClick={() => onUpdateState(0)}
        >
          <BsDot className="text-xl" />
          Case 1
        </div>
        <div
          className={`${
            state === 1
              ? "flex rounded-lg bg-code-darkpurple px-3 py-1"
              : "flex cursor-pointer"
          }`}
          onClick={() => onUpdateState(1)}
        >
          <BsDot className="text-xl " />
          Case 2
        </div>
      </div>
    </>
  );
};

const Results = () => {
  const [state, setState] = useState(0);

  return (
    <div style={{ overflow: "scroll", height: "150px" }}>
      <div className="flex flex-row gap-4 font-normal py-3">
        <div className="text-lg text-code-green">Accepted</div>
        <div className="text-sm text-code-gray">Runtime: 0ms</div>
      </div>
      <div>
        <ResultsStateToggle state={state} onUpdateState={setState} />
        {state === 0 && (
          <div className="h-40">
            <div>
              <p className="text-xs pt-3 text-code-gray">Input</p>
              <div className="flex flex-column rounded-lg bg-code-darkpurple px-3 py-1">
                <div className="text-xs text-code-gray pb-1">s =</div>
                <div>&quot;hello&quot;</div>
              </div>
            </div>
            <div>
              <p className="text-xs pt-3">Output</p>
              <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
                &quot;holle&quot;
              </div>
            </div>
            <div>
              <p className="text-xs pt-3">Expected</p>
              <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
                &quot;holle&quot;
              </div>
            </div>
          </div>
        )}
        {state === 1 && (
          <div className="h-40">
            <div>
              <p className="text-xs pt-3">Input</p>
              <div className="flex flex-column rounded-lg bg-code-darkpurple px-3 py-1">
                <div className="text-xs text-code-gray pb-1">s =</div>
                <div>&quot;balloon&quot;</div>
              </div>
            </div>
            <div>
              <p className="text-xs pt-3">Output</p>
              <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
                &quot;boollan&quot;
              </div>
            </div>
            <div>
              <p className="text-xs pt-3">Expected</p>
              <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
                &quot;boollan&quot;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
