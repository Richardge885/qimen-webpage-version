import { FaArrowRotateLeft } from 'react-icons/fa6';

import { useState } from 'react';

const TimeInput = () => {
    const getCurrentTimeForInputTag = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [inputTime, setInputTime] = useState(getCurrentTimeForInputTag());

    const handleBackToCurrentTime = () => {
        setInputTime(getCurrentTimeForInputTag);
    };

    return (
        <>
            <div className='flex flex-row items-center justify-center gap-[0.2rem]'>
                <input
                    type='datetime-local'
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    className='h-[3rem] w-[14.5rem] rounded-[10px] border-[1px] border-solid border-red bg-bgdark text-xl'
                />
                <button
                    onClick={handleBackToCurrentTime}
                    className='h-[3rem] min-w-[3rem] rounded-[10px] bg-red text-center text-2xl text-bglight transition-all duration-150 hover:bg-bgdark hover:text-red'
                >
                    <FaArrowRotateLeft className='m-auto' />
                </button>
            </div>
        </>
    );
};

export default TimeInput;
