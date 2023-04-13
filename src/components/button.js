import Button from "../css/buttoncss"

const ButtonYellow= ()=>{
    return(
        <Button>
        <div className="container">
            <button className="button">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10.5" y="0.5" width="1" height="21" fill="#fff" stroke="#fff" />
                    <rect x="21.5" y="10.5" width="1" height="21" transform="rotate(90 21.5 10.5)" fill="#fff" stroke="#fff" />
                </svg>
                <span>Add New</span>
                <div></div>
            </button>
            <h3 className="create">Create</h3>
        </div>
        </Button>
        
    )
};

export default ButtonYellow;