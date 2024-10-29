import { GoHome } from 'react-icons/go';
import { CgHashtag } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';

interface Props {
    home: boolean;
    paipan: boolean;
    settings: boolean;
}

const NavigationBar = ({
    home = false,
    paipan = false,
    settings = false,
}: Props) => {
    return (
        <div className='flex h-[4rem] w-screen flex-row items-center justify-around bg-red sm:rounded-tl-[20px] sm:rounded-tr-[20px]'>
            <div>
                <GoHome
                    className={
                        home
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2.2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </div>
            <div>
                <CgHashtag
                    className={
                        paipan
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2.2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </div>
            <div>
                <IoSettingsOutline
                    className={
                        settings
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2.2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </div>
        </div>
    );
};

export default NavigationBar;
