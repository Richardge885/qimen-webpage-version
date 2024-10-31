import { PanJuInformation } from '../../interfaces';

interface Props {
    panJuInfo: PanJuInformation;
}

const index = ({ panJuInfo }: Props) => {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-[1rem] bg-bglight pb-16'>
            排盘页面
        </div>
    );
};

export default index;
