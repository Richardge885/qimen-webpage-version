import HomePagePaiPanButtonGroup from './HomPagePaiPanButtonGroup';
import TimeInput from './TimeInput';
import Title from '../../assets/Title.svg?react';
import { useState } from 'react';
import OverLay from './Modal/Overlay';

const HomePage = () => {
    const [modalState, setModalState] = useState(false);
    const openModal = () => setModalState(true);
    const closeModal = () => setModalState(false);

    return (
        <div className='flex h-screen flex-col items-center justify-center gap-[1rem] pb-16'>
            <OverLay
                modalState={modalState}
                handleCloseModal={closeModal}
            />
            <div className='flex h-[60vh] flex-col items-center justify-center gap-[1rem]'>
                <Title className='h-[35vh] w-[45vw] bg-transparent' />
                <TimeInput />
                <label className='text-center text-xl text-red'>
                    自选局：
                    <select className='bg-bgdark text-black'>
                        <option value=''>默认</option>
                        <optgroup label='阳遁'>
                            <option value='阳1局'>阳1局</option>
                            <option value='阳2局'>阳2局</option>
                            <option value='阳3局'>阳3局</option>
                            <option value='阳4局'>阳4局</option>
                            <option value='阳5局'>阳5局</option>
                            <option value='阳6局'>阳6局</option>
                            <option value='阳7局'>阳7局</option>
                            <option value='阳8局'>阳8局</option>
                            <option value='阳9局'>阳9局</option>
                        </optgroup>
                        <optgroup label='阴遁'>
                            <option value='阴1局'>阴1局</option>
                            <option value='阴2局'>阴2局</option>
                            <option value='阴3局'>阴3局</option>
                            <option value='阴4局'>阴4局</option>
                            <option value='阴5局'>阴5局</option>
                            <option value='阴6局'>阴6局</option>
                            <option value='阴7局'>阴7局</option>
                            <option value='阴8局'>阴8局</option>
                            <option value='阴9局'>阴9局</option>
                        </optgroup>
                    </select>
                </label>
            </div>
            <HomePagePaiPanButtonGroup openModal={openModal} />
        </div>
    );
};

export default HomePage;
