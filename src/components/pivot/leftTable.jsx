const renderRows = (rows) => {
    if (typeof rows !== "object" || rows === null) {
        return [];
    }

    let elements = [];

    for (let key of Object.keys(rows)) {
        const nestedRows = renderRows(rows[key]);
        const rowSpan = nestedRows.length || 1;

        elements.push([{ key, rowSpan }, ...nestedRows[0] || []]);
        elements.push(...nestedRows.slice(1));
    }

    return elements;
};

export const Pivots = ({ filters, rows }) => {
    const processedRows = renderRows(rows);
    return (
        <div className="left-tables">
            <table>
                <thead>
                    <tr>

                        {filters.map((filter, index) => (<td key={index} style={{ background: "#DDD", textAlign: "center" }}> {filter} </td>))}
                    </tr>
                </thead>
                <tbody>

                    {processedRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((item, colIndex) => (
                                item ? (
                                    <td key={colIndex} rowSpan={item.rowSpan}>
                                        {item.key}
                                    </td>
                                ) : null
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
