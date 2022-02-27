import React from 'react';
import './home.scss';
import RunningDays from "@/components/panels/runningDays/RunningDays";
import DataOverview from "@//components/panels/dataOverview/DataOverview";
import Pending from "@//components/panels/pending/Pending";
import Analysis from "@//components/panels/analysis/Analysis";

class Home extends React.Component {
  render() {
    return (
      <div className={'home-container'}>
        <div className={'home-body'}>
          <div className={'home-body-item home-body-top'}>
            <RunningDays/>
            <DataOverview/>
          </div>
          <div className={'home-body-item home-body-bottom'}>
            <Pending/>
            <Analysis/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
