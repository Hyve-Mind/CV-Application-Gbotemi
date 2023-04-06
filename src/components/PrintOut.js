import React from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './componentToPrint';

class Printer extends React.PureComponent {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                        return <button className='printBtn'> <a href="#">Download CV</a></button>
                    }}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}
export default Printer