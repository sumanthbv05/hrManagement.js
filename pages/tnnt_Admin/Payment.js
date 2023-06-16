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
        { Tenant_username: "XYZ123",Tenant_id: 1, registration_date: "24-05-2023", plan_Selected: "MLY", payment_mode: "UPI", Account_details: "9876543210",Invoice_Production: "Yes" },
      ],
      courseEditVisibility: false,
      selectedData: undefined,
      editable: false,
      tenantUsername: "",
      tenantId: "",
      registrationDate: "",
      planSelected: "",
      paymentMode: "",
      accountDetails: "",
      invoiceProduction: false,
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
      tenantUsername,
      tenantId,
      registrationDate,
      planSelected,
      paymentMode,
      accountDetails,
      invoiceProduction,
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
                    editable: true,
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
                  <th>Tenant Username</th>
                  <th>Tenant ID</th>
                  <th>Registration Date</th>
                  <th>Plan Selected</th>
                  <th>Payment Mode</th>
                  <th>Account Details</th>
                  <th>Invoice Production</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {array_acCourse.map((course) => (
                  <tr key={course.id}>
                    <td>{tenantUsername}</td>
                    <td>{tenantId}</td>
                    <td>{registrationDate}</td>
                    <td>{planSelected}</td>
                    <td>{paymentMode}</td>
                    <td>{accountDetails}</td>
                    <td>{invoiceProduction ? "Yes" : "No"}</td>
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
