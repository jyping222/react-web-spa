import React from 'react';
import './home.less'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='home'>欢迎来到主页面 </div>
        );
    }
}

export default Home;