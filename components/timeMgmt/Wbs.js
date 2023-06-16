import React from "react";
import styles from "./academy.module.css";
import Swal from "sweetalert2";
import Colors from "../../constants/colors";
import CustomInput from "../customInput/customInput";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wbs_id: "",
      wbs_title: "",
      num_projects: "",
      editable: false,
    };
  }

  async insertRecord() {
    const { wbs_id, wbs_title, num_projects } = this.state;

    try {
      const alertInitial = "";
      let alertText = alertInitial;

      if (wbs_id === "") {
        alertText += "* WBS ID\n";
      }
      if (wbs_title === "") {
        alertText += "* WBS Title\n";
      }
      if (num_projects === "") {
        alertText += "* Number of Projects\n";
      }

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

      // Perform further actions with the data

      console.log("WBS ID:", wbs_id);
      console.log("WBS Title:", wbs_title);
      console.log("Number of Projects:", num_projects);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { setVisibility } = this.props;
    const { wbs_id, wbs_title, num_projects, editable } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <img
            src="/assets/close-red.png"
            className={styles.closeButton}
            onClick={() => setVisibility(false)}
          />
          <div>
            <p className={styles.title}>
              {editable ? "Update Course List" : "Create Course List"}
            </p>
            <div className={styles.inputAlignment}>
              <p>WBS ID:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={wbs_id}
                  onChange={(e) => this.setState({ wbs_id: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>WBS Title:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={wbs_title}
                  onChange={(e) =>
                    this.setState({ wbs_title: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Number of Projects:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  type="number"
                  value={num_projects}
                  onChange={(e) =>
                    this.setState({ num_projects: e.target.value })
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
