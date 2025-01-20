import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useRepoStore } from '@shared/hooks/useRepoStore';
import { fetchRepoDetails } from '@shared/api/api';
import { Layout } from '@app/ui/Layout';
import { RepositoryDetailCard } from '@entities/repository/ui/RepositoryDetailCard/RepositoryDetailCard';
import { LoadingIndicator } from '@shared/ui/LoadingIndicator/LoadingIndicator';
import { BackButton } from '@shared/ui/BackButton/BackButton';

export const RepositoryDetails = observer(() => {
    const { id } = useParams<{ id: string }>();
    const repoStore = useRepoStore();
    const repoId = Number(id);

    const repo = repoStore.selectedRepoDetails;

    useEffect(() => {
        if (!isNaN(repoId)) {
            fetchRepoDetails(repoId);
        }
    }, [repoId, repoStore]);

    if (repoStore.loading) {
        return <LoadingIndicator />;
    }

    if (repoStore.error) {
        return <div className='error_message'>{repoStore.error}</div>;
    }

    return (
        <Layout>
            <BackButton />
            {repo ? <RepositoryDetailCard repo={repo} /> : (<p>Репозиторий не найден</p>)}
        </Layout>
    );
});

