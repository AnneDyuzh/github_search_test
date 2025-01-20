import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import LinkIcon from '@shared/assets/icons/link.svg';
import { Button } from '@shared/ui/Button/Button';
import './copyIconButton.css';

type CopyIconButtonProps = {
    link: string;
};

export const CopyIconButton = ({ link }: CopyIconButtonProps) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopyLink = () => {
        clipboardCopy(link ?? '');
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000);
    };

    return (
        <>
            <Button
                onClick={handleCopyLink}
                icon={<LinkIcon />}
            />
            {copySuccess && <div className="copy-success">Link is copied!</div>}
        </>
    );
};

