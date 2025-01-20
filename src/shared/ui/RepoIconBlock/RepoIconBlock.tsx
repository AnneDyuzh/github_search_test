import { ReactNode } from 'react';
import './repoIconBlock.css';

type RepoIconBlockProps = {
    icon: ReactNode;
    title?: string | number | null;
};

export const RepoIconBlock = ({ icon, title }: RepoIconBlockProps) => {
    return (
        <div className='repo_item_with_icon'>
            {icon}
            <span>{title ?? ' '}</span>
        </div>
    );
};
