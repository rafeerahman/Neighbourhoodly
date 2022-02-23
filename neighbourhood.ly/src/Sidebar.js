import React from 'react';
import './App.css';

class Sidebar extends React.Component {
    render() {
      const {   tab1, ref1, 
                tab2, ref2,
                tab3, ref3,
                tab4, ref4,
                tab5, ref5,
                tab6, ref6                
            } = this.props
      return (
        <div id="sidebar">
          <ul>
            <li><a href={ref1}>{tab1}</a></li>
            <li><a href={ref2}>{tab2}</a></li>
            <li><a href={ref3}>{tab3}</a></li>
            <li><a href={ref4}>{tab4}</a></li>
            <li><a href={ref5}>{tab5}</a></li>
            <li><a href={ref6}>{tab6}</a></li>
          </ul>
        </div>
      )
    }
  }

export default Sidebar;