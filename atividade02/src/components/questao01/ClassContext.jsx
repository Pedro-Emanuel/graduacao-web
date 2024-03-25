import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {
        const cores = {bkgA: "green", bkgB: "gray", bkgC: "yellow", bkgD: "blue"};

        return (
            <ColorTheme.Provider value={cores}>
                <ClassB />
            </ColorTheme.Provider>
        );
    }
}

class ClassB extends React.Component {

    render() {
        let value = this.context
        return (
            <div>
                <h1 style={{ backgroundColor: value.bkgB }}>
                    Contexto B
                </h1>
            </div>
        )
    }
}

ClassB.contextType = ColorTheme

export default ClassA