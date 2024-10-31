import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const index = () => {
    return (
        <div className='flex w-screen flex-col items-center justify-center gap-4 px-4'>
            <input
                type='text'
                className='w-[93vw] rounded-lg border-[2px] border-[#886A36] p-1 text-[5vw]'
            />
            <div className='flex w-[93vw] flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                    <button className='flex h-[10vw] w-[10vw] flex-row items-center justify-center rounded-lg bg-red text-center'>
                        <FaArrowLeft className='text-[5vw] text-bglight' />
                    </button>
                    <button className='flex h-[10vw] w-[10vw] flex-row items-center justify-center rounded-lg bg-red text-center'>
                        <FaArrowRight className='text-[5vw] text-bglight' />
                    </button>
                </div>
                <button className='flex h-[10vw] w-[25vw] flex-row items-center justify-center rounded-lg bg-red p-1 text-center text-[5vw] text-bglight'>
                    甲时换局
                </button>
            </div>
        </div>
    );
};

export default index;
