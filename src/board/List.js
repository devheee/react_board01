import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Table = styled.table`
border-top: 2px solid tomato;
width: 100%;
`
const Tr = styled.tr`
height: 40px;
`
const Td = styled.td`
border-bottom: 1px solid #ddd;
`
const List = ({ list }) => {
    const navigate = useNavigate();

    return (
        <>
            <Table>
                <thead>
                    <Tr>
                        <Td>no</Td>
                        <Td>제목</Td>
                        <Td>글쓴이</Td>
                        <Td>날짜</Td>
                    </Tr>
                </thead>
                <tbody>
                    {
                        list.map((it, idx) => {
                            return (
                                <tr key={it.id}>
                                    <td>{idx + 1}</td>
                                    <td><Link to={`/view/${it.id}`}>{it.subject}</Link></td>
                                    <td>{it.name}</td>
                                    <td>{it.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <hr />
            <button onClick={() => navigate('/write')}>WRITE</button>
        </>
    )
}

export default List;