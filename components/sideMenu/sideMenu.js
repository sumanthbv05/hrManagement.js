import React from "react";
import styles from "./sideMenu.module.css";

const MENU = {
    Example: {
        id: 1,
    },
}


export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        let menu = MENU;

        this.state = {
            menu: menu,
            username: undefined,
            loading: false,
            closed: true,
            open: true,
        };
    }


    render() {
        const { tag, subTag, title, loading } = this.props;
        const { menu } = this.state;

        return (
            <div>
                <div className={styles.wrapper}>
                    {loading && (
                        <div className={styles.loadingMainDiv}>
                            <div className={styles.loadingDiv}>
                                <div className="bouncing-loader">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={styles.contentWrapper}>
                        <h2 className={styles.title}>
                            {menu[tag] !== undefined ?
                                <p>
                                    {menu[tag].SubMenu !== undefined ?
                                        menu[tag].SubMenu[subTag].title
                                        : menu[tag].title}
                                </p>
                                : title}
                        </h2>
                        <div className={styles.line} />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}