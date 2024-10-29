import NavigationBar from '../NavigationBar';
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
        <div className='flex h-screen flex-col items-center justify-center gap-[1rem] bg-bglight'>
            <div className='flex h-[60vh] flex-col items-center justify-center gap-[1rem]'>
                <Title className='h-[35vh] w-[45vw] bg-transparent' />
                <TimeInput />
            </div>
            <HomePagePaiPanButtonGroup openModal={openModal} />
            <NavigationBar
                home={true}
                paipan={false}
                settings={false}
            />
            <OverLay
                modalState={modalState}
                handleCloseModal={closeModal}
            />
        </div>
    );
};

export default HomePage;
