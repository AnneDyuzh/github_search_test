import { useNavigate } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react';
import BackIcon from '@shared/assets/icons/back.svg';
import { Button } from '@shared/ui/Button/Button';

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ ...props }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Button
            onClick={handleGoBack}
            className="back_button"
            icon={<BackIcon />}
            label="Back"
        />
    );
};

