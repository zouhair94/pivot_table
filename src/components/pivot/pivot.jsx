import React, { useState, useEffect } from 'react';
import { RightTable } from "./rightTable";
import { LeftTable } from './leftTable'
import "./pivot.css";
import { headsHandle, handleRows, handleMainCols } from '../../utils/utils';



export const Pivot = ({ data, rows, cols, value }) => {

    const [heads, setHead] = useState([])
    const [sideRow, setSideRow] = useState([]);
    const [columns, setCols] = useState([]);

    useEffect(() => {
        setHead(headsHandle(cols, data));
    }, [data, rows, cols, value])

    useEffect(() => {
        setSideRow(handleRows(data, rows));
    }, [data, rows, cols, value])

    useEffect(() => {
        setCols(handleMainCols(data, rows, cols, value));
    }, [data, rows, cols, value])

    return (
        <div className="pivot-table">
            <div className="side-table">
                <LeftTable filters={rows} rows={sideRow} />
            </div>
            <div className="main-table">
                <RightTable cols={columns} heads={heads} />
            </div>
        </div>
    );
};