import ModalItems from './ModalItems';

interface Props {
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

const ModalBox = ({
    modalState,
    selectedInfo,
    displayInfo,
    shen,
    xing,
    men,
    tianPanGan,
    diPanGan,
    baGua,
    updateSelectedInfo,
}: Props) => {
    const modalBoxStyle =
        'absolute left-1/2 top-1/2 flex h-[110vw] w-[90vw] translate-x-[-50%] flex-row justify-center rounded-[15px] bg-bglight transition-all ease-linear z-20 overflow-hidden';

    return (
        <div
            className={
                modalBoxStyle +
                (modalState
                    ? ' translate-y-[-50%] border-[2px] border-[#886A36] duration-300'
                    : ' translate-y-[500%] border-[2px] border-[#886A36] duration-500')
            }
        >
            <div
                className='h-[100%] w-[80%] overflow-scroll p-4'
                dangerouslySetInnerHTML={{ __html: displayInfo }}
            ></div>
            <ModalItems
                selectedInfo={selectedInfo}
                shen={shen}
                xing={xing}
                men={men}
                tianPanGan={tianPanGan}
                diPanGan={diPanGan}
                baGua={baGua}
                updateSelectedInfo={updateSelectedInfo}
            />
        </div>
    );
};

export default ModalBox;
