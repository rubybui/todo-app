import React, { useState }from 'react';
import "./assets/BulksAction.scss"
const BulksActionController = () => {
    
    return (
        <div className="bulks-action">
            <span>Bulk Action:</span>
            <div className="bulks-action__controller">
                <button className="bulks-action__controller--done">Done</button>
                <button className="bulks-action__controller--remove">Remove</button>
            </div>
        </div>
    )
}

export default BulksActionController