import { Repository } from "@entities/repository/model/types";

export const filteredReposUtil = ({ repos, filterKey }: { repos: Repository[], filterKey: string }): Repository[] => {
    switch (filterKey) {
        case 'stars_up':
            return repos.sort((a, b) => (a.stargazers_count || 0) - (b.stargazers_count || 0));

        case 'stars_down':

            return repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));;
        case 'alphavite':
            return [...repos].sort((a, b) => {
                const nameA = a?.name?.toLowerCase() ?? '';
                const nameB = b?.name?.toLowerCase() ?? '';

                if (nameA < nameB) {
                    return -1;
                }

                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });

        default:
            return repos
    }
}