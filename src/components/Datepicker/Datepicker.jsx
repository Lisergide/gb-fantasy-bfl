import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";


// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// const moment = require('moment');
// require('moment/locale/ru');

class Datepicker extends React.Component {
  state = {};

  render() {
    return (
      <>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-calendar-grid-58"/>
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
              locale="ru"
              inputProps={{
                placeholder: ""
              }}
              dateFormat={"D MMMM"}
              timeFormat={false}
            />
          </InputGroup>
        </FormGroup>
      </>
    );
  }
}

export default Datepicker;