import ModalBox from './ModalBox';

interface Props {
    handleCloseModal: () => void;
    modalState: boolean;

    displayInfo: string;
    selectedInfo: string;

    shen: string;
    xing: string;
    men: string;
    tianPanGan: string;
    diPanGan: string;
    baGua: string;
    updateSelectedInfo: (value: string) => void;
}

const Modal = ({
    modalState,
    handleCloseModal,
    selectedInfo,
    updateSelectedInfo,
    shen,
    xing,
    men,
    tianPanGan,
    diPanGan,
    baGua,

    displayInfo,
}: Props) => {
    return (
        <>
            <ModalBox
                modalState={modalState}
                selectedInfo={selectedInfo}
                displayInfo={displayInfo}
                shen={shen}
                xing={xing}
                men={men}
                tianPanGan={tianPanGan}
                diPanGan={diPanGan}
                baGua={baGua}
                updateSelectedInfo={updateSelectedInfo}
            />
            <div
                className={
                    modalState
                        ? 'absolute bottom-0 left-0 z-10 h-screen w-screen bg-black/[40%] opacity-100 transition-all duration-200 ease-in-out'
                        : 'absolute bottom-0 left-0 opacity-0 transition-all duration-200 ease-in-out'
                }
                onClick={() => {
                    handleCloseModal();
                }}
            ></div>
        </>
    );
};

export default Modal;
