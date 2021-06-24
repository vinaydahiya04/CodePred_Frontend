import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPred } from './../../actions/predActions'
import styles from './predictor.module.css'
import Circle from './../Circle/circle'

class Predictor extends Component {

    componentDidMount() {
        console.log(this.props.codeforces_handle)
        if (this.props.pred.flag == -1) {

            this.props.getPred(this.props.auth.codeforces_handle, this.props.history);

        }
    }







    provider = () => {
        const items = []

        switch (this.props.pred.flag) {
            case -1:
                return <div>Hello</div>
            case 1:
                return <div>Invalid Codeforces Handle</div>
            case 2:
                return <div>Please tak part in atleast one contest for this recommendation system to work</div>
            case 3:
                return <div>Sorry! But currently this predictor works only for people ranked less than international master, PS at your rank the ai needs your expertise more than you need the ai</div>
            case 4:
                for (let i = 0; i < this.props.pred.data.length; i++) {
                    for (let j = 0; j < this.props.pred.data[i].length & j < 1; j++) {
                        items.push(<Circle data={this.props.pred.data[i][j]} />)
                    }
                }
                return <div>


                    Well my recommendation is that You Should try solving the following questions. If the problem seem too hard dont give up
                    easily, try solving and then later read the editorial to gain some insight into solving such questions.

                    <div className={styles.holder}>
                        {items}
                    </div>












                </div>
            default:
                return <div>Hello</div>
        }
    }



    render() {
        console.log(this.props.pred)
        return (
            <div>
                {this.provider()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pred: state.pred,
    auth: state.auth
})

export default connect(mapStateToProps, { getPred })(Predictor);