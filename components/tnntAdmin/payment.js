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
      tenantUsername: "",
      tenantID: "",
      registrationDate: "",
      planSelected: "",
      paymentMode: "",
      accountDetails: "",
      invoiceProduction: "",
    };
    if (props.editable) {
      const { data } = props;
      stateData.tenantUsername = data.tenantUsername;
      stateData.tenantID = data.tenantID;
      stateData.registrationDate = data.registrationDate;
      stateData.planSelected = data.planSelected;
      stateData.paymentMode = data.paymentMode;
      stateData.accountDetails = data.accountDetails;
      stateData.invoiceProduction = data.invoiceProduction;
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

  handleSubmit = () => {
    const {
      tenantUsername,
      tenantID,
      registrationDate,
      planSelected,
      paymentMode,
      accountDetails,
      invoiceProduction,
    } = this.state;
    const { editable, data, onCreateTenant, onUpdateTenant } = this.props;

    // Validation
    if (
      !tenantUsername ||
      !tenantID ||
      !registrationDate ||
      !planSelected ||
      !paymentMode ||
      !accountDetails ||
      !invoiceProduction
    ) {
      Swal.fire({
        title: "Fill all fields",
        icon: "error",
        confirmButtonColor: Colors.primaryColor,
        width: Colors.width,
      });
      return;
    }

    const tenantData = {
      tenantUsername,
      tenantID,
      registrationDate,
      planSelected,
      paymentMode,
      accountDetails,
      invoiceProduction,
    };

    if (editable) {
      // Update existing tenant entry
      onUpdateTenant({
        ...data,
        ...tenantData,
      });
    } else {
      // Create new tenant entry
      onCreateTenant(tenantData);
    }
  };

  render() {
    const { visibility, setVisibility, editable } = this.props;
    const {
      tenantUsername,
      tenantID,
      registrationDate,
      planSelected,
      paymentMode,
      accountDetails,
      invoiceProduction,
    } = this.state;

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
              {editable ? "Update Tenant Details" : "Create Tenant Details"}
            </p>

            <div className={styles.inputAlignment}>
              <p>Tenant Username:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={tenantUsername}
                  onChange={this.handleInputChange}
                  name="tenantUsername"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Tenant ID:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={tenantID}
                  onChange={this.handleInputChange}
                  name="tenantID"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Registration Date:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  type="date"
                  value={registrationDate}
                  onChange={this.handleInputChange}
                  name="registrationDate"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Plan Selected:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={planSelected}
                  onChange={this.handleInputChange}
                  name="planSelected"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Payment Mode:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={paymentMode}
                  onChange={this.handleInputChange}
                  name="paymentMode"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Account Details:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  inputType="textarea"
                  maxLength={100}
                  value={accountDetails}
                  onChange={this.handleInputChange}
                  name="accountDetails"
                />
              </div>
            </div>

            <div className={styles.inputAlignment}>
              <p>Invoice Production:</p>
              <div className={styles.inputCustom}>
                <CustomInput
                  value={invoiceProduction}
                  onChange={this.handleInputChange}
                  name="invoiceProduction"
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
