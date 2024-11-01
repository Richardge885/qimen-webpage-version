import { PanJuInformation } from '../../../interfaces';
import ModalBox from './ModalBox';

interface Props {
    modalState: boolean;
    handleCloseModal: () => void;
    updateActivePage: (page: string) => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
    updateBaoShuMethod: (method: string) => void;
    updateBaoShuNumber: (baoshu: number) => void;
    paiPanInfo: {
        paipanMethod: string;
        time: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
        };
        baoshuMethod: string; // 制筹, 时辰, 局数
        baoshu: number;
        ziXuanJu: string;
        additionalSettings: {
            traditionalCharacters: boolean;
            singleCharacter: boolean;
        };
    };
}

const Modal = ({
    modalState,
    handleCloseModal,
    updateActivePage,
    updateBaoShuMethod,
    updateBaoShuNumber,
    updatePanJu,
    paiPanInfo,
}: Props) => {
    return (
        <>
            <ModalBox
                updateActivePage={updateActivePage}
                modalState={modalState}
                paiPanInfo={paiPanInfo}
                updatePanJu={updatePanJu}
                updateBaoShuMethod={updateBaoShuMethod}
                updateBaoShuNumber={updateBaoShuNumber}
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

export default Modal;
