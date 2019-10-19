import { HotTable } from '@handsontable/react';
import React from 'react';

const StaffPreviousElectionDuties = (props) => {
	return (
		<div id="staff-previous-election-duties">
			<HotTable
				licenseKey={'non-commercial-and-evaluation'}
				data={props.data || []}
				columns={[
					{ data: 'name', type: 'text', width: 240, disableVisualSelection: true, readOnly: false, },
					{ data: 'clerkPollingStation', type: 'text', width: 180 },
					{ data: 'clerkCountingVotes', type: 'text', width: 180 },
					{ data: 'juniorPollingStation', type: 'text', width: 180 },
					{ data: 'juniorCountingVotes', type: 'text', width: 180 },
					{ data: 'SPOPollingStation', type: 'text', width: 180 },
					{ data: 'seniorPollingStation', type: 'text', width: 180 },
					{ data: 'seniorBallotBoxes', type: 'text', width: 180 },
					{ data: 'seniorCountingVotes', type: 'text', width: 180 },
					{ data: 'seniorOther', type: 'text', width: 180 },
					{ data: 'assistantBallotBoxes', type: 'text', width: 180 },
					{ data: 'assistantCountingVotes', type: 'text', width: 180 },
					{ data: 'assistantReturningOfficer', type: 'text', width: 180 },
					{ data: 'assistantOther', type: 'text', width: 180 },
					{ data: 'DCCOCountingVotes', type: 'text', width: 180 },
					{ data: 'CCOCountingVotes', type: 'text', width: 180 },
					{ data: 'activePoliticRole', type: 'text', width: 180 },
					{ data: 'activePoliticElectionYear', type: 'numeric', width: 180 }
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
						[
							{ label: '', colspan: 1 },
							{ label: 'Clerk', colspan: 2 },
							{ label: 'Junior Presiding Officer', colspan: 2 },
							{ label: 'Add. SPO', colspan: 1 },
							{ label: 'Senior Presiding Officer', colspan: 4 },
							{ label: 'Assistant Returning Office', colspan: 4 },
							{ label: 'DCCO', colspan: 1 },
							{ label: 'CCO', colspan: 1 },
							{ label: 'If you or spouse engaged in active politics', colspan: 2 }
						],
						[
							'Name with Initials',
							'Polling Station',
							'Counting Votes',
							'Polling Station',
							'Counting Votes',
							'Polling Station',
							'Polling Station',
							'Issuing/Receiving Ballot Boxes',
							'Counting Votes',
							'Other',
							'Issuing/Receiving Ballot Boxes',
							'Counting Votes',
							'Ast. Returning Officer',
							'Other',
							'Counting Votes',
							'Counting Votes',
							'You or spouse role',
							'Election year'
						]
					]
				}}
			/>
		</div>
	);
};

export default StaffPreviousElectionDuties;
