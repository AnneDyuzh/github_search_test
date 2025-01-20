import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { RepositoryCard } from '@entities/repository/ui/RepositoryCard/RepositoryCard';
import { LoadingIndicator } from '@shared/ui/LoadingIndicator/LoadingIndicator';
import { Repository } from '@entities/repository/model/types';
import { Filters } from '@features/Filters/Filters';
import './repositoryList.css';
import { useRepoStore } from '@shared/hooks/useRepoStore';

export const RepositoryList = observer(() => {
    let headerContent = null;
    const repoStore = useRepoStore();

    if (repoStore.loading) {
        return <LoadingIndicator />;
    }

    if (repoStore.error) {
        return <div className='error_message'>{repoStore.error}</div>;
    }

    if (repoStore.filterdRepos.length > 0) {
        headerContent = <span>{repoStore.filterdRepos.length} repositories</span>;
    } else {
        headerContent = <span>No repositories found</span>;
    }

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        repoStore.setFilters(e.target.value)
    }
    console.log(repoStore.filters)
    return (
        <>
            <div className='sort_container'>
                {headerContent && <h2 className='total_repo'>Result: {headerContent}</h2>}
                <Filters handleChange={handleChangeSelect} />
            </div>
            {repoStore.filterdRepos.length > 0 && (
                <div className='repo_list'>
                    {repoStore.filterdRepos.map((repo: Repository) => (
                        <div className='repo_item' key={repo.id}>
                            <RepositoryCard repo={repo} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
});
