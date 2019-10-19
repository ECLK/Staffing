import { HotTable } from '@handsontable/react';
import React from 'react';

const StaffPollingPlace = (props) => {
	return (
		<div id="staff-polling-place">
			<HotTable
				licenseKey={'non-commercial-and-evaluation'}
				data={props.data || []}
				columns={[
					{ data: 'name', type: 'text', width: 300, disableVisualSelection: true, readOnly: false },
					{ data: 'divisionalSecretariat', type: 'text', width: 180 },
					{ data: 'GNDivision', type: 'text', width: 180 },
					{ data: 'pollingBooth', type: 'text', width: 180 }
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
						[ { label: '', colspan: 1 }, { label: 'Polling Place Information', colspan: 3 } ],
						[ 'Name with Initials', 'Divisional Sect.', 'GN Division', 'Polling Booth' ]
					]
				}}
			/>
		</div>
	);
};

export default StaffPollingPlace;
