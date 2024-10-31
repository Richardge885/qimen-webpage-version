import { JiuGongXinXi } from '../../../interfaces';
import Gong from './Gong';

interface Props {
    panJu: JiuGongXinXi;
    huanJu: JiuGongXinXi;
}

const index = ({ panJu, huanJu }: Props) => {
    const adjustThingsInTheMiddle =
        'flex flex-col items-center justify-evenly text-text relative';
    return (
        <div className='flex w-[93vw] flex-col items-center text-[4.5vw]'>
            <div className='flex flex-row'>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse rounded-tl-lg border-[1px] border-l-[2px] border-t-[2px] border-solid border-[#886A36]'
                    }
                    id='xun'
                >
                    <Gong
                        tianPanGan={panJu.xunGong.tianPanGan}
                        diPanGan={panJu.xunGong.diPanGan}
                        tianPanShen={panJu.xunGong.tianPanShen}
                        diPanShen={panJu.xunGong.diPanShen}
                        xing={panJu.xunGong.xing}
                        men={panJu.xunGong.men}
                        anGan={panJu.xunGong.anGan}
                        anZhi={panJu.xunGong.anZhi}
                        tianPanYiKon={panJu.xunGong.tianPanYiKong}
                        diPanYiKon={panJu.xunGong.diPanYiKong}
                        gongKong={panJu.xunGong.gongKong}
                        maXing={panJu.xunGong.maXing}
                        gongWangShuai={panJu.xunGong.gongWangShuai}
                    />
                </div>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse border-[1px] border-t-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.liGong.tianPanGan}
                        diPanGan={panJu.liGong.diPanGan}
                        tianPanShen={panJu.liGong.tianPanShen}
                        diPanShen={panJu.liGong.diPanShen}
                        xing={panJu.liGong.xing}
                        men={panJu.liGong.men}
                        anGan={panJu.liGong.anGan}
                        anZhi={panJu.liGong.anZhi}
                        tianPanYiKon={panJu.liGong.tianPanYiKong}
                        diPanYiKon={panJu.liGong.diPanYiKong}
                        gongKong={panJu.liGong.gongKong}
                        maXing={panJu.liGong.maXing}
                        gongWangShuai={panJu.liGong.gongWangShuai}
                    />
                </div>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse rounded-tr-lg border-[1px] border-r-[2px] border-t-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.kunGong.tianPanGan}
                        diPanGan={panJu.kunGong.diPanGan}
                        tianPanShen={panJu.kunGong.tianPanShen}
                        diPanShen={panJu.kunGong.diPanShen}
                        xing={panJu.kunGong.xing}
                        men={panJu.kunGong.men}
                        anGan={panJu.kunGong.anGan}
                        anZhi={panJu.kunGong.anZhi}
                        tianPanYiKon={panJu.kunGong.tianPanYiKong}
                        diPanYiKon={panJu.kunGong.diPanYiKong}
                        gongKong={panJu.kunGong.gongKong}
                        maXing={panJu.kunGong.maXing}
                        gongWangShuai={panJu.kunGong.gongWangShuai}
                    />
                </div>
            </div>
            <div className='flex flex-row'>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse border-[1px] border-l-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.zhenGong.tianPanGan}
                        diPanGan={panJu.zhenGong.diPanGan}
                        tianPanShen={panJu.zhenGong.tianPanShen}
                        diPanShen={panJu.zhenGong.diPanShen}
                        xing={panJu.zhenGong.xing}
                        men={panJu.zhenGong.men}
                        anGan={panJu.zhenGong.anGan}
                        anZhi={panJu.zhenGong.anZhi}
                        tianPanYiKon={panJu.zhenGong.tianPanYiKong}
                        diPanYiKon={panJu.zhenGong.diPanYiKong}
                        gongKong={panJu.zhenGong.gongKong}
                        maXing={panJu.zhenGong.maXing}
                        gongWangShuai={panJu.zhenGong.gongWangShuai}
                    />
                </div>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse border-[1px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.zhongGong.tianPanGan}
                        diPanGan={panJu.zhongGong.diPanGan}
                        tianPanShen={panJu.zhongGong.tianPanShen}
                        diPanShen={panJu.zhongGong.diPanShen}
                        xing={panJu.zhongGong.xing}
                        men={panJu.zhongGong.men}
                        anGan={panJu.zhongGong.anGan}
                        anZhi={panJu.zhongGong.anZhi}
                        tianPanYiKon={panJu.zhongGong.tianPanYiKong}
                        diPanYiKon={panJu.zhongGong.diPanYiKong}
                        gongKong={panJu.zhongGong.gongKong}
                        maXing={panJu.zhongGong.maXing}
                        gongWangShuai={panJu.zhongGong.gongWangShuai}
                    />
                </div>

                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse border-[1px] border-r-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.duiGong.tianPanGan}
                        diPanGan={panJu.duiGong.diPanGan}
                        tianPanShen={panJu.duiGong.tianPanShen}
                        diPanShen={panJu.duiGong.diPanShen}
                        xing={panJu.duiGong.xing}
                        men={panJu.duiGong.men}
                        anGan={panJu.duiGong.anGan}
                        anZhi={panJu.duiGong.anZhi}
                        tianPanYiKon={panJu.duiGong.tianPanYiKong}
                        diPanYiKon={panJu.duiGong.diPanYiKong}
                        gongKong={panJu.duiGong.gongKong}
                        maXing={panJu.duiGong.maXing}
                        gongWangShuai={panJu.duiGong.gongWangShuai}
                    />
                </div>
            </div>
            <div className='flex flex-row'>
                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse rounded-bl-lg border-[1px] border-b-[2px] border-l-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.genGong.tianPanGan}
                        diPanGan={panJu.genGong.diPanGan}
                        tianPanShen={panJu.genGong.tianPanShen}
                        diPanShen={panJu.genGong.diPanShen}
                        xing={panJu.genGong.xing}
                        men={panJu.genGong.men}
                        anGan={panJu.genGong.anGan}
                        anZhi={panJu.genGong.anZhi}
                        tianPanYiKon={panJu.genGong.tianPanYiKong}
                        diPanYiKon={panJu.genGong.diPanYiKong}
                        gongKong={panJu.genGong.gongKong}
                        maXing={panJu.genGong.maXing}
                        gongWangShuai={panJu.genGong.gongWangShuai}
                    />
                </div>

                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse border-[1px] border-b-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.kanGong.tianPanGan}
                        diPanGan={panJu.kanGong.diPanGan}
                        tianPanShen={panJu.kanGong.tianPanShen}
                        diPanShen={panJu.kanGong.diPanShen}
                        xing={panJu.kanGong.xing}
                        men={panJu.kanGong.men}
                        anGan={panJu.kanGong.anGan}
                        anZhi={panJu.kanGong.anZhi}
                        tianPanYiKon={panJu.kanGong.tianPanYiKong}
                        diPanYiKon={panJu.kanGong.diPanYiKong}
                        gongKong={panJu.kanGong.gongKong}
                        maXing={panJu.kanGong.maXing}
                        gongWangShuai={panJu.kanGong.gongWangShuai}
                    />
                </div>

                <div
                    className={
                        adjustThingsInTheMiddle +
                        ' h-[31vw] w-[31vw] border-collapse rounded-br-lg border-[1px] border-b-[2px] border-r-[2px] border-solid border-[#886A36]'
                    }
                >
                    <Gong
                        tianPanGan={panJu.qianGong.tianPanGan}
                        diPanGan={panJu.qianGong.diPanGan}
                        tianPanShen={panJu.qianGong.tianPanShen}
                        diPanShen={panJu.qianGong.diPanShen}
                        xing={panJu.qianGong.xing}
                        men={panJu.qianGong.men}
                        anGan={panJu.qianGong.anGan}
                        anZhi={panJu.qianGong.anZhi}
                        tianPanYiKon={panJu.qianGong.tianPanYiKong}
                        diPanYiKon={panJu.qianGong.diPanYiKong}
                        gongKong={panJu.qianGong.gongKong}
                        maXing={panJu.qianGong.maXing}
                        gongWangShuai={panJu.qianGong.gongWangShuai}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
