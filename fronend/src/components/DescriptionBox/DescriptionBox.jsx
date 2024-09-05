import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore 
                   perspiciatis asperiores at esse eos voluptate, voluptates doloribus
                   repudiandae voluptatum eligendi provident doloremque officia tempore
                   hic magnam! Eveniet sit voluptate quia! Lorem ipsum dolor sit amet, 
                   consectetur adipisicing elit. Sit modi autem deserunt veritatis sequi 
                   excepturi! Facere praesentium aliquid dolore debitis, eos earum nihil 
                   cupiditate aspernatur animi illum officiis tempore libero!</p>
                   <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quos, 
                    soluta animi consequuntur optio reiciendis nobis sunt officiis eum fugiat
                    dolorem voluptates repudiandae ducimus est cupiditate! Sed repellendus illum
                    eaque voluptates repudiandae ducimus.
                   </p>
            </div>
        </div>
    );
}

export default DescriptionBox;