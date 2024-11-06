/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({onAddItems}){

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    


    function handleSubmit(e){
        e.preventDefault();

        if(!description) return;

        const newItem = {description, quantity, packed: false, id: Date.now()

        };

        onAddItems(newItem)

        setDescription("");
        setDescription("");

    }
    return(
        <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-select">
        <select value={quantity} onChange={(e) =>setQuantity(Number(e.target.value))}>
                {/* <option value="{1}">1</option>
                <option value="{2}">2</option>
                <option value="{3}">3</option> */}

                {Array.from({length: 20}, (_, i)=> i + 1).map(num=>
                <option value={num} key={num}>{num}</option>)}
            </select>

            <input type="text"  placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button>Add</button>
        </div>
        </form>
    )
}

export default Form