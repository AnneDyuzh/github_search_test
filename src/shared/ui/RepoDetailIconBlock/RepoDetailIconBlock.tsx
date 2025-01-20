import React from 'react';
import { ReactNode } from 'react';
import './repoDetailIconBlock.css';

type RepoDetailIconBlockProps = {
    icon: ReactNode;
    title?: string | number | null;
    description: string;
};

export const RepoDetailIconBlock = ({ icon, title, description }: RepoDetailIconBlockProps) => {
    return (
        <div className='detail_info_item'>
            <div className='card_icon'>{icon}</div>
            <div className='detail_info_desc'>
                <h3 className='icon_block_title'>{title ?? ' '}</h3>
                <p className='icon_block_text'>{description}</p>
            </div>
        </div>
    );
};
