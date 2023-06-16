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
        "Personal details",
        "Education",
        "Skills",
        "Work experience",
        "Address",
        "Files"
      ],
      activeMenuItemIndex: 0,
      formValues: {},

      employeeId: "123456",
      employmentType: "full-time",
      jobRole: "Software Engineer",
      designatedDepartment: "Engineering",
      manager: "John Doe",
      workEmailId: "johndoe@example.com",
      jobLocation: "New York",
      joiningDate: "2022-01-01",
      endDate: "2023-12-31",
      salary: "$100,000",
      profilePicture: null,
      nationality: "us",
      gender: "male",
      dateOfBirth: null,
      maritalStatus: "single",
      mobileNumber: "1234567890",
      degree: "bachelor",
      institute: "ABC Institute",
      university: "XYZ University",
      educationCity: "New York",
      educationState: "New York",
      educationCountry: "United States",
      fieldOfStudy: "Computer Science",
      yearOfPassing: "2020",
      skillType: "hard",
      skillName: "Communication",
      skillProficiency: "beginner",
      workExperience: "no",
      formerEmployer: "ABC Company",
      timePeriod: "Jan 2019 - Dec 2021",
      jobTitle: "Software Engineer",
      location: "New York",
      reasonForLeaving: "Career growth opportunities",
      currentAddress: {
        houseNumber: "123 Main St",
        street: "New City",
        city: "Exampleville",
        state: "Stateville",
        country: "Countryland",
        pinCode: "12345",
      },
      samePermanentAddress: true,
      permanentAddress: {
        houseNumber: "123 Main St",
        street: "New City",
        city: "Exampleville",
        state: "Stateville",
        country: "Countryland",
        pinCode: "12345",
      },
      attachments: [
        { documentName: "Resume", file: null },
        { documentName: "Cover Letter", file: null }
      ]
      
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
      const activeMenuItem = menuItems[activeMenuItemIndex];
      let updatedValues = {};
  
      switch (activeMenuItem) {
        case "Job profile":
          const employeeId = document.getElementById("employeeId").value;
          const employmentType = document.getElementById("employmentType").value;
          const jobRole = document.getElementById("jobRole").value;
          const designatedDepartment = document.getElementById("designatedDepartment").value;
          const manager = document.getElementById("manager").value;
          const workEmailId = document.getElementById("workEmailId").value;
          const jobLocation = document.getElementById("jobLocation").value;
          const joiningDate = document.getElementById("joiningDate").value;
          const endDate = document.getElementById("endDate").value;
          const salary = document.getElementById("salary").value;
  
          updatedValues = {
            employeeId,
            employmentType,
            jobRole,
            designatedDepartment,
            manager,
            workEmailId,
            jobLocation,
            joiningDate,
            endDate,
            salary
          };
          break;
  
        case "Personal details":
          const firstName = document.getElementById("firstName").value;
          const lastName = document.getElementById("lastName").value;
          const nationality = document.getElementById("nationality").value;
          const gender = document.getElementById("gender").value;
          const dateOfBirth = document.getElementById("dateOfBirth").value;
          const maritalStatus = document.getElementById("maritalStatus").value;
          const emailId = document.getElementById("emailId").value;
          const mobileNumber = document.getElementById("mobileNumber").value;
  
          updatedValues = {
            firstName,
            lastName,
            nationality,
            gender,
            dateOfBirth,
            maritalStatus,
            emailId,
            mobileNumber
          };
          break;
  
        case "Education":
            const educationLevel = document.getElementById("educationLevel").value;
            const degree = document.getElementById("degree").value;
            const institution = document.getElementById("institution").value;
            const graduationYear = document.getElementById("graduationYear").value;
          
            const education = {
              educationLevel,
              degree,
              institution,
              graduationYear
            };
          
            updatedValues = {
              education
            };
            break;
          
  
        case "Skills":
          const skills = Array.from(document.getElementsByClassName("skill-input"))
            .map((element) => element.value);
          
          updatedValues = {
            skills
          };
          break;
  
        case "Work experience":
            const companyName = document.getElementById("companyName").value;
            const jobTitle = document.getElementById("jobTitle").value;
            const startDate = document.getElementById("startDate").value;
            const jobDescription = document.getElementById("jobDescription").value;
          
            updatedValues = {
              companyName,
              jobTitle,
              startDate,
              endDate,
              jobDescription
            };
            break;
          
  
        case "Address":
            const streetAddress = document.getElementById("streetAddress").value;
            const city = document.getElementById("city").value;
            const state = document.getElementById("state").value;
            const postalCode = document.getElementById("postalCode").value;
            const country = document.getElementById("country").value;
          
            updatedValues = {
              streetAddress,
              city,
              state,
              postalCode,
              country
            };
            break;
  
        case "Files":
            const resumeFile = document.getElementById("resumeFile").files[0];
            const coverLetterFile = document.getElementById("coverLetterFile").files[0];
            const referenceLetters = Array.from(document.getElementById("referenceLetters").files);
              

            const formData = new FormData();
              
            
            formData.append("resume", resumeFile);
            formData.append("coverLetter", coverLetterFile);
            referenceLetters.forEach((file, index) => {
                formData.append(`referenceLetter${index + 1}`, file);
               });
              
            
            updatedValues = {
                files: formData
            };
        break;
              
  
        default:
          break;
      }
  
      
      this.setState((prevState) => ({
        activeMenuItemIndex: prevState.activeMenuItemIndex + 1,
        ...updatedValues
      }));
    }
  };
  
  
  
  

  handleClose = () => {
    window.location.href = "staffRecords";
  };
  

  renderJobProfile() {
    const { employeeId, employmentType, jobRole, designatedDepartment, manager, workEmailId, jobLocation, joiningDate, endDate, salary } = this.state;
  
    return (
      <div>
        <label>Employee ID/Intern ID/Consultant ID:</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => this.setState({ employeeId: e.target.value })}
        />
  
        <label>Employment type:</label>
        <select
          value={employmentType}
          onChange={(e) => this.setState({ employmentType: e.target.value })}
        >
          <option value="part-time">Part-time employment</option>
          <option value="full-time">Full-time employment</option>
        </select>
  
        <label>Job role:</label>
        <input
          type="text"
          value={jobRole}
          onChange={(e) => this.setState({ jobRole: e.target.value })}
        />
  
        <label>Designated department:</label>
        <input
          type="text"
          value={designatedDepartment}
          onChange={(e) => this.setState({ designatedDepartment: e.target.value })}
        />
  
        <label>Manager:</label>
        <input
          type="text"
          value={manager}
          onChange={(e) => this.setState({ manager: e.target.value })}
        />
  
        <label>Work email Id:</label>
        <input
          type="email"
          value={workEmailId}
          onChange={(e) => this.setState({ workEmailId: e.target.value })}
        />
  
        <label>Job location:</label>
        <input
          type="text"
          value={jobLocation}
          onChange={(e) => this.setState({ jobLocation: e.target.value })}
        />
  
        <label>Joining date:</label>
        <input
          type="date"
          value={joiningDate}
          onChange={(e) => this.setState({ joiningDate: e.target.value })}
        />
  
        <label>End date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => this.setState({ endDate: e.target.value })}
        />
  
        <label>Salary:</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => this.setState({ salary: e.target.value })}
        />
      </div>
    );
  }
  

  renderPersonalDetails() {
    const { firstName, lastName, nationality, gender, dateOfBirth, maritalStatus, email, mobileNumber } = this.state;
    
    return (
      <div>
        <div>
          <label>Profile picture:</label>
          <input type="file" />
        </div>
  
        <div>
          <label>First name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
        </div>
  
        <div>
          <label>Last name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
        </div>
  
        <div>
          <label>Nationality:</label>
          <select
            value={nationality}
            onChange={(e) => this.setState({ nationality: e.target.value })}
          >
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <div>
          <label>Date of birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
          />
        </div>
  
        <div>
          <label>Marital status:</label>
          <select
            value={maritalStatus}
            onChange={(e) => this.setState({ maritalStatus: e.target.value })}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
        <div>
          <label>Email-Id:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
  
        <div>
          <label>Mobile number:</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => this.setState({ mobileNumber: e.target.value })}
          />
        </div>
      </div>
    );
  }
  

  renderEducation() {
    const {
      degreeCompleted, instituteName, universityName, city, state, country, fieldOfStudy, yearOfPassing} = this.state;
  
    return (
      <div>
        <div>
          <label>Degree/Qualification completed:</label>
          <select
            value={degreeCompleted}
            onChange={(e) =>
              this.setState({ degreeCompleted: e.target.value })
            }
          >
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
  
        <div>
          <label>Name of Institute or College:</label>
          <input
            type="text"
            value={instituteName}
            onChange={(e) =>
              this.setState({ instituteName: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>University name:</label>
          <input
            type="text"
            value={universityName}
            onChange={(e) =>
              this.setState({ universityName: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) =>
              this.setState({ city: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) =>
              this.setState({ state: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) =>
              this.setState({ country: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>Course/Field of Study:</label>
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(e) =>
              this.setState({ fieldOfStudy: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>Year of Passing:</label>
          <input
            type="text"
            value={yearOfPassing}
            onChange={(e) =>
              this.setState({ yearOfPassing: e.target.value })
            }
          />
        </div>
  
        <div>
          <label>Marksheet Attachment:</label>
          <input type="file" />
        </div>
      </div>
    );
  }
  

  renderSkills() {
    const { skills } = this.state;
  
    return (
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <label>Skill type:</label>
            <select
              value={skill.type}
              onChange={(e) => this.handleSkillTypeChange(e, index)}
            >
              <option value="hard">Hard skill</option>
              <option value="soft">Soft skill</option>
            </select>
  
            <label>Skill name:</label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => this.handleSkillNameChange(e, index)}
            />
  
            <label>Skill proficiency:</label>
            <select
              value={skill.proficiency}
              onChange={(e) => this.handleSkillProficiencyChange(e, index)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        ))}
  
        <button onClick={this.addSkill}>Add Skill</button>
      </div>
    );
  }
  
      

      renderWorkExperience() {
        const { workExperience, formerEmployer, timePeriod, jobTitle, location, reasonForLeaving } = this.state;

        return (
          <div>
            <label>Do you have any prior work experience?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="workExperience"
                  value="yes"
                  checked={this.state.workExperience === "yes"}
                  onChange={(e) => this.setState({ workExperience: e.target.value })}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="workExperience"
                  value="no"
                  checked={this.state.workExperience === "no"}
                  onChange={(e) => this.setState({ workExperience: e.target.value })}
                />
                No
              </label>
            </div>
      
            {this.state.workExperience === "yes" && (
              <div>
                <label>Name of former employer:</label>
                <input
                  type="text"
                  value={this.state.formerEmployer}
                  onChange={(e) => this.setState({ formerEmployer: e.target.value })}
                />
      
                <label>Time period (from and to):</label>
                <div>
                  <input
                    type="text"
                    value={this.state.timePeriod}
                    onChange={(e) => this.setState({ timePeriod: e.target.value })}
                  />
                </div>
      
                <label>Job title:</label>
                <input
                  type="text"
                  value={this.state.jobTitle}
                  onChange={(e) => this.setState({ jobTitle: e.target.value })}
                />
      
                <label>Location:</label>
                <input
                  type="text"
                  value={this.state.location}
                  onChange={(e) => this.setState({ location: e.target.value })}
                />
      
                <label>Reason for leaving:</label>
                <input
                  type="text"
                  value={this.state.reasonForLeaving}
                  onChange={(e) => this.setState({ reasonForLeaving: e.target.value })}
                />
      
                <label>Document attachment (Company service letter):</label>
                <input type="file" />
      
                <label>Document attachment (Pay slip):</label>
                <input type="file" />
              </div>
            )}
          </div>
        );
      }
      

      renderAddress() {const { currentAddress, samePermanentAddress, permanentAddress} = this.state;

        return (
          <div>
            <div>
              <label>Current Address:</label>
              <input
                type="text"
                placeholder="House number/name"
                value={this.state.currentAddress.houseNumber}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      houseNumber: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Street name and locality"
                value={this.state.currentAddress.streetName}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      streetName: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="City"
                value={this.state.currentAddress.city}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      city: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="State"
                value={this.state.currentAddress.state}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      state: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Country"
                value={this.state.currentAddress.country}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      country: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Pin code"
                value={this.state.currentAddress.pinCode}
                onChange={(e) =>
                  this.setState({
                    currentAddress: {
                      ...this.state.currentAddress,
                      pinCode: e.target.value,
                    },
                  })
                }
              />
              <label>Address proof attachment:</label>
              <input type="file" />
            </div>
      
            <div>
              <label>Permanent Address:</label>
              <div>
                <input
                  type="radio"
                  id="sameAddressYes"
                  name="sameAddress"
                  checked={this.state.sameAddress}
                  onChange={() => this.setState({ sameAddress: true })}
                />
                <label htmlFor="sameAddressYes">Same as current address</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sameAddressNo"
                  name="sameAddress"
                  checked={!this.state.sameAddress}
                  onChange={() => this.setState({ sameAddress: false })}
                />
                <label htmlFor="sameAddressNo">Different address</label>
              </div>
              {!this.state.sameAddress && (
                <div>
                  <input
                    type="text"
                    placeholder="House number/name"
                    value={this.state.permanentAddress.houseNumber}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          houseNumber: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Street name and locality"
                    value={this.state.permanentAddress.streetName}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          streetName: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={this.state.permanentAddress.city}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          city: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={this.state.permanentAddress.state}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          state: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={this.state.permanentAddress.country}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          country: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Pin code"
                    value={this.state.permanentAddress.pinCode}
                    onChange={(e) =>
                      this.setState({
                        permanentAddress: {
                          ...this.state.permanentAddress,
                          pinCode: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              )}
            </div>
          </div>
        );
      }
      

  renderFiles() {
    const { attachments } = this.state;

    
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
            <button onClick={this.handleSaveFiles}>Save</button>
          </div>
        );
      }
      
      handleSaveFiles = () => {
        const resumeFile = document.getElementById("resumeFile").files[0];
        const coverLetterFile = document.getElementById("coverLetterFile").files[0];
      
        console.log("Resume file:", resumeFile.name);
        console.log("Cover letter file:", coverLetterFile.name);
      
        this.setState({ filesSaved: true });
      };
      
      

  renderActiveMenuContent() {
    const { activeMenuItemIndex } = this.state;
    const activeMenuItem = this.state.menuItems[activeMenuItemIndex];

    switch (activeMenuItem) {
      case "Job profile":
        return this.renderJobProfile();
      case "Personal details":
        return this.renderPersonalDetails();
      case "Education":
        return this.renderEducation();
      case "Skills":
        return this.renderSkills();
      case "Work experience":
        return this.renderWorkExperience();
      case "Address":
        return this.renderAddress();
      case "Files":
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
