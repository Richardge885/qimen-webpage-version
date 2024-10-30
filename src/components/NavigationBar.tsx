import { GoHome } from 'react-icons/go';
import { CgHashtag } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface Props {
    activePage: string;
    setActivePage: (page: string) => void;
}

const NavigationBar = ({ activePage, setActivePage }: Props) => {
    return (
        <div className='absolute bottom-0 flex h-[4rem] w-screen flex-row items-center justify-around bg-red sm:rounded-tl-[20px] sm:rounded-tr-[20px]'>
            <Link
                to={'/qimen-webpage-version/'}
                onClick={() => {
                    setActivePage('home');
                }}
            >
                <GoHome
                    className={
                        activePage === 'home'
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </Link>
            <Link
                to={'/qimen-webpage-version/paipan'}
                onClick={() => {
                    setActivePage('paipan');
                }}
            >
                <CgHashtag
                    className={
                        activePage === 'paipan'
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </Link>
            <Link
                to={'/qimen-webpage-version/settings'}
                onClick={() => {
                    setActivePage('settings');
                }}
            >
                <IoSettingsOutline
                    className={
                        activePage === 'settings'
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </Link>
        </div>
    );
};

export default NavigationBar;
