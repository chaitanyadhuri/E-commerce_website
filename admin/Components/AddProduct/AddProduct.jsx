import React, { useState } from "react";
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {

    const [image, setImage] = useState("");

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        try {
            const response = await fetch('http://localhost:4000/upload', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            responseData = await response.json();

            // Check if the responseData contains success property
            if (responseData && responseData.success) {
                product.image = responseData.image_url;
                console.log(product);
                await fetch('http://localhost:4000/addproduct', {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': "application/json",
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("Product Added"):alert("Failed")
                })
            } else {
                console.error("Upload failed or success flag is missing.");
            }
        } catch (error) {
            console.error("Error during upload:", error.message);
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                console.error("Possible causes: Server is not running, CORS issue, or incorrect URL.");
            }
        }
    };



    return (
        <div className="add-product">
            <div className="addproduct-itemfiled">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfiled">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfiled">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfiled">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfiled">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="product" id="file-input" hidden />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">ADD</button>
        </div>
    );
}
export default AddProduct;