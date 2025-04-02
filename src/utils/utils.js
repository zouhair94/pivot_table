/**
 * @description prepare an array of unique dates
 * @param {*} category 
 * @param {*} data 
 * @returns [dates]
 */
export const headsHandle = (category, data) => ([...new Set(data.map(e => e[category]))])

/**
 * @description this function prepare us rows data in side table
 * @param {*} data main data
 * @param {*} rows name of rows
 * @returns [rows]
 */
export const handleRows = (data, rows) => {

    const rowsObject = {};
    data.forEach((item) => {
        let current = rowsObject;
        rows.forEach((row) => {
            current = (current[item[row]] = current[item[row]] || {});
        })
    })

    return rowsObject;
}

/**
 * @description handles the data will be displayed in the main table
 * @param {*} data main data
 * @param {*} rows rows will need the last row to keep both table lines alined
 * @param {*} cols columns that we will work on
 * @param {*} value and the value of each column
 * @returns [columns]
 */
export const handleMainCols = (data, rows, cols, value) => {
    const lastCol = rows[rows.length - 1];
    const filter = [lastCol, cols, value];

    const colsObject = {};
    data.forEach((item) => {
        let current = colsObject;
        filter.forEach((col) => {
            current = (current[item[col]] = current[item[col]] || {});
        })
    })

    return colsObject;
};