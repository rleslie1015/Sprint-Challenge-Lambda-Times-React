import React from 'react';

const Tab = props => {
  if (props.tab === props.tab.selectedTab) {
  return (
    <div
      className={'tab active-tab'}
      onClick={(tab) => {props.selectTabHandler}}
    >
      {props.tab.toUpperCase()}
    </div>);
  } else {
    return (
      <div>
        
      </div>
    )
  }

// Make sure you include PropTypes on your props.

export default Tab;
