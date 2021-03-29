import React from 'react';
import ReactDOM from 'react-dom'

class Collapse extends React.Component {
     constructor() { 
         super()
         this.state = { showContent: false};
     }
  

    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }
 /*
    componentDidMount() {
        console.log('component olusturuldu')
    }

    componentDidUpdate() {
        console.log('componente update geldi')
    }

*/
   render() {  
    return (
        <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                  {this.props.children.props.cardTitle}
                 {/*React.children.map(this.props.children, children => children.props.cardTitle)*/}
                 </button>
                 
                 {
                    this.state.showContent ? (

                        <div className="collapse show">
                        <div class="card card-body">
                         {this.props.children}
                         {/*React.children.map(this.props.children, children => children)*/}
                         </div>
                         </div>
                    ):null
                 }
         
              
            
        </div>

    );
  }
}

export default Collapse;