import React, {Component} from 'react';

export class UserCenter extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                用户中心 {data}
            </div>
        );
    }
}

