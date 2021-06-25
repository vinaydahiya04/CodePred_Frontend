import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPred } from './../../actions/predActions'
import styles from './predictor.module.css'
import Circle from './../Circle/circle'

class Predictor extends Component {

    componentDidMount() {



        this.props.getPred(this.props.auth.codeforces_handle, this.props.history);


    }







    provider = () => {
        var items = []

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
                        items.push(this.props.pred.data[i][j])
                    }
                }

                items = [...new Set(items)]
                var item = []

                for (let i = 0; i < items.length; i++)item.push(<Circle data={items[i]} />)
                return <div>


                    Well my recommendation is that You Should try solving the following questions. If the problem seems too hard dont give up
                    easily, try solving and then later read the editorial to gain some insight into solving such questions.

                    <div className={styles.holder}>
                        {item}
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