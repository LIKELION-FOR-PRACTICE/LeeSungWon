import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{'책 이름은 ${props.name} '}</h1>
            <h2>{'이 책은 총 ${props.numOfPage} '}
            <h3>성원아 공부하자</h3></h2>
        </div>
    );
}

export default Book;

/*github 연습 */

