import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./academy.module.css";
import Swal from "sweetalert2";
import Colors from "../../constants/colors";
import CustomInput from "../customInput/customInput";

export default class example extends React.Component {
    constructor(props) {
        super(props);
        const stateData = {
            txt_course_name: "",
            id_SelectedSubCat: undefined,
            num_pincode: "",
            txt_address: "",
            date_log: new Date(),
            editable: false,
            username: "",
            tnnt_id: global.config.tnnt_id,
        };
        if (props.data !== undefined) {
            stateData.editable = true;
        }
        this.state = {
            ...stateData,
        };
    }
    componentDidMount() {

        const username = global.config.username;
        if (username != null && username !== undefined) {
            this.setState({
                username: username,
                tnnt_id: global.config.tnnt_id,
            });
        }
    }

    async insertRecord() {
        const {
            id_SelectedSubCat,
            txt_course_name,
        } = this.state;

        try {
            const alertInitial = "";
            let alertText = alertInitial;

            if (id_SelectedSubCat === undefined) {
                alertText += "* Category Name\n";
            }
            if (txt_course_name === "") {
                alertText += "*  Name\n";
            }

            // pradeep to do

            if (alertText !== alertInitial) {
                Swal.fire({
                    title: "Fill these fields:\n",
                    html:
                        '<pre style="display: flex;text-align: justify;flex-direction: column;align-items: center;line-height: 1.5">' +
                        alertText +
                        "</pre>",
                    confirmButtonColor: Colors.primaryColor,
                    width: Colors.width,
                });
                return;
            }

            const data = {
                subcategory_name: txt_subCategory_name,
                category_id: id_selectedCategory,
            };
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { setVisibility } = this.props;
        const {
            id_SelectedSubCat,
            txt_course_name,
            num_pincode,
            txt_address,
            date_log,
            editable,
        } = this.state;

        return (
            <div className={styles.mainWrapper}>
                <div
                    className={styles.wrapper}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src="/assets/close-red.png"
                        className={styles.closeButton}
                        onClick={() => setVisibility(false)}
                    />
                    <div>
                        <p className={styles.title}>{editable ? "Update Course List" : "Create Course List"}</p>
                        <div className={styles.inputAlignment}>
                            <p>Name state:</p>
                            <select
                                value={id_SelectedSubCat}
                                onChange={(e) =>
                                    this.setState({
                                        id_SelectedSubCat: e.target.value,
                                    })
                                }
                            >
                                <option value={0} selected>
                                    {"Select Name"}
                                </option>
                            </select>
                        </div>

                        <div className={styles.inputAlignment}>
                            <p>Name:</p>
                            <div className={styles.inputCustom}>
                                <CustomInput
                                    value={txt_course_name}
                                    onChange={(e) =>
                                        this.setState({
                                            txt_course_name: e.target.value,
                                        })
                                    }
                                />

                            </div>
                        </div>

                        <div className={styles.inputAlignment}>
                            <p>Address:</p>
                            <div className={styles.inputCustom}>
                                <CustomInput
                                    inputType={"textarea"}
                                    maxLenght={"100"}
                                    value={txt_address}
                                    onChange={(e) =>
                                        this.setState({
                                            txt_address: e.target.value,
                                        })
                                    }
                                />

                            </div>
                        </div>

                        <div className={styles.inputAlignment}>
                            <p>Pincode:</p>
                            <div className={styles.inputCustom}>
                                <CustomInput
                                type="number"
                                    value={num_pincode}
                                    onChange={(e) =>
                                        this.setState({
                                            num_pincode: e.target.value,
                                        })
                                    }
                                />

                            </div>
                        </div>

                        <div className={styles.inputAlignment}>
                        <p>Date:</p>
                        <div className={styles.inputCustom}>
                            <DatePicker
                                className={styles.date}
                                dateFormat="dd-MM-yyyy"
                                selected={date_log}
                                onChange={(e) =>
                                    this.setState({ date_log: e })
                                }
                            />
                        </div>
                    </div>

                        <div className={styles.button}>
                            <button
                                className={`button`}
                                onClick={() =>
                                    editable ? this.updateRecord() : this.insertRecord()
                                }
                            >
                                {editable ? "Update" : "Create"}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
