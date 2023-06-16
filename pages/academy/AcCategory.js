import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/pages.module.css";
import Components from "../../components/academy/acCategory";
import SideMenu from "../../components/sideMenu/sideMenu";

export default class ExampleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array_acCourse: [
        { id: 1, category: "MCA", courseId: "001", courseName: "HTML" },
      ],
      courseEditVisibility: false,
      selectedData: undefined,
      editable: false,
      tnnt_id: global.config.tnnt_id,
      com_id: 0,
      arr_com_claim: [],
    };
  }

  handleCreateCourse = (courseData) => {
    const newCourse = {
      ...courseData,
      id: Date.now(),
    };

    this.setState((prevState) => ({
      array_acCourse: [...prevState.array_acCourse, newCourse],
      courseEditVisibility: false,
    }));
  };

  handleUpdateCourse = (courseData) => {
    this.setState((prevState) => ({
      array_acCourse: prevState.array_acCourse.map((course) =>
        course.id === courseData.id ? courseData : course
      ),
      courseEditVisibility: false,
    }));
  };

  render() {
    const {
      courseEditVisibility,
      selectedData,
      editable,
      array_acCourse,
    } = this.state;

    return (
      <div>
        {courseEditVisibility && (
          <Components
            visibility={courseEditVisibility}
            setVisibility={(v) => this.setState({ courseEditVisibility: v })}
            data={selectedData}
            editable={editable}
            onCreateCourse={this.handleCreateCourse}
            onUpdateCourse={this.handleUpdateCourse}
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
                Create
              </button>
            </div>

            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Course Id</th>
                  <th>Course Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {array_acCourse.map((course) => (
                  <tr key={course.id}>
                    <td>{course.category}</td>
                    <td>{course.courseId}</td>
                    <td>{course.courseName}</td>
                    <td>
                      <img
                        src={"/assets/write.png"}
                        className={styles.icon}
                        onClick={() =>
                          this.setState({
                            selectedData: course,
                            courseEditVisibility: true,
                            editable: true,
                          })
                        }
                      />
                    </td>
                  </tr>
                ))}
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
