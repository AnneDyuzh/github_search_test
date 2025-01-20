import { Repository } from '@entities/repository/model/types';
import { observer } from 'mobx-react-lite';
import { CopyIconButton } from '@features/CopyIconButton/CopyIconButton';
import { FavoriteIconButton } from '@features/FavoriteIconButton/FavoriteIconButton';
import { RepoDetailIconBlock } from '@shared/ui/RepoDetailIconBlock/RepoDetailIconBlock';
import StarIcon from '@shared/assets/icons/star.svg';
import ForkIcon from '@shared/assets/icons/fork.svg';
import ArchiveIcon from '@shared/assets/icons/archive.svg';
import LanguageIcon from '@shared/assets/icons/language.svg';
import CreateIcon from '@shared/assets/icons/create.svg';
import ChangeIcon from '@shared/assets/icons/change.svg';
import { formatedDateToString } from '@shared/utils/formatedDateToString';
import './repositoryDetailCard.css';

interface RepositoryDetailCardProps {
    repo: Repository;
}

export const RepositoryDetailCard = observer(({ repo }: RepositoryDetailCardProps) => {
    return (
        <div className='repo_detail'>
            <h1>Профиль</h1>
            <div className='repo_detail_row'>
                <img src={repo.owner?.avatar_url} alt={repo.owner?.login} className="repo_detail_avatar" />
                <div className='repo_detail_main_info'>
                    <h2>{repo.full_name}</h2>
                    <p className='repo_desc'>{repo.description || "No description provided."}</p>
                </div>
            </div>
            <div className='detail_info_list'>
                <RepoDetailIconBlock
                    icon={<StarIcon />}
                    title={repo.stargazers_count || 0}
                    description={'Количество звезд'}
                />
                <RepoDetailIconBlock
                    icon={<ForkIcon />}
                    title={repo.forks_count || 0}
                    description={'Количестсво форков'}
                />
                <RepoDetailIconBlock
                    icon={<ArchiveIcon />}
                    title={repo.archived ? 'Да' : 'Нет'}
                    description={'В архиве'}
                />
                <RepoDetailIconBlock
                    icon={<LanguageIcon />}
                    title={repo.language}
                    description={'Язык'}
                />
                <RepoDetailIconBlock
                    icon={<CreateIcon />}
                    title={formatedDateToString(repo.created_at)}
                    description={'Cоздано'}
                />
                <RepoDetailIconBlock
                    icon={<ChangeIcon />}
                    title={formatedDateToString(repo.updated_at)}
                    description={'Изменено'}
                />
            </div>
            <div className="repo_buttons">
                <div className='repo_buttons_icons'>
                    <FavoriteIconButton repo={repo} />
                    <CopyIconButton link={repo.html_url} />
                </div>
                <a href={repo.html_url} className='repo_btn' target="_blank" rel="noopener noreferrer">Открыть репозиторий</a>
            </div>
        </div>
    )
})