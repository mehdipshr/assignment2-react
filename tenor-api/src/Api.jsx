import axios from 'axios'
import Api1 from './Api1'
import Api2 from './Api2'
import Api3 from './Api3'
import Api4 from './Api4'

import React, { Component } from 'react'
class Api extends Component {
    constructor() {
        super()
        this.state = ({
            links: []
        })
    }
    componentDidMount() {
        
        axios.get('https://api.publicapis.org/entries')
            .then((response) => {
                console.log(response);
                this.setState({
                    links: response.data.entries
                })
            })
    }
    render() {
        return (
            <div>
                <div>
                    <div> <h2>new website</h2></div>
                </div>
                {
                    <ol>
                        {
                            this.state.links.map((mahdi, index) => {
                                return (
                                    <div key={index} >
                                        <Api1 quote={mahdi} younes={index} />
                                        <Api2 quote={mahdi}/>
                                        <Api3 quote={mahdi}/>
                                        <Api4 quote={mahdi}/>
                                    </div>

                                )
                            })
                        }
                    </ol>
                }
            </div>
        )
    }
}
export default Api







