import './loadingIndicator.css';

export const LoadingIndicator = () => {
    return (
        {/* Пустые div используются для создания анимации кольца. 
          div - четверть кольца */}
        < div className = "loading-indicator" >
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div >
    );
};

