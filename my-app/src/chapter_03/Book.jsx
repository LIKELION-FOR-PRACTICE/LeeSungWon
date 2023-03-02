import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`책 이름은 ${props.name} `}</h1>
            <h2>{`이 책은 총 ${props.numOfPage} `}</h2>
        </div>
    );
}

export default Book;
