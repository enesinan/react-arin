import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import Collapse from './components/collapse';

function App() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card-group w-100">
                        <div className="col">

                            <Collapse href="collapseExample1">
                                <Card cardTitle="Card-1"
                                    cardText="loremasdfasdfasdf"
                                    updatedTime="1 minutes ago"
                                    image="https://picsum.photos/id/10/200/300" />
                            </Collapse>
                        </div>
                        <div className="col">
                            <Collapse href="collapseExample2">
                                <Card cardTitle="Card-2"
                                    cardText="loremasdfasdfasdf"
                                    updatedTime="2 minutes ago"
                                    image="https://picsum.photos/id/1/200/300" />
                            </Collapse>
                        </div>
                        <div className="col">
                            <Collapse href="collapseExample3">
                                <Card cardTitle="Card-3"
                                    cardText="loremasdfasdfasdf"
                                    updatedTime="3 minutes ago"
                                    image="https://picsum.photos/id/15/200/300" />
                            </Collapse>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default Card




ReactDOM.render(
    <App />,
    document.getElementById('root')
);
