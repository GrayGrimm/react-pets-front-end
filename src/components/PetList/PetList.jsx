const PetList = ({ pets, handleSelect, handleFormView, isFormOpen }) => {

    return (
        <div>
            <h1>Pet List</h1>
            <div>
                {!pets.length ? (
                    <h2>No Pets Yet!</h2>
                ) : (
                    <ul>
                        {pets.map((pet) => (
                            <li
                                key={pet._id}
                                style={{ cursor: 'pointer', color: "#646CFF" }}
                                onClick={() => handleSelect(pet)}
                            >
                                {pet.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={handleFormView}>
                { isFormOpen ? 'Close Form' : 'Open Form' }
            </button>
        </div>
    );

}

export default PetList;
