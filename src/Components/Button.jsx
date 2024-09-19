// eslint-disable-next-line react/prop-types
export function Button ({btnClass, text, onClick}) {
    return (
        <button className={`btn ${btnClass} btn-sm`} onClick={onClick}>{text}</button>
    );
};
