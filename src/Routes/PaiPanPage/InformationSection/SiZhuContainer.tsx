interface Props {
    nianZhu: string;
    yueZhu: string;
    riZhu: string;
    shiZhu: string;
}
const index = ({ nianZhu, yueZhu, riZhu, shiZhu }: Props) => {
    const wuXingColor: boolean = JSON.parse(
        localStorage.getItem('qimenSettings')!,
    ).wuXingColor;
    const nianGanColor = getColor(nianZhu.charAt(0));
    const nianZhiColor = getColor(nianZhu.charAt(1));
    const yueGanColor = getColor(yueZhu.charAt(0));
    const yueZhiColor = getColor(yueZhu.charAt(1));
    const riGanColor = getColor(riZhu.charAt(0));
    const riZhiColor = getColor(riZhu.charAt(1));
    const shiGanColor = getColor(shiZhu.charAt(0));
    const shiZhiColor = getColor(shiZhu.charAt(1));

    const columnSytle =
        'flex w-8 m:w-11 sm:w-16 flex-col items-center border-2 border-[#886A36] m:py-2';
    const topColumnSytle = 'text-center text-text sm:pb-2';
    const bottomColumnStyle =
        'w-8 m:w-11 sm:w-16 border-t-2 border-[#886A36] text-center text-text sm:pt-1';

    return (
        <div className='flex flex-row text-xl m:text-2xl sm:text-4xl'>
            <div
                className={
                    columnSytle +
                    ' rounded-bl-[10px] rounded-tl-[10px] border-r-0 m:py-1'
                }
            >
                <div className={topColumnSytle}>年</div>
                <div className={bottomColumnStyle}>
                    <span className={wuXingColor ? nianGanColor : ''}>
                        {nianZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? nianZhiColor : ''}>
                        {nianZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div className={columnSytle + ' border-r-0 m:py-1'}>
                <div className={topColumnSytle}>月</div>
                <div className={bottomColumnStyle}>
                    <span className={wuXingColor ? yueGanColor : ''}>
                        {yueZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? yueZhiColor : ''}>
                        {yueZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div className={columnSytle + ' m:py-1'}>
                <div className={topColumnSytle}>日</div>
                <div className={bottomColumnStyle}>
                    <span className={wuXingColor ? riGanColor : ''}>
                        {riZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? riZhiColor : ''}>
                        {riZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div
                className={
                    columnSytle +
                    ' rounded-br-[10px] rounded-tr-[10px] border-l-0 m:py-1'
                }
            >
                <div className={topColumnSytle}>时</div>
                <div className={bottomColumnStyle}>
                    <span className={wuXingColor ? shiGanColor : ''}>
                        {shiZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? shiZhiColor : ''}>
                        {shiZhu.charAt(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const getColor = (symbol: string) => {
    if (symbol == '甲' || symbol == '乙' || symbol == '寅' || symbol == '卯') {
        return 'text-mu';
    } else if (
        symbol == '丙' ||
        symbol == '丁' ||
        symbol == '巳' ||
        symbol == '午'
    ) {
        return 'text-huo';
    } else if (
        symbol == '壬' ||
        symbol == '癸' ||
        symbol == '亥' ||
        symbol == '子'
    ) {
        return 'text-shui';
    } else if (
        symbol == '庚' ||
        symbol == '辛' ||
        symbol == '申' ||
        symbol == '酉'
    ) {
        return 'text-jin';
    } else {
        return 'text-tu';
    }
};

export default index;
