import { PanJuInformation } from '../../interfaces';
import InformationSection from './InformationSection';
import JiuGong from './JiuGong';
import BottomSection from './BottomSection';

interface Props {
    panJuInfo: PanJuInformation;
}

const index = ({ panJuInfo }: Props) => {
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
            />
            <BottomSection />
        </div>
    );
};

export default index;
