import { HotTable } from '@handsontable/react';
import React from 'react';

const StaffPostDetails = (props) => {
	return (
		<div id="staff-post-details">
			<HotTable
				licenseKey={'non-commercial-and-evaluation'}
				data={props.data || []}
				columns={[
					{ data: 'name', type: 'text', width: 300, disableVisualSelection: true, readOnly: false },
					{ data: 'post', type: 'text', width: 180 },
					{ data: 'natureOfPost', source: [ 'Nature 1', 'Nature 2' ], type: 'dropdown', width: 180, allowInvalid: false },
					{ data: 'attachedOffice', type: 'text', width: 180 },
					{ data: 'service', type: 'text', width: 180 },
					{
						data: 'appointmentDate',
						type: 'date',
						dateFormat: 'YYYY-MM-DD',
						placeholder: 'YYYY-MM-DD',
						width: 180, 
						allowInvalid: false
					},
					{ data: 'classOrGrade', type: 'text', width: 180 },
					{ data: 'salaryCode', type: 'text', width: 180 },
					{ data: 'basicMonthlySalary', type: 'numeric', width: 180, allowInvalid: false }
				]}
				beforeKeyDown={function(e) {
					props.beforeKeyDown(e, this.countCols());
				}}
				afterSelection={props.afterSelection}
				afterChange={(changes) => props.afterChange(changes)}
				settings={{
					autoWrapRow: true,
					maxRows: props.rowCount,
					width: '100%',
					height: 800,
					rowHeaders: true,
					manualRowResize: true,
					manualColumnResize: true,
					fixedColumnsLeft: 1,
					nestedHeaders: [
						[ { label: '', colspan: 1 }, { label: 'Polling PLace Information', colspan: 8 } ],
						[
							'Name with Initials',
							'Post',
							'Nature of Post',
							'If field, attached office',
							'Service',
							'Appointment Date',
							'Class/Grade',
							'Salary Code',
							'Basic Monthly Salary'
						]
					]
				}}
			/>
		</div>
	);
};

export default StaffPostDetails;
