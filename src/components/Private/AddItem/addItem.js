import React, { Component , useState} from 'react';
import { validateItemName, validateIngredients, validateImage, validatePrice} from './addItemValidations';
import { useHistory } from 'react-router-dom';
import './addItem.css'
import addItemService from '../../../Services/Private/addItem.service';

const AddItem = () => {

    const history = useHistory();


    const [item, setItem] = useState();
    const [formErr, setFormErrs] = useState({ ItemNameError: "", IngredientsError: "", ImageError: "", PriceError: ""});

    function addItemForm(e){

        console.log(" in add item method");
        
        e.preventDefault();

        alert("Item added Successfully");
        // addItemService.addItem(item).then((response)=>{
        //     console.log(response.data.success);
        //     if(response.data.success == true){
        //         alert("Item Added successfully");
        //         history.push("/");
        //     }
        // }).catch((error) => {
        //     console.log(error);
        //     alert("Please check the inputs and try again.");
      
        // });
    }

    function handleChange(e) {

        const { id, value } = e.target;

        switch (id) {
            case 'itemName':
        //         if (validateItemName(value)) {
        //             setFormErrs({ ...formErr, ItemNameError: "Item Name should not contain numbers or symbols" })

        //         } else {
        //             delete formErr.ItemNameError
        //         }
                setItem({ ...item, itemName: value.trim() })
                break;

            case 'ingredients':
        //         if (validateIngredients(value)) {
        //             setFormErrs({ ...formErr, IngredientsError: "Enter valid ingredients" })
        //         } else {
        //             delete formErr.IngredientsError
        //         }
                setItem({ ...item, ingredients: value.trim() })
                break;

            case 'image':
        //         if (validateImage(value)) {
        //             setFormErrs({ ...formErr, ImageError: "Upload valid image in jpg/jpeg format." })
        //         } else {
        //             delete formErr.ImageError
        //         }
                setItem({ ...item, image : value.trim() })
                break;

        //     case 'price':
        //         if (validatePrice(value)) {
        //             setFormErrs({ ...formErr, PriceError: "Enter valid price." })
        //         } else {
        //             delete formErr.PriceError
        //         }
                setItem({ ...item, price: value.trim() })
                break;

            default:
                break;
        }
    }

    return ( 
        <div className="row justify-content-center">
        <div className="col-md-6 col-sm-8">
            <h1 className="text-center mt-5">Add Item</h1>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="itemName" placeholder="Item Name" onBlur={handleChange} onChange={handleChange} />
                        <small id="itemNameHelp" className="form-text text-danger">{formErr.ItemNameError}</small>
                    </div>
                    <div className="form-group">
                        <input type="textarea" className="form-control" id="ingredients" placeholder="Ingredients" onBlur={handleChange} onChange={handleChange} />
                        <small id="ingredientsHelp" className="form-text text-danger">{formErr.IngredientsError}</small>
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control" id="image" placeholder="Item Image" onBlur={handleChange} onChange={handleChange} />
                        <small id="imageHelp" className="form-text text-danger">{formErr.ImageError}</small>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="price" placeholder="Price" onBlur={handleChange} onChange={handleChange} />
                        <small id="priceHelp" className="form-text text-danger">{formErr.PriceError}</small>
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary" placeholder="Submit" onClick={ (e)=>addItemForm(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
);
}
 
export default AddItem;