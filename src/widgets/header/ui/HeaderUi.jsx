import reactIcon from '../../../shared/assets/images/react.svg'

export const HeaderUi = () => {
    return (
        <div className="header">
            <img
                src={reactIcon}
                className="logo"
                alt="React icon"
            />
            <h1>
                MCC Test React
            </h1>
        </div>
    )
}