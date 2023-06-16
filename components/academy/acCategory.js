import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./academy.module.css";
import Swal from "sweetalert2";
import Colors from "../../constants/colors";
import CustomInput from "../customInput/customInput";

export default class Components extends React.Component {
  constructor(props) {
    super(props);
    const stateData = {
      txt_Category_name: "",
      num_Course_ID: "",
      txt_course_name: "",
    };
    if (props.editable) {
      stateData.txt_Category_name = props.data.subcategory_name;
      stateData.num_Course_ID = props.data.category_id;
      stateData.txt_course_name = props.data.course_name;
    }
    this.state = {
      ...stateData,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  async insertRecord() {
        const {
          num_Course_ID,
          txt_Category_name,
          txt_course_name,
          editable,
          selectedData
        } = this.state;
      
        try {
          const alertInitial = "";
          let alertText = alertInitial;
      
          if (num_Course_ID === undefined) {
            alertText += "* Category Name\n";
          }
          if (txt_Category_name === "") {
            alertText += "* Name\n";
          }
          if (txt_course_name === "") {
            alertText += "* Course Name\n";
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
      
          const courseData = {
            category: txt_Category_name,
            courseId: num_Course_ID,
            courseName: txt_course_name,
          };
      
          if (editable) {
            
            this.props.onUpdateCourse({
              ...selectedData,
              ...courseData,
            });
          } else {
            this.props.onCreateCourse(courseData);
          }
        } catch (err) {
          console.log(err);
        }
    }
    
      

  render() {
    const { visibility, setVisibility, editable } = this.props;
    const { txt_Category_name, num_Course_ID, txt_course_name } = this.state;

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
              <p>Category Name:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={txt_Category_name}
                  onChange={this.handleInputChange}
                  name="txt_Category_name"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Course ID:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  type="number"
                  value={num_Course_ID}
                  onChange={this.handleInputChange}
                  name="num_Course_ID"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Course Name:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  inputType="textarea"
                  maxLength={100}
                  value={txt_course_name}
                  onChange={this.handleInputChange}
                  name="txt_course_name"
                />
              </div>
            </div>

            <div className={styles.button}>
              <button className="button" onClick={this.handleSubmit}>
                {editable ? "Update" : "Create"}
              </button>
            </div>
        </div>
    </div>
</div>
);
}
}
