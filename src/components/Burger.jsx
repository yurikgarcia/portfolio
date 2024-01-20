import React from 'react';

function Burger() {
  return (
    <div className="burger-container">
      <button className="relative group invisible-background ">
        <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
            <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
            <div className="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Burger;
