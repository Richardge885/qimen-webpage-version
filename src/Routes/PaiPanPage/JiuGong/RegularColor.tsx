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
            <span className='absolute right-[1vw] top-[1vw] text-[3.6vw]'>
                {gongKong && '〇'}
            </span>
            <span className='absolute left-[5vw] top-[1.3vw] text-[3.6vw]'>
                {maXing && <GiHorseHead />}
            </span>
            <span className='absolute bottom-[1vw] right-[1vw] text-[3.6vw]'>
                {gongWangShuai}
            </span>
            <span className={regularZhiFuStyle}>{tianPanShen}</span>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anGan}</div>
                <div className={regularZhiFuStyle}>{xing}</div>
                <div className={regularShiGanSytle}>
                    <span className='absolute bottom-[1.5rem] left-[0.17rem] text-[3.3vw] text-text'>
                        {displayTianPanLiuQin}
                    </span>
                    {tianPanGan}
                </div>
                <div className='absolute right-[0.8vw] text-[3.6vw]'>
                    {tianPanYiKon && '◇'}
                </div>
            </div>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anZhi}</div>
                <div className={regularZhiShiStyle}>{men}</div>
                <div className='relative'>
                    <span className='absolute left-[0.17rem] top-[1.5rem] text-[3.3vw]'>
                        {displayDiPanLiuQin}
                    </span>
                    {diPanGan}
                </div>
                <div className='absolute right-[0.8vw] text-[3.6vw]'>
                    {diPanYiKon && '◇'}
                </div>
            </div>
            <span className={regularDiPanZhiFuStyle}>{diPanShen}</span>
        </>
    );
};

export default RegularColor;
