import { PanJuInformation } from '../../interfaces';
import InformationSection from './InformationSection';
import JiuGong from './JiuGong';
import BottomSection from './BottomSection';

interface Props {
    panJuInfo: PanJuInformation;
    displayHuanJu: boolean;
    enableHuanJu: () => void;
    disableHuanJu: () => void;
}

const index = ({
    panJuInfo,
    displayHuanJu,
    disableHuanJu,
    enableHuanJu,
}: Props) => {
    const activeShiGan = (shiZhu: string) => {
        switch (shiZhu) {
            case '甲子':
                return '戊';
            case '甲戌':
                return '己';
            case '甲申':
                return '庚';
            case '甲午':
                return '辛';
            case '甲辰':
                return '壬';
            case '甲寅':
                return '癸';
        }
        return shiZhu.charAt(0);
    };
    return (
        <div className='flex h-screen flex-col items-center gap-[1rem] bg-bglight'>
            <InformationSection
                timeInformation={panJuInfo.allTimeInformation}
                zhiFu={panJuInfo.zhiFu}
                zhiShi={panJuInfo.zhiShi}
                xunShou={panJuInfo.xunShou}
            />
            <JiuGong
                panJu={panJuInfo.panJuResult}
                huanJu={panJuInfo.huanJu}
                displayHuanJu={displayHuanJu}
                currentZhiShi={panJuInfo.zhiShi}
                activeShiGan={activeShiGan(panJuInfo.allTimeInformation.shizhu)}
            />
            <BottomSection
                huanJuExist={
                    panJuInfo.huanJu.kanGong.tianPanGan === '' ? false : true
                }
                displayHuanJu={displayHuanJu}
                disableHuanJu={disableHuanJu}
                enableHuanJu={enableHuanJu}
            />
        </div>
    );
};

export default index;
