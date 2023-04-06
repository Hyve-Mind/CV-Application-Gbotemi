import React from 'react'
export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='printable'>
        <div className='userDetailsContainer'>
          <div>Details</div>
          <div className='Details'></div>
        </div>
        <div className='experienceContainer'>
          <div>Experience</div>
          <div className='Experience'></div>
        </div>
        <div className='educationContainer'>
          <div>Education</div>
          <div className='Education'></div>
        </div>
        <div className='referenceContainer'>
          <div>References</div>
          <div className='Reference'></div>
        </div>
      </div>
    );
  }
}
