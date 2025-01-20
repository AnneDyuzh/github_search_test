import { useState, useEffect } from 'react';
import { useRepoStore } from '@shared/hooks/useRepoStore';
import { Repository } from '@entities/repository/model/types';
import { observer } from 'mobx-react-lite';
import FavoriteIcon from '@shared/assets/icons/favorite.svg';
import { Button } from '@shared/ui/Button/Button';
import './favoriteIconButton.css';

interface FavoriteIconButtonProps {
    repo: Repository;
}

export const FavoriteIconButton = observer(({ repo }: FavoriteIconButtonProps) => {
    const repoStore = useRepoStore();
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        setIsFavorited(repoStore.favoriteRepos.some(favRepo => favRepo.id === repo.id));
    }, [repo, repoStore.favoriteRepos]);

    const handleToggleFavorite = () => {
        const newFavoritedState = !isFavorited;
        setIsFavorited(newFavoritedState);
        repoStore.toggleFavorite(repo);
    };

    return (
        <Button
            onClick={handleToggleFavorite}
            className={isFavorited ? 'favorite_button_red' : 'favorite_button'}
            icon={<FavoriteIcon />}
        >
        </Button>
    );
});
