import { makeAutoObservable } from 'mobx';
import { Repository } from '@entities/repository/model/types';
import { filteredReposUtil } from '@shared/utils/filteredReposUtil';

class RepoStore {
    repos: Repository[] = [];
    filterdRepos: Repository[] = [];
    favoriteRepos: Repository[] = [];
    favoriteFilteredRepos: Repository[] = [];
    selectedRepoDetails: Repository | null = null;
    loading: boolean = false;
    loadingDetails: boolean = false;
    error: string | null = null;
    searchQuery: string = '';
    filters: string = 'none_filters';
    favoritesFilters: string = 'none_filters';

    constructor() {
        makeAutoObservable(this);
    }

    setRepos = (repos: Repository[]) => {
        this.repos = repos
        this.filterdRepos = repos
        this.filters = 'none_filters'
    }

    setRepoDetails = (selectedRepoDetails: Repository | null) => {
        this.selectedRepoDetails = selectedRepoDetails;
    }

    setLoading = (value: boolean) => {
        this.loading = value
    }

    setError = (error: string | null) => {
        this.error = error;
    };

    setFilters = (value: string) => {
        this.filters = value
        this.filterdRepos = filteredReposUtil({ repos: this.repos, filterKey: value })
    }

    setFavoritesFilters = (value: string) => {
        this.favoritesFilters = value
        this.favoriteFilteredRepos = filteredReposUtil({ repos: this.favoriteRepos, filterKey: value })
    }

    addToFavorites = (repo: Repository) => {

        if (!this.favoriteRepos.find((favRepo) => favRepo.id === repo.id)) {
            this.favoriteRepos.push(repo);
            this.favoriteFilteredRepos.push(repo);
        }

    };

    removeFromFavorites = (repo: Repository) => {
        this.favoriteRepos = this.favoriteRepos.filter((favRepo) => favRepo.id !== repo.id);
        this.favoriteFilteredRepos = this.favoriteFilteredRepos.filter((favRepo) => favRepo.id !== repo.id);
    };

    toggleFavorite = (repo: Repository) => {
        const isFavorited = this.favoriteRepos.some((favRepo) => favRepo.id === repo.id);

        if (isFavorited) {
            this.removeFromFavorites(repo);
        } else {
            this.addToFavorites(repo);
        }

    };

    get favoritesCount(): number {
        return this.favoriteRepos.length;
    }
}

export default new RepoStore();