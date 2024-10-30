import HomePageChooseMethodButton from './HomePageChooseMethodButton';
import HomePageCurrentTimeButton from './HomePageCurrentTimeButton';

interface Props {
    openModal: () => void;
}

const HomePagePaiPanButtonGroup = ({ openModal }: Props) => {
    const buttonStyle =
        'w-[15rem] h-[3rem] bg-red text-bglight text-[2.8rem] hover:bg-bgdark hover:text-red rounded-[20px] duration-200 py-10 flex flex-col justify-center items-center';

    return (
        <div className='flex h-[40vh] flex-col items-center justify-center gap-10'>
            <HomePageCurrentTimeButton style={buttonStyle} />
            <HomePageChooseMethodButton
                style={buttonStyle}
                openModal={openModal}
            />
        </div>
    );
};

export default HomePagePaiPanButtonGroup;
