import HomePageChooseMethodButton from './HomePageChooseMethodButton';
import HomePageCurrentTimeButton from './HomePageCurrentTimeButton';
import { PanJuInformation } from '../../../interfaces';

interface Props {
    openModal: () => void;
    updatePanJu: (panJuInfo: PanJuInformation) => void;
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
    updateActivePage: (page: string) => void;
}

const HomePagePaiPanButtonGroup = ({
    openModal,
    updatePanJu,
    updateActivePage,
    paiPanInfo,
}: Props) => {
    const buttonStyle =
        'w-[15rem] h-[3rem] bg-red text-bglight text-[2.8rem] hover:bg-bgdark hover:text-red rounded-[20px] duration-200 py-10 flex flex-col justify-center items-center';

    return (
        <div className='flex h-[40vh] flex-col items-center justify-center gap-10'>
            <HomePageChooseMethodButton
                style={buttonStyle}
                openModal={openModal}
            />
            <HomePageCurrentTimeButton
                style={buttonStyle}
                paiPanInfo={paiPanInfo}
                updateActivePage={updateActivePage}
                updatePanJu={updatePanJu}
            />
        </div>
    );
};

export default HomePagePaiPanButtonGroup;
