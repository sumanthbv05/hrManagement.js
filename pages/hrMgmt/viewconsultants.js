import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/pages.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";

export default class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        "Job profile",
        "Service Details",
        "Personal details",
        "Education",
        "Skills",
        "Work experience",
        "Address",
        "Files"
      ],
      activeMenuItemIndex: 0
    };
  }

  handleMenuChange = (index) => {
    this.setState({ activeMenuItemIndex: index });
  };

  handlePrevious = () => {
    const { activeMenuItemIndex } = this.state;
    if (activeMenuItemIndex > 0) {
      this.setState({ activeMenuItemIndex: activeMenuItemIndex - 1 });
    }
  };

  handleNext = () => {
    const { activeMenuItemIndex, menuItems } = this.state;
    if (activeMenuItemIndex < menuItems.length - 1) {
      this.setState({ activeMenuItemIndex: activeMenuItemIndex + 1 });
    }
  };

  handleClose = () => {
    window.location.href = "staffRecords"; 
  };
  

  renderJobProfile() {
    return (
      <div>
        <label>Employee ID/Intern ID/Consultant ID:</label>
        <input type="text" value="123456" />
  
        <label>Employment type:</label>
        <select>
          <option value="part-time">Part-time employment</option>
          <option value="full-time" selected>Full-time employment</option>
        </select>
  
        <label>Job role:</label>
        <input type="text" value="Software Engineer" />
  
        <label>Designated department:</label>
        <input type="text" value="Engineering" />
  
        <label>Manager:</label>
        <input type="text" value="John Doe" />
  
        <label>Work email Id:</label>
        <input type="email" value="johndoe@example.com" />
  
        <label>Job location:</label>
        <input type="text" value="New York" />
  
        <label>Joining date:</label>
        <input type="date" value="2022-01-01" />
  
        <label>End date:</label>
        <input type="date" value="2023-12-31" />
  
        <label>Salary:</label>
        <input type="text" value="$100,000" />
      </div>
    );
  }
  
  renderServiceDetails() {
    return (
      <div>
        <label>Services provided:</label>
        <input type="text" value="Web Development" readOnly />
  
        <label>Service period:</label>
        <input type="text" value="2 years" readOnly />
  
        <label>Start date:</label>
        <input type="text" value="2021-01-01" readOnly />
  
        <label>End date:</label>
        <input type="text" value="2023-01-01" readOnly />
  
        <label>Role:</label>
        <input type="text" value="Developer" readOnly />
  
        <label>Department:</label>
        <input type="text" value="IT" readOnly />
  
        <label>Manager:</label>
        <input type="text" value="John Doe" readOnly />
      </div>
    );
  }
  
  renderPersonalDetails() {
    return (
      <div>
        <div>
          <label>Profile picture:</label>
          <input type="file" />
        </div>
  
        <div>
          <label>First name:</label>
          <input type="text" value="John" readOnly />
        </div>
  
        <div>
          <label>Last name:</label>
          <input type="text" value="Doe" readOnly />
        </div>
  
        <div>
          <label>Nationality:</label>
          <select>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
        <div>
          <label>Gender:</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <div>
          <label>Date of birth:</label>
          <input type="date" />
        </div>
  
        <div>
          <label>Marital status:</label>
          <select>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
        <div>
          <label>Email-Id:</label>
          <input type="email" value="johndoe@example.com" readOnly />
        </div>
  
        <div>
          <label>Mobile number:</label>
          <input type="tel" value="1234567890" readOnly />
        </div>
      </div>
    );
  }
  
  

  renderEducation() {
    return (
      <div>
        <div>
          <label>Degree/Qualification completed:</label>
          <select>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
  
        <div>
          <label>Name of Institute or College:</label>
          <input type="text" value="ABC Institute" />
        </div>
  
        <div>
          <label>University name:</label>
          <input type="text" value="XYZ University" />
        </div>
  
        <div>
          <label>City:</label>
          <input type="text" value="New York" />
        </div>
  
        <div>
          <label>State:</label>
          <input type="text" value="New York" />
        </div>
  
        <div>
          <label>Country:</label>
          <input type="text" value="United States" />
        </div>
  
        <div>
          <label>Course/Field of Study:</label>
          <input type="text" value="Computer Science" />
        </div>
  
        <div>
          <label>Year of Passing:</label>
          <input type="text" value="2020" />
        </div>
  
        <div>
          <label>Marksheet Attachment:</label>
          <input type="file" />
        </div>
  
      </div>
    );
  }
  
  

  renderSkills() {
    return (
      <div>
        <div>
          <label>Skill type:</label>
          <select>
            <option value="hard">Hard skill</option>
            <option value="soft">Soft skill</option>
          </select>
        </div>
  
        <div>
          <label>Skill name:</label>
          <input type="text" value="Communication" />
        </div>
  
        <div>
          <label>Skill proficiency:</label>
          <select>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

      </div>
    );
  }
  
  

  renderWorkExperience() {
    return (
      <div>
        <label>Do you have any prior work experience?</label>
        <div>
          <label>
            <input type="radio" name="workExperience" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="workExperience" value="no" /> No
          </label>
        </div>
  
        {this.state.workExperience === "yes" && (
          <div>
            <label>Name of former employer:</label>
            <input type="text" value="ABC Company" />
  
            <label>Time period (from and to):</label>
            <div>
              <input type="text" value="Jan 2019 - Dec 2021" />
            </div>
  
            <label>Job title:</label>
            <input type="text" value="Software Engineer" />
  
            <label>Location:</label>
            <input type="text" value="New York" />
  
            <label>Reason for leaving:</label>
            <input type="text" value="Career growth opportunities" />
  
            <label>Document attachment (Company service letter):</label>
            <input type="file" />
  
            <label>Document attachment (Pay slip):</label>
            <input type="file" />
          </div>
        )}
      </div>
    );
  }
  
  

  renderAddress() {
    return (
      <div>
        <div>
          <label>Current Address:</label>
          <input type="text" placeholder="House number/name" value="123 Main St" />
          <input type="text" placeholder="Street name and locality" value="New City" />
          <input type="text" placeholder="City" value="Exampleville" />
          <input type="text" placeholder="State" value="Stateville" />
          <input type="text" placeholder="Country" value="Countryland" />
          <input type="text" placeholder="Pin code" value="12345" />
          <label>Address proof attachment:</label>
          <input type="file" />
        </div>
  
        <div>
          <label>Permanent Address:</label>
          <div>
            <input type="radio" id="sameAddressYes" name="sameAddress" checked />
            <label htmlFor="sameAddressYes">Same as current address</label>
          </div>
          <div>
            <input type="radio" id="sameAddressNo" name="sameAddress" />
            <label htmlFor="sameAddressNo">Different address</label>
          </div>
          {/* Fields for permanent address */}
        </div>
      </div>
    );
  }
  
  

  renderFiles() {
    return (
      <div>
        <label>Attachments uploaded by an employee:</label>
        <div>
          <div>
            <label>Document Name:</label>
            <input type="text" value="Resume" readOnly />
          </div>
          <div>
            <label>File:</label>
            <input type="file" disabled />
          </div>
        </div>
        <div>
          <div>
            <label>Document Name:</label>
            <input type="text" value="Cover Letter" readOnly />
          </div>
          <div>
            <label>File:</label>
            <input type="file" disabled />
          </div>
        </div>
      </div>
    );
  }
  
  

  renderActiveMenuContent() {
    const { activeMenuItemIndex } = this.state;
  
    switch (activeMenuItemIndex) {
      case 0:
        return this.renderJobProfile();
      case 1:
        return this.renderServiceDetails();
      case 2:
        return this.renderPersonalDetails();
      case 3:
        return this.renderEducation();
      case 4:
        return this.renderSkills();
      case 5:
        return this.renderWorkExperience();
      case 6:
        return this.renderAddress();
      case 7:
        return this.renderFiles();
      default:
        return null;
      }
    }

  render() {
    const { menuItems, activeMenuItemIndex } = this.state;

    return (
        <div>
          <SideMenu tag="New Page">
            <div className={styles.wrapper}>
              <div className={styles.menu}>
                {menuItems.map((menuItem, index) => (
                  <button
                    key={index}
                    className={`${styles.menuItem} ${
                      activeMenuItemIndex === index ? styles.active : ""
                    }`}
                    onClick={() => this.handleMenuChange(index)}
                  >
                    {menuItem}
                  </button>
                ))}
              </div>
  
              <div className={styles.content}>
                {this.renderActiveMenuContent()}
              </div>
  
              <div className={styles.navigation}>
                <button
                  className={`button ${styles.prevButton}`}
                  onClick={this.handlePrevious}
                >
                  Previous
                </button>
                <button
                  className={`button ${styles.nextButton}`}
                  onClick={this.handleNext}
                >
                  Next
                </button>
                <button
                  className={`button ${styles.closeButton}`}
                  onClick={this.handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </SideMenu>
        </div>
    );
  }
}
