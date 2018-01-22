import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { editUserDetailsRequest } from '../actions/usersActions';

const CLOUDINARY_UPLOAD_PRESET = 'lexglsms';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/myresources/image/upload';

class UpdateProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname: '',
            image_url: '',
            uploadedFile: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        $(document).ready(() => {
          // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
          $('.modal').modal();
          $('.button-collapse').sideNav();
          $('.tooltipped').tooltip({ delay: 500 });
          $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            hover: true, // Activate on hover
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
          }
          );
        });
      }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onBlur (event) {
        if(isEmpty(event.target.value)) {
            Materialize.toast(`${event.target.name} Field cannot be empty`, 2000);
        }    
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.editUserDetailsRequest(this.state);
    };

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    };

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              image_url: response.body.secure_url
            });
          }
        });
    }

    render() {
        const { firstname, surname, image_url} = this.state;
        return (
            <div className="row">
          <form
            onSubmit={this.onSubmit}
            className="col s12">
            <div className="row modal-form-row">
              <div className="input-field col s12 ">
                <input
                  onChange={this.onChange}
                  value={this.firstname}
                  id="firstname"
                  name="firstname"
                  type="text"
                />
                <label htmlFor="firstname">firstname</label>
              </div>
              <div className="input-field col s12 ">
                <input
                  onChange={this.onChange}
                  value={this.surname}
                  id="surnmae"
                  name="surname"
                  type="text" />
                <label htmlFor="surname">surname</label>
              </div>
              <div className="col s6 m6 l3">
                    {this.state.image_url === '' ? null :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img className="responsive-img" src={this.state.image_url} />
                    </div>}
                    <Dropzone
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop.bind(this)}>
                  <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
                </div>
              <div className="input-field col s12">
                <button className="modal-action modal-close waves-effect red white-text waves-red btn-flat right">Cancel</button>
                <button className="btn waves-effect modal-close waves-light right white red-text" type="submit" name="action">Save</button>
              </div>
            </div>
          </form>
        </div>
        ) 
    }
}

export default connect(null, { editUserDetailsRequest })(UpdateProfileForm);

