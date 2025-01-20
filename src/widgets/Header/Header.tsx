import { Link } from 'react-router-dom';
import { useRepoStore } from '@shared/hooks/useRepoStore';
import { observer } from 'mobx-react-lite';
import HeartIcon from '@shared/assets/icons/heart.svg';
import ProfileIcon from '@shared/assets/icons/profile.svg';
import LogoIcon from '@shared/assets/icons/logo.svg';
import { ROUTES } from '@shared/config/routes';
import './header.css';

export const Header = observer(() => {
    const repoStore = useRepoStore();

    return (
        <header className="header">
            <div className='header_content'>
                <div className="logo">
                    <LogoIcon className="logo_icon" />
                    <span>GitHubSearch</span>
                </div>
                <div className="header_icons">
                    <Link to={ROUTES.favourites} className="favorites_btn">
                        <HeartIcon className="icon" />
                        {repoStore.favoritesCount > 0 && <span className="badge">{repoStore.favoritesCount}</span>}
                    </Link>
                    <ProfileIcon className="icon" />
                </div>
            </div>
        </header>
    );
});


