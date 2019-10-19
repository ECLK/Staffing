import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { Fragment } from 'react';
import ReactCodeInput from 'react-code-input';

import { formikErrorClass, hasFormikError } from '../util';
import Header from '../components/Header';
import Layout from '../components/Layout';

const validationSchema = Yup.object().shape({
	name: Yup.string().min(3).required('Name is required'),
	addressLine1: Yup.string().min(3, 'Address should have minimum 3').required('Address line 1 is required'),
	addressLine2: Yup.string().min(3, 'Address should have minimum 3').required('Address line 2 is required'),
	phone: Yup.number().min(10).required('Phone number is required'),
	fax: Yup.number().required(),
	divisionalSecretariat: Yup.string().min(1).required('Divisional Secretariat is required'),
	numbOfStaff: Yup.number().moreThan(0).required('Number of Staff is required')
});

const Institution = () => {
	return (
		<div>
			<Header />
			<Layout active={'institution'} className="col-lg-6 col-md-8 col-sm-12 pl-4 pt-5">
				<Formik
					initialValues={{
						name: '',
						addressLine1: '',
						addressLine2: '',
						phone: '',
						fax: '',
						divisionalSecretariat: '',
						numbOfStaff: ''
					}}
					validationSchema={validationSchema}
					onSubmit={({ setSubmitting }) => {
						alert('Form is validated! Submitting the form...');
						setSubmitting(false);
					}}
				>
					{({ touched, errors, isSubmitting, setFieldTouched }) => (
						<Form>
							<div className="form-group">
								<label htmlFor="name">Name of the Institution</label>
								<Field
									type="text"
									name="name"
									placeholder="Institution Name"
									className={`${formikErrorClass('name', touched, errors)}`}
								/>
								<ErrorMessage component="div" name="name" className="invalid-feedback" />
							</div>

							<div className="form-group">
								<label htmlFor="addressLine1">Address of the Institution</label>
								<Field
									type="text"
									name="addressLine1"
									placeholder="Enter Line 1"
									className={`${formikErrorClass('addressLine1', touched, errors)}`}
								/>
								<ErrorMessage component="div" name="addressLine1" className="invalid-feedback" />
								<Field
									type="text"
									name="addressLine2"
									placeholder="Enter Line 2"
									className={`mt-1 ${formikErrorClass('addressLine2', touched, errors)}`}
								/>
								<ErrorMessage component="div" name="addressLine2" className="invalid-feedback" />
							</div>

							<div className="form-group">
								<label htmlFor="phone">Phone Number</label>
								<Field
									className="form-control"
									name={'phone'}
									render={({ field, form: { errors, isSubmitting, touched, setFieldValue } }) => {
										return (
											<Fragment>
												<ReactCodeInput
													touch={() => setFieldTouched('phone', true)}
													untouch={() => setFieldTouched('phone', false)}
													className="react-code-input-container"
													onChange={(v) => setFieldValue('phone', v)}
													value={field.value}
													type="number"
													fields={10}
													autoFocus={false}
												/>
											</Fragment>
										);
									}}
								/>
								<ErrorMessage
									component="div"
									name="phone"
									className={
										hasFormikError('phone', touched, errors) ? 'invalid-feedback display-block' : ''
									}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="fax">Fax Number</label>
								<Field
									className="form-control"
									name={'fax'}
									render={({ field, form: { errors, isSubmitting, touched, setFieldValue } }) => {
										return (
											<Fragment>
												<ReactCodeInput
													touch={() => setFieldTouched('fax', true)}
													untouch={() => setFieldTouched('fax', false)}
													className="react-code-input-container"
													onChange={(v) => setFieldValue('fax', v)}
													value={field.value}
													type="number"
													fields={10}
													autoFocus={false}
												/>
											</Fragment>
										);
									}}
								/>
								<ErrorMessage
									component="div"
									name="fax"
									className={
										hasFormikError('fax', touched, errors) ? 'invalid-feedback display-block' : ''
									}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="divisionalSecretariat">Divisional Secretariat</label>
								<Field
									type="text"
									name="divisionalSecretariat"
									placeholder="Enter divisional secretariat number"
									className={`${formikErrorClass('divisionalSecretariat', touched, errors)}`}
								/>
								<ErrorMessage
									component="div"
									name="divisionalSecretariat"
									className="invalid-feedback"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="numbOfStaff">Number of Staff Members</label>
								<Field
									type="number"
									name="numbOfStaff"
									placeholder="Enter number of staff"
									className={`${formikErrorClass('numbOfStaff', touched, errors)}`}
								/>
								<ErrorMessage component="div" name="numbOfStaff" className="invalid-feedback" />
							</div>

							<button type="submit" className="btn btn-primary btn-block bg-primary" disabled={isSubmitting}>
								{isSubmitting ? 'Please wait...' : 'Save'}
							</button>
						</Form>
					)}
				</Formik>
			</Layout>
		</div>
	);
};

export default Institution;
