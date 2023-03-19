import React from 'react';

const Content = (props : any) => {
    return (
        <div style={{ marginLeft: (window.innerWidth > 1100 ? "63px" : "0px") }}>
            <div className={"content"}>
                { props.children }
            </div>
        </div>
    );
};

export default Content;