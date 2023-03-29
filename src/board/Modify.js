import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Modify = ({ list, setList }) => {
    const { id } = useParams();
    const itm = list.find(it => String(it.id) === id);

    const [inputs, setInputs] = useState({
        name: itm.name,
        subject: itm.subject,
        content: itm.content,
    });

    const navigate = useNavigate()

    const onModify = () => {
        if (inputs.subject.length < 5) {
            alert('제목은 4자 이상 입력하세요')
            return
        }
        const r = list.map(it => String(it.id) === id ? {
            ...itm,
            subject: inputs.subject,
            content: inputs.content,
        } : it)
        setList(r);
        navigate(`/view/${id}`)
    }

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    return (
        <>
            <ul>
                <li>
                    <span>제목</span>
                    <input name='subject' value={inputs.subject} onChange={onChange} />
                </li>
                <li>
                    <strong>{itm.name}</strong>
                </li>
                <li>
                    <strong>{itm.date}</strong>
                </li>
                <li>
                    <span>내용</span>
                    <input name='content' value={inputs.content} onChange={onChange} />
                </li>
            </ul>
            <button onClick={onModify}>수정</button>
            <button >삭제</button>
        </>
    )
}

export default Modify