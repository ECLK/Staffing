import { HotTable } from '@handsontable/react';
import React from 'react';
import { DISTRICTS } from '../constants'
const StaffDutyDistricts = (props) => {
	return (
		<div id="staff-duty-districts">
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
					{ data: 'preference1', type: 'dropdown', source: DISTRICTS, width: 180, allowInvalid: false },
					{ data: 'preference2', type: 'dropdown', source: DISTRICTS, width: 180, allowInvalid: false },
					{ data: 'preference3', type: 'dropdown', source: DISTRICTS, width: 180, allowInvalid: false },
					{ data: 'preference4', type: 'dropdown', source: DISTRICTS, width: 180, allowInvalid: false },
					{ data: 'preference5', type: 'dropdown', source: DISTRICTS, width: 180, allowInvalid: false }
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
						[ { label: '', colspan: 1 }, { label: 'Preferred District', colspan: 5 } ],
						[
							'Name with Initials',
							'1st Preference',
							'2nd Preference',
							'3rd Preference',
							'4th Preference',
							'5th Preference'
						]
					]
				}}
			/>
		</div>
	);
};

export default StaffDutyDistricts;
