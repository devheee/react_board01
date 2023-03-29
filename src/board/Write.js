import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Write = ({ list, setList, idRef }) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const input = useRef(null);

    console.log(inputs);

    const time = new Date();

    const inputHandler = e => {
        const { name, value } = e.target;

        setInputs(
            {
                id: idRef.current,
                ...inputs,
                [name]: value,
                date: time.toLocaleDateString()
            }
        );
    }

    const onsubmit = e => {
        e.preventDefault();
        for (let i = 0; i < input.current.length; i++) {
            if (input.current[i].value.length < 5) {
                alert(`${input.current[i].name}은 4자 이상 입력하세요`)
                input.current[i].focus();
                return
            }
        }

        // if (inputs.subject.length < 5) {
        //     alert('제목은 4자 이상 입력하세요')
        //     input.current[0].focus();
        //     return
        // }

        setList([
            ...list,
            inputs
        ]);

        idRef.current = idRef.current + 1;

        navigate('/list')
    }

    return (
        <>
            <h2>글쓰기</h2>
            <form onSubmit={onsubmit}>
                <ul>
                    <li>
                        <label htmlFor="subject">제목</label>
                        <input
                            type="text"
                            id='subject'
                            name='subject'
                            onChange={inputHandler}
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            onChange={inputHandler}
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="content">내용</label>
                        <textarea
                            type="text"
                            id='content'
                            name='content'
                            onChange={inputHandler}
                            required
                        />
                    </li>
                </ul>
                <button>WRITE</button>
            </form>
        </>
    )
}

export default Write