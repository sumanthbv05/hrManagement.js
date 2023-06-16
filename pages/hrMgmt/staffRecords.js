import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/pages.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";

export default class ExampleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStaffRecords: false,
      selectedOption: "",
    };
  }

  handleHRManagementClick = () => {
    this.setState({
      showStaffRecords: true,
    });
  };

  handleStaffRecordsClick = (option) => {
    this.setState({
      selectedOption: option,
    });
  };

  renderTable() {
    const { selectedOption } = this.state;

    switch (selectedOption) {
      case "interns":
        return (
          <div>
            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>Intern ID</th>
                  <th>Name</th>
                  <th>Role assigned</th>
                  <th>Department</th>
                  <th>Internship start date</th>
                  <th>End date</th>
                  <th>Stipend allotted</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>Software Developer</td>
                  <td>Engineering</td>
                  <td>2023-01-01</td>
                  <td>2023-06-30</td>
                  <td>$1000</td>
                  <td>
                  <a href="viewinterns" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/view.png" alt="Image Link" style={{ maxWidth: '50%', height: 'auto' }}/>
                  </a>
                  </td>
                  <td>
                  <a href="interns" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/write.png" alt="Image Link" style={{ maxWidth: '20%', height: 'auto' }}/>
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.excelcontainer}>
              <button className="button">Export</button>
            </div>
          </div>
        );

      case "consultants":
        return (
          <div>
            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>Consultant ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jane Smith</td>
                  <td>Marketing Consultant</td>
                  <td>Marketing</td>
                  <td>Active</td>
                  <td>
                  <a href="viewconsultants" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/view.png" alt="Image Link" style={{ maxWidth: '50%', height: 'auto' }}/>
                  </a>
                  </td>
                  <td>
                  <a href="viewinterns" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/write.png" alt="Image Link" style={{ maxWidth: '20%', height: 'auto' }}/>
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.excelcontainer}>
              <button className="button">Export</button>
            </div>
          </div>
        );

      case "employees":
        return (
          <div>
            <table className={`table ${styles.table}`}>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alice Johnson</td>
                  <td>Manager</td>
                  <td>Active</td>
                  <td>
                  <a href="viewemployees" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/view.png" alt="Image Link" style={{ maxWidth: '50%', height: 'auto' }}/>
                  </a>
                  </td>
                  <td>
                  <a href="viewinterns" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/write.png" alt="Image Link" style={{ maxWidth: '20%', height: 'auto' }}/>
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.excelcontainer}>
              <button className="button">Export</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  render() {
    const { showStaffRecords, selectedOption } = this.state;

    return (
      <div>

        <SideMenu tag="Example">
          <div className={styles.wrapper}>
            <div className={`${styles.button}`}>
              <div className="dropdown">
                <button
                  className="dropdown-toggle button"
                  type="button"
                  id="hrDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={this.handleHRManagementClick}
                >
                  HR Management
                </button>
                {showStaffRecords && (
                  <div className="dropdown-menu" aria-labelledby="hrDropdown">
                    <button
                      className="dropdown-item"
                      onClick={() => this.handleStaffRecordsClick("interns")}
                    >
                      Staff Records
                    </button>
                  </div>
                )}
              </div>
            </div>

            {showStaffRecords && selectedOption && (
              <div>
                <div className="dropdown">
                  <div className="dropdown-menu" aria-labelledby="staffDropdown">
                    <button
                      className="dropdown-item"
                      onClick={() => this.handleStaffRecordsClick("interns")}
                    >
                      Interns
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => this.handleStaffRecordsClick("consultants")}
                    >
                      Consultants
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => this.handleStaffRecordsClick("employees")}
                    >
                      Employees
                    </button>
                  </div>
                </div>

                {this.renderTable()}
              </div>
            )}
          </div>
        </SideMenu>
      </div>
    );
  }
}
