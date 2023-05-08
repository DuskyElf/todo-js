import { Outlet } from "react-router-dom";
import { TabSelector, List } from "./components.js";

export function Layout() {
    return (
        <>
            <div>
                <div className={"title"}>{"Simple Todo App:"}</div>
                <hr />
            </div>

            <Outlet />
        </>
    );
}

export function Todo() {
    const list = ["First", "Second thingy", "Third"];
    const curr_index = 0;
    return (
        <>
            <TabSelector curr_tab="todo" />
            <List items={list} curr_index={curr_index}/>
        </>
    );
}

export function Done() {
    return (
        <>
            <TabSelector curr_tab="done" />
        </>
    );
}
