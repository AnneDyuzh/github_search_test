import './loadingIndicator.css';

export const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

