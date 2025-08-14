import { useState } from "react";

const PetForm = ({ handleAddPet, selected }) => {

    const initState = {
        name: '',
        age: '',
        breed: '',
    }
    const [formData, setFormData] = useState(
        selected ? selected : initState
    );

const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
}

const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPet(formData)
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Name </label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="age"> Age </label>
            <input
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <label htmlFor="breed"> Breed </label>
            <input
                id="breed"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
            />
            <button type="submit">{selected ? 'Update Pet' : 'Add Pet' }</button>
        </form>
    </div>
);
};

export default PetForm;