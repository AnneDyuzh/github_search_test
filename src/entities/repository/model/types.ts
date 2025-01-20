export interface Repository {
    id: number;
    full_name: string;
    name: string;
    description?: string;
    owner: {
        login: string;
        avatar_url?: string;
    };
    forks_count?: number;
    stargazers_count?: number;
    html_url: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
    language: string;
    favorites: Repository[];
    toggleFavorite: (repo: Repository) => void;
}

