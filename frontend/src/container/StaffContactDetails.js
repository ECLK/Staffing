import { HotTable } from '@handsontable/react';
import React from 'react';

const StaffContactDetails = (props) => {
	return (
		<div id="staff-contact-details">
			<HotTable
				licenseKey={'non-commercial-and-evaluation'}
				data={props.data || []}
				columns={[
					{
						data: 'name',
						type: 'text',
						width: 300,

						disableVisualSelection: true, readOnly: false
					},
					{ data: 'mobile', type: 'numeric', width: 180, allowInvalid: false },
					{ data: 'residenceNumber', type: 'numeric', width: 180 },
					{ data: 'emergencyName', type: 'text', width: 180, allowInvalid: false },
					{ data: 'emergencyMobile', type: 'numeric', width: 180, allowInvalid: false }
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
						[ { label: '', colspan: 3 }, { label: 'Emergency Contact', colspan: 2 } ],
						[ 'Name with Initials', 'Mobile Number', 'Residence Number', 'Name', 'Mobile Number' ]
					]
				}}
			/>
		</div>
	);
};

export default StaffContactDetails;
