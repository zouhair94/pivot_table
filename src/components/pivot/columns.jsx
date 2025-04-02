export const Columns = ({ cols, heads }) => {

    const styles = (v) => {
        if (!v) {
            return { background: "red", color: "white" }
        } else if (Number(v) < 500) {
            return { background: "yellow", color: "red" }
        }
        else if (Number(v) > 500 && Number(v) < 1500) {
            return { background: "indigo", color: "white" }
        }
        else if (Number(v) > 1500 && Number(v) < 3000) {
            return { background: "purple", color: "white" }
        }
        else {
            return { background: "blue", color: "white" }
        }
    }

    const renderCells = (obj) => {
        let values = []
        return Object.entries(obj).map(([key]) => {
            values = Object.entries(obj[key]).map(e => ({ [e[0]]: Object.keys(e[1])[0] }))
            let total = 0;
            return (
                <tr key={key}>
                    {
                        heads.map((e, i) => {
                            const value = values.filter(el => el[e]).map(el => el[e]).join("");
                            total = value ? total += parseInt(value) : total;
                            const style = styles(value)
                            return (<td key={i} style={{ background: style.background, color: style.color, textAlign: "center" }}>{(value) ? value : "0"}</td>)
                        })
                    }
                    < td className="total-cell" style={{ background: "green", color: "yellow", textAlign: "center" }}> {total}</td>
                </tr >
            )
        });
    };

    return (
        <table>
            <tbody>
                {
                    <tr>
                        {heads.map((e, i) => (<td key={i} style={{ background: "#DDD", textAlign: "center" }}>{e}</td>))}
                        <td style={{ background: "#DDD", textAlign: "center" }}>Totals</td>
                    </tr>
                }
                {
                    renderCells(cols)
                }
            </tbody>
        </table>
    )
};