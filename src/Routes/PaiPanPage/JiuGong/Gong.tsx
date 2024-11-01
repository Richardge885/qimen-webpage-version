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
    tianPanLiuQin,
    diPanLiuQin,
    tianPanShiShen,
    diPanShiShen,
    liuQinSettings,
    currentZhiShi,
    activeShiGan,
}: Props) => {
    // const tianPanShenColor;
    // const diPanShenColor;
    // const xingColor;
    // const menColor;
    // const tianPanGanColor;
    // const diPanGanColor;

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
            <span
                className={
                    tianPanShen === '值符'
                        ? 'text-[#E94C43]'
                        : tianPanShen === '符'
                          ? 'text-[#E94C43]'
                          : ''
                }
            >
                {tianPanShen}
            </span>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anGan}</div>
                <div className={tianPanShen === '值符' ? 'text-[#E94C43]' : ''}>
                    {xing}
                </div>
                <div
                    className={
                        tianPanGan === activeShiGan
                            ? 'relative text-[#E94C43]'
                            : 'relative'
                    }
                >
                    <span className='absolute bottom-[90%] right-[10%] text-[3.3vw] text-text'>
                        {liuQinSettings === ''
                            ? ''
                            : liuQinSettings === '六亲'
                              ? tianPanLiuQin
                              : tianPanShiShen}
                    </span>
                    {tianPanGan}
                </div>
                <div className='absolute right-[0.8vw] text-[3.6vw]'>
                    {tianPanYiKon && '◇'}
                </div>
            </div>
            <div className='flex w-[90%] flex-row items-center justify-evenly'>
                <div>{anZhi}</div>
                <div
                    className={
                        men.charAt(0) === currentZhiShi ? 'text-[#E94C43]' : ''
                    }
                >
                    {men}
                </div>
                <div className='relative'>
                    <span className='absolute right-[10%] top-[90%] text-[3.3vw]'>
                        {liuQinSettings === ''
                            ? ''
                            : liuQinSettings === '六亲'
                              ? diPanLiuQin
                              : diPanShiShen}
                    </span>
                    {diPanGan}
                </div>
                <div className='absolute right-[0.8vw] text-[3.6vw]'>
                    {diPanYiKon && '◇'}
                </div>
            </div>
            <span
                className={
                    diPanShen === '值符'
                        ? 'text-[#E94C43]'
                        : diPanShen === '符'
                          ? 'text-[#E94C43]'
                          : ''
                }
            >
                {diPanShen}
            </span>
        </>
    );
};

// function getColor(symbol: string) {
//     if (symbol == '值符' || symbol == '六合' || symbol == '乙'||symbol == '伤门'||symbol == '杜门'||symbol == '伤'||symbol == '杜') {
//         return 'bg-mu';
//     } else if (symbol == '螣蛇' || symbol == '丙' || symbol == '丁'){
//         return 'bg-huo';
//     } else if (){
//         return 'bg-tu';
//     } else if (){
//         return 'bg-jin';
//     } else{
//         return 'bg-shui';
//     }
// }

export default Gong;
