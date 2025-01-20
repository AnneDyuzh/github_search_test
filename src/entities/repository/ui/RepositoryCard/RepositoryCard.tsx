import { Link } from 'react-router-dom';
import { Repository } from '@entities/repository/model/types';
import { CopyIconButton } from '@features/CopyIconButton/CopyIconButton';
import { FavoriteIconButton } from '@features/FavoriteIconButton/FavoriteIconButton';
import { observer } from 'mobx-react-lite';
import StarIcon from '@shared/assets/icons/star.svg';
import ForkIcon from '@shared/assets/icons/fork.svg';
import { RepoIconBlock } from '@shared/ui/RepoIconBlock/RepoIconBlock';
import { ROUTES } from '@shared/config/routes';
import './repositoryCard.css';

interface RepositoryCardProps {
    repo: Repository;
}

export const RepositoryCard = observer(({ repo }: RepositoryCardProps) => {
    return (
        <div className="repository-card">
            <div className='repo_visual_info'>
                <img src={repo.owner?.avatar_url} alt={repo.owner?.login} className="avatar" />
                <div className='repo_icons'>
                    <RepoIconBlock
                        icon={<StarIcon />}
                        title={repo.stargazers_count || 0}
                    />
                    <RepoIconBlock
                        icon={<ForkIcon />}
                        title={repo.forks_count || 0}
                    />
                </div>
            </div>
            <div className="repo_main_info">
                <div className='repo_name'>@{repo.name}</div>
                <div className='repo_full_name'>{repo.full_name}</div>
            </div>
            <div className='repo_btn_row'>
                <div className='repo_buttons_icons'>
                    <FavoriteIconButton repo={repo} />
                    <CopyIconButton link={repo.html_url} />
                </div>
                <Link to={ROUTES.repository_details.replace(':id', repo.id.toString())} className='repo_btn'>Подробнее</Link>
            </div>
        </div>
    );
});
