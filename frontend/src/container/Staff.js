import React from 'react';
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';

import Header from '../components/Header';
import Layout from '../components/Layout';
import StaffContactDetails from './StaffContactDetails';
import StaffDutyDistricts from './StaffDutyDistricts';
import StaffPersonalDetails from './StaffPersonalDetails';
import StaffPollingPlace from './StaffPollingPlace';
import StaffPostDetails from './StaffPostDetails';
import StaffPreviousElectionDuties from './StaffPreviousElectionDuties';
const MAX_TAB = 6;
export default class Staff extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: null,
			data: {},
			tabs: [
				{
					title: 'Personal Details',
					component: StaffPersonalDetails
				},
				{
					title: 'Contact Details',
					component: StaffContactDetails
				},
				{
					title: 'Polling Place',
					component: StaffPollingPlace
				},
				{
					title: 'Duty Districts',
					component: StaffDutyDistricts
				},
				{
					title: 'Post Details',
					component: StaffPostDetails
				},
				{
					title: 'Previous Election Duties',
					component: StaffPreviousElectionDuties
				}
			]
		};
	}
	addNewRowToAllTabs() {
		const { tabs, data } = this.state;
		tabs.map((tab, i) => {
			if (!data[i]) {
				data[i] = [];
			}
			data[i] = [ ...data[i], [] ];
		});
		this.setState({ data });
	}
	afterChange(index, changes) {
		const { data } = this.state;
		if (index == null || !changes) {
			return;
		}
		if (!data[index]) {
			data[index] = [];
		}
		changes.forEach(([ row, prop, oldValue, newValue ]) => {
			if (!data[index][row]) {
				data[index][row] = {};
			}
			data[index][row][prop] = newValue;
		});
		this.setState({ data });
	}
	afterSelection(currentRow, currentColumn) {
		this.setState({ currentRow, currentColumn });
	}
	beforeKeyDown(index, event, columnCount) {
		if (event.code === 'Tab') {
			const { tabs, currentColumn } = this.state;

			if (index === MAX_TAB - 1) {
				// this is the last tab. Lets go to first tab
				this.setState({ activeTab: tabs[0].title });
				this.addNewRowToAllTabs();
			} else {
				if (currentColumn === columnCount - 1) {
					this.setState({ activeTab: tabs[index + 1].title });
				}
			}
		}
	}

	renderTab() {
		const { tabs, activeTab, data } = this.state;
		let found = null;
		let index = null;
		for (let i = 0; i < tabs.length; i++) {
			const tab = tabs[i];
			if (tab.title === activeTab) {
				found = tab;
				index = i;
				break;
			}
		}
		const rowData = data[index] || [ [] ];
		if (found) {
			return (
				<found.component
					beforeKeyDown={(e, columnCount) => this.beforeKeyDown(index, e, columnCount)}
					afterSelection={(row, col) => this.afterSelection(row, col)}
					rowCount={data[index].length}
					data={rowData}
					afterChange={(changes) => this.afterChange(index, changes)}
				/>
			);
		}
		return null;
	}

	componentDidMount() {
		const { tabs } = this.state;
		this.addNewRowToAllTabs();
		this.setState({ activeTab: tabs[0].title });
	}

	render() {
		const { tabs, activeTab } = this.state;
		return (
			<div>
				<Header />
				<Layout active={'staff'}>
					<Tabs
						mountOnEnter={true}
						defaultActiveKey={tabs[0].title}
						variant={'pills'}
						activeKey={activeTab}
						onSelect={(activeTab) => this.setState({ activeTab })}
						transition={false}
						id="staff-tabs"
					>
						{tabs.map((tab, i) => {
							return (
								<Tab key={i} eventKey={tab.title} title={tab.title}>
									<br />
									<br />
								</Tab>
							);
						})}
					</Tabs>
					{this.renderTab()}
				</Layout>
			</div>
		);
	}
}
