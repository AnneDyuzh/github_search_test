import RepoStore from '@entities/repository/model/repoStore';
import { Repository } from '@entities/repository/model/types';

interface IfetchReposProps {
    query?: string
}

const handleApiError = (status: number) => {
    switch (status) {
        case 403:
            RepoStore.setError("GitHub API rate limit exceeded. Please try again later.");
            break;
        case 404:
            RepoStore.setError("Repository not found.");
            break;
        case 500:
            RepoStore.setError("GitHub server error. Please try again later.");
            break;
        default:
            RepoStore.setError("Please try again later.");
            break;
    }
};

export const fetchRepos = async ({ query = 'test' }: IfetchReposProps) => {
    RepoStore.setLoading(true);
    RepoStore.setError(null);
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=100`);

        if (!response.ok) {
            handleApiError(response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        RepoStore.setRepos(data?.items || []);
    } catch (error: any) {
        console.error('Error fetching repositories:', error);

        if (!RepoStore.error) {
            RepoStore.setError(error.message);
        }

    } finally {
        RepoStore.setLoading(false);
    }
};

export const fetchRepoDetails = async (id: number): Promise<void> => {
    RepoStore.setLoading(true);
    RepoStore.setError(null);
    try {
        const response = await fetch(`https://api.github.com/repositories/${id}`);

        if (!response.ok) {
            handleApiError(response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        RepoStore.setRepoDetails(data as Repository);
    } catch (error: any) {
        console.error('Error fetching repository details:', error);

        if (!RepoStore.error) {
            RepoStore.setError(error.message);
        }

    } finally {
        RepoStore.setLoading(false);
    }
};
