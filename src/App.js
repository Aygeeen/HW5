import React, {useState} from "react";

export default function Form() {
    const PrototypeForm = {
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    }
    const [formData, setFormData] = useState(PrototypeForm)

    function handleChange(e, key) {
        setFormData({
            ...formData,
            [key]: e.target.value,
        });
    }

    return (
        <>
            <div>
                <label>
                    Name:
                    <input type="text"
                           value={formData.key1}
                           onChange={(e) => handleChange(e, 'key1')}/>
                </label>
                <label>
                    City:
                    <input type="text"
                           value={formData.key2}
                           onChange={(e) => handleChange(e, 'key2')}/>
                </label>
                <label>
                    Email:
                    <input type="text"
                           value={formData.key3}
                           onChange={(e) => handleChange(e, 'key3')}/>
                </label>
                <label>
                    does he like cats?
                    <input type="text"
                           value={formData.key4}
                           onChange={(e) => handleChange(e, 'key4')}/>
                </label>
            </div>
            <div>
                <p>
                    Name: {formData.key1}
                </p>
                <p>
                    City: {formData.key2}
                </p>
                <p>
                    Email: {formData.key3}
                </p>
                <p>
                    Cats: {formData.key4}
                </p>
            </div>
        </>
    )
}