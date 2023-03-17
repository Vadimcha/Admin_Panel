import React from 'react';

const Content = (props : any) => {
    return (
        <div style={{ marginLeft: "63px" }}>
            <div style={{ margin: "20px 220px 0px 250px" }}>
                { props.children }
            </div>
        </div>
    );
};

export default Content;