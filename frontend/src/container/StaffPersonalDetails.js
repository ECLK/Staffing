import { HotTable } from '@handsontable/react';
import React from 'react';

const StaffPersonalDetails = (props) => {
	return (
		<div id="staff-personal-details">
			<HotTable
				licenseKey={'non-commercial-and-evaluation'}
				data={props.data || []}
				columns={[
					{ data: 'nic', title: 'NIC', type: 'text', width: 120 },
					{ data: 'name', title: 'Name with Initials', type: 'text', width: 300 },
					{
						data: 'DOB',
						title: 'Date of Birth',
						type: 'date',
						dateFormat: 'YYYY-MM-DD',
						placeholder: 'YYYY-MM-DD',
						allowInvalid: false
					},
					{ data: 'gender', title: 'Gender', type: 'dropdown', source: [ 'Male', 'Female' ], width: 80, allowInvalid: false },
					{ data: 'addressLine1', title: 'Address Line 1', type: 'text', width: 200 },
					{ data: 'addressLine2', title: 'Address Line 2', type: 'text', width: 200 }
				]}
				settings={{
					autoWrapRow: true,
					maxRows: props.rowCount,
					width: '100%',
					height: 800,
					rowHeaders: true,
					manualRowResize: true,
					manualColumnResize: true,
					fixedColumnsLeft: 1
				}}
				beforeKeyDown={function(e) {
					props.beforeKeyDown(e, this.countCols());
				}}
				afterSelection={props.afterSelection}
				afterChange={(changes) => props.afterChange(changes)}
			/>
		</div>
	);
};

export default StaffPersonalDetails;
