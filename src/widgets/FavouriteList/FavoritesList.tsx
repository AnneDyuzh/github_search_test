import { observer } from 'mobx-react-lite';
import { useRepoStore } from '@shared/hooks/useRepoStore';
import { RepositoryCard } from '@entities/repository/ui/RepositoryCard/RepositoryCard';

export const FavoritesList = observer(() => {
    const repoStore = useRepoStore();
    const favoriteRepos = repoStore.favoriteFilteredRepos;

    if (favoriteRepos.length === 0) {
        return <p>The list of favorite repositories is empty.</p>;
    }

    return (
        <div className='repo_list'>
            {favoriteRepos.map((repo) => (
                <div className='repo_item' key={repo.id}>
                    <RepositoryCard
                        repo={repo}
                    />
                </div>
            ))}
        </div>
    );
});
