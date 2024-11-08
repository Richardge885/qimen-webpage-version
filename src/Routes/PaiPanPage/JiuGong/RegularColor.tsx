import { GiHorseHead } from 'react-icons/gi';
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
    tianPanLiuQin: string;
    diPanLiuQin: string;
    tianPanShiShen: string;
    diPanShiShen: string;
    liuQinSettings: string;
    currentZhiShi: string;
    activeShiGan: string;
}
const RegularColor = ({
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
    tianPanLiuQin,
    diPanLiuQin,
    tianPanShiShen,
    diPanShiShen,
    liuQinSettings,
    currentZhiShi,
    activeShiGan,
}: Props) => {
    const displayTianPanLiuQin =
        liuQinSettings === ''
            ? ''
            : liuQinSettings === '六亲'
              ? tianPanLiuQin
              : tianPanShiShen;
    const displayDiPanLiuQin =
        liuQinSettings === ''
            ? ''
            : liuQinSettings === '六亲'
              ? diPanLiuQin
              : diPanShiShen;

    const regularZhiFuStyle =
        tianPanShen === '值符'
            ? 'text-[#E94C43]'
            : tianPanShen === '符'
              ? 'text-[#E94C43]'
              : '';
    const regularDiPanZhiFuStyle =
        diPanShen === '值符'
            ? 'text-[#E94C43]'
            : diPanShen === '符'
              ? 'text-[#E94C43]'
              : '';
    const regularZhiShiStyle =
        men.charAt(0) === currentZhiShi ? 'text-[#E94C43]' : '';
    const regularShiGanSytle =
        tianPanGan === activeShiGan ? 'relative text-[#E94C43]' : 'relative';
    return (
        <>
            <span className='absolute right-1 sm:right-2 top-[0.0rem] sm:top-1 text-xs m:text-sm sm:text-xl'>
                {gongKong && '〇'}
            </span>
            <span className='absolute left-3 top-1 sm:left-6 sm:top-3 text-sm m:text-lg sm:text-xl'>
                {maXing && <GiHorseHead />}
            </span>
            <span className='absolute bottom-1 left-2 text-xs m:text-[0.9rem] sm:text-xl'>
                {gongWangShuai}
            </span>
            <span>{tianPanShen}</span>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anGan}</div>
                <div className={regularZhiFuStyle}>{xing}</div>
                <div className={regularShiGanSytle}>
                    <span className='absolute bottom-4 m:bottom-5 sm:bottom-7 left-[0.17rem] sm:left-[0.21rem] text-[0.5rem] m:text-[0.9rem] sm:text-lg text-text'>
                        {displayTianPanLiuQin}
                    </span>
                    {tianPanGan}
                </div>
                <div className='absolute right-0 text-xs m:text-[0.9rem] sm:text-xl'>
                    {tianPanYiKon && '◇'}
                </div>
            </div>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anZhi}</div>
                <div className={regularZhiShiStyle}>{men}</div>
                <div className='relative'>
                    <span className='absolute top-4 m:top-5 sm:top-7 left-[0.15rem] sm:left-[0.21rem] text-[0.5rem] m:text-[0.9rem] sm:text-lg text-text'>
                        {displayDiPanLiuQin}
                    </span>
                    {diPanGan}
                </div>
                <div className='absolute right-0 text-xs m:text-[0.9rem] sm:text-xl'>
                    {diPanYiKon && '◇'}
                </div>
            </div>
            <span className={regularDiPanZhiFuStyle}>{diPanShen}</span>
        </>
    );
};

export default RegularColor;
