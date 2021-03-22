import React from 'react'

const Loader=(props)=>{
    return(
        <div class="ui active dimmer">
            <div class="content">
                <div class="ui big text loader">
                    {props.Message}
                </div>
            </div>
        </div>
    );
};
Loader.defaultProps={
    Messgae:"Loading..."
}
export default Loader;