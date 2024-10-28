import { useState } from 'react';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import HomePageChooseMethodButton from './HomePageChooseMethodButton';
import HomePageCurrentTimeButton from './HomePageCurrentTimeButton';

const HomePage = () => {
    const buttonStyle =
        'w-[60vw] h-[3rem] bg-red text-bglight text-[2.8rem] hover:bg-bgdark hover:text-red rounded-[20px] duration-200 py-10 flex flex-col justify-center items-center';

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
        <div className='flex h-screen flex-col items-center justify-center bg-bglight'>
            <div className='flex h-[60vh] flex-col items-center justify-center gap-[1rem]'>
                <h1 className='font-lishu text-[10rem] text-red'>鸣法</h1>
                <div className='flex max-w-[40vw] flex-row items-center justify-center gap-[0.2rem]'>
                    <input
                        type='datetime-local'
                        value={inputTime}
                        onChange={(e) => setInputTime(e.target.value)}
                        className='min-h-[7vh] min-w-[80vw] rounded-[10px] border-[1px] border-solid border-red bg-bgdark text-2xl'
                    />
                    <button
                        onClick={handleBackToCurrentTime}
                        className='min-h-[7vh] min-w-[15vw] rounded-[10px] bg-red text-center text-2xl text-bglight transition-all duration-150 hover:bg-bgdark hover:text-red'
                    >
                        <FaArrowRotateLeft className='m-auto' />
                    </button>
                </div>
            </div>
            <div className='flex h-[40vh] flex-col items-center justify-center gap-10'>
                <HomePageCurrentTimeButton style={buttonStyle} />
                <HomePageChooseMethodButton style={buttonStyle} />
            </div>
        </div>
    );
};

export default HomePage;
