import ModalBox from './ModalBox';

interface Props {
    modalState: boolean;
    handleCloseModal: () => void;
}

const OverLay = ({ modalState, handleCloseModal }: Props) => {
    return (
        <>
            <ModalBox
                modalState={modalState}
                handleCloseModal={handleCloseModal}
            />
            <div
                className={
                    modalState
                        ? 'absolute bottom-0 left-0 z-10 h-screen w-screen bg-black/[40%] opacity-100 transition-all duration-200 ease-in-out'
                        : 'absolute bottom-0 left-0 opacity-0 transition-all duration-200 ease-in-out'
                }
                onClick={handleCloseModal}
            ></div>
        </>
    );
};

export default OverLay;
