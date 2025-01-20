import { ChangeEvent } from 'react';
import { Layout } from '@app/ui/Layout';
import { FavoritesList } from '@widgets/FavouriteList/FavoritesList';
import { Filters } from '@features/Filters/Filters';
import { observer } from 'mobx-react-lite';
import { useRepoStore } from '@shared/hooks/useRepoStore';
import { BackButton } from '@shared/ui/BackButton/BackButton';

export const Favorites = observer(() => {
    const repoStore = useRepoStore();

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        repoStore.setFavoritesFilters(e.target.value)
    }

    return (
        <Layout>
            <BackButton />
            <div className='sort_container'>
                <h2>Result: {repoStore.favoritesCount}</h2>
                <Filters handleChange={handleChangeSelect} />
            </div>
            <FavoritesList />
        </Layout>
    );
}
)