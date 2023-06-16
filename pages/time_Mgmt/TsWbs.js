import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/pages.module.css";
import Components from "../../components/timeMgmt/Wbs";
import SideMenu from "../../components/sideMenu/sideMenu";

export default class ExampleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array_acCourse: [],
      courseEditVisibility: false,
      selectedData: undefined,
      username: "",
      editable: false,
      tnnt_id: global.config.tnnt_id,
      com_id: 0,
      arr_com_claim: [],
    };
  }

  componentDidMount() {
    const username = global.localStorage.username;

    if (username != null && username !== undefined) {
      this.setState({
        username: username,
      });
    }
  }

  render() {
    const { courseEditVisibility, selectedData, editable } = this.state;

    return (
      <div>
        {courseEditVisibility && (
          <Components
            visibility={courseEditVisibility}
            setVisibility={(v) => this.setState({ courseEditVisibility: v })}
            data={selectedData}
            editable={editable}
          />
        )}
        <SideMenu tag="Example">
          <div className={styles.wrapper}>
            <div className={`${styles.button}`}>
              <button
                className={`button`}
                onClick={() =>
                  this.setState({
                    selectedData: undefined,
                    courseEditVisibility: true,
                    editable: false,
                  })
                }
              >
                <i style={{ paddingRight: 10 }} className="fa fa-plus" />
                {"Create"}
              </button>
            </div>

            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>WBS ID</th>
                  <th>WBS Title</th>
                  <th>Number of Projects</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"1"}</td>
                  <td>{"Sample WBS"}</td>
                  <td>{"5"}</td>
                  <td>
                    <img
                      src={"/assets/write.png"}
                      className={styles.icon}
                      onClick={() =>
                        this.setState({
                          selectedData: "hello",
                          courseEditVisibility: true,
                          editable: true,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.excelcontainer}>
              <button className={"button"}>Export</button>
            </div>
          </div>
        </SideMenu>
      </div>
    );
  }
}
