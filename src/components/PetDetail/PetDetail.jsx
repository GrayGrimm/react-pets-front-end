
const PetDetail = ({ selected, handleFormView }) => {
    // return if props.selected is null
    if (!selected) {
        return (
            <div>
                <h1>NO DETAILS</h1>
            </div>
        );
    }

    // return statement if props.selected has a truthy value
    return (
        <div>
            <h1>{selected.name}</h1>
            <h2>Breed: {selected.breed}</h2>
            <h2>
                Age: {selected.age} year{selected.age > 1 ? 's' : ''} old
            </h2>
            <div>
                <button onClick={() => handleFormView(selected)}>
                    Edit Pet
                </button>
            </div>
        </div>
    );
};
export default PetDetail;