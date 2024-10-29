import { useEffect, useRef } from 'react';

interface Props {
    modalState: boolean;
    handleCloseModal: () => void;
}

const ModalBox = ({ modalState, handleCloseModal }: Props) => {
    const modalBoxStyle =
        'absolute gap-[10vw] left-1/2 top-1/2 flex h-[80vw] w-[70vw] translate-x-[-50%] flex-col items-center justify-center rounded-[15px] bg-bglight transition-all ease-linear z-10';

    // Clear number input box ever time the modal is shown
    const numberInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (modalState && numberInputRef.current) {
            numberInputRef.current.value = '';
        }
    }, [modalState]);

    return (
        <div
            className={
                modalState
                    ? modalBoxStyle + ' translate-y-[-50%] duration-300'
                    : modalBoxStyle + ' translate-y-[1000%] duration-500'
            }
        >
            <div className='flex w-[13.5rem] flex-row items-center justify-between text-xl'>
                <label
                    htmlFor='时辰'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='时辰'
                        className='peer hidden'
                        defaultChecked
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        时辰
                    </span>
                </label>

                <label
                    htmlFor='局数'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='局数'
                        className='peer hidden'
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        局数
                    </span>
                </label>

                <label
                    htmlFor='制筹'
                    className='flex cursor-pointer flex-col items-center rounded-[6px] border-[2px] border-solid border-red text-red'
                >
                    <input
                        type='radio'
                        name='qiJuMethod'
                        id='制筹'
                        className='peer hidden'
                    />
                    <span className='px-2 py-1 peer-checked:bg-red peer-checked:text-bglight'>
                        制筹
                    </span>
                </label>
            </div>
            <input
                type='number'
                className='h-[2rem] w-[8rem] rounded-[6px] border-[1px] border-solid border-red bg-bgdark p-2 text-center text-xl'
                ref={numberInputRef}
            />
            <button
                className='h-[10vw] w-[20vw] rounded-[10px] bg-red text-xl text-bglight transition-all duration-300 hover:scale-110'
                onClick={handleCloseModal}
            >
                起局
            </button>
        </div>
    );
};

export default ModalBox;
