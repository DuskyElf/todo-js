export function TabSelector({ curr_tab }) {
    const right_space = {
        whiteSpace: "pre-wrap"
    };

    if (curr_tab === "todo") {
        return (
            <div className={"option"} style={right_space}>
                <span className={"indicator"}>{"["}</span>
                <span>{" Todo "}</span>
                <span className={"indicator"}>{"]"}</span>
                <span>{"   Done "}</span>
            </div>
        );
    }
    if (curr_tab === "done") {
        return (
            <div className={"option"} style={right_space}>
                <span>{"  Todo   "}</span>
                <span className={"indicator"}>{"["}</span>
                <span>{" Done "}</span>
                <span className={"indicator"}>{"]"}</span>
            </div>
        );
    }

    console.error(`Invalid Tab ${curr_tab}`);
}

export function List({ items, curr_index }) {
    return (
        <ul className="list">
            {items.map((item, index) => {
                const selected = index === curr_index;
                return <Item key={index} value={item} selected={selected} />;
            })}
        </ul>
    );
}

function Item({ value, selected }) {
    return (
        <li className={selected ? "selected-list": ""}>
            {selected ?
                <span className="indicator">
                    {"-> | "}
                    <span className="selected">{value}</span>
                </span>
                : "| " + value }
        </li>
    );
}
