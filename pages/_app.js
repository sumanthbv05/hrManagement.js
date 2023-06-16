import React from "react";
import "../styles/globals.css";
import "../constants/variables";

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.userInit();
    }

    userInit() {
        const { router } = this.props;
        try {
            const username = localStorage.getItem("username");
            const user_role = localStorage.getItem("user_role");
            const tnnt_id = localStorage.getItem("tnnt_id");

            global.config.username = username;
            global.config.user_role = user_role;
            global.config.tnnt_id = tnnt_id;

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

