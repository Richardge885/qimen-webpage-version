import { GongWei } from '../../../interfaces';

interface Props {
    tianPanGan: string;
    diPanGan: string;
    tianPanShen: string;
    diPanShen: string;
    xing: string;
    men: string;
    anGan: string;
    anZhi: string;
    tianPanYiKon: boolean;
    diPanYiKon: boolean;
    gongKong: boolean;
    maXing: boolean;
    gongWangShuai: string;
}

const Gong = ({
    tianPanGan,
    diPanGan,
    tianPanShen,
    diPanShen,
    xing,
    men,
    anGan,
    anZhi,
    tianPanYiKon,
    diPanYiKon,
    gongKong,
    maXing,
    gongWangShuai,
}: Props) => {
    return (
        <>
            <span>{tianPanShen}</span>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anGan}</div>
                <div>{xing}</div>
                <div>{tianPanGan}</div>
                <div className='absolute right-[0.8vw] text-sm'>
                    {tianPanYiKon && '◇'}
                </div>
            </div>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anZhi}</div>
                <div>{men}</div>
                <div>{diPanGan}</div>
                <div className='absolute right-[0.8vw] text-sm'>
                    {diPanYiKon && '◇'}
                </div>
            </div>
            <span>{diPanShen}</span>
        </>
    );
};

export default Gong;
