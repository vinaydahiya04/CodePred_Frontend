import styles from "./predictor.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPred } from "./../../actions/predActions";

import Circle from "./../Circle/circle";
import Loader from "./../loader/Loader";

class Predictor extends Component {
    state = {
        loader: true,
    };

    componentDidMount() {
        this.props.getPred(this.props.auth.codeforces_handle, this.props.history);

        this.setState({
            loader: false,
        });
    }

    provider = () => {
        var items = [];

        switch (this.props.pred.flag) {
            case -1:
                return <div>Hello</div>;
            case 1:
                return <div>Invalid Codeforces Handle</div>;
            case 2:
                return (
                    <div>
                        Please tak part in atleast one contest for this recommendation
                        system to work
                    </div>
                );
            case 3:
                return (
                    <div>
                        Sorry! But currently this predictor works only for people ranked
                        less than international master, PS at your rank the ai needs your
                        expertise more than you need the ai
                    </div>
                );
            case 4:
                for (let i = 0; i < this.props.pred.data.length; i++) {
                    for (let j = 0; (j < this.props.pred.data[i].length) & (j < 2); j++) {
                        items.push(this.props.pred.data[i][j]);
                    }
                }

                

                items = [...new Set(items)];
                var item = [];
                let item_occurence = {};
                for (let i = 0; i < items.length; i++){
                    if(!item_occurence[items[i][0]]){
                        item.push(<Circle data={items[i]} />);
                        item_occurence[items[i][0]] = 1;
                    }
                }

                    
                return (
                    <div>
                        <h1>Recommended Problems</h1>
                        <div className={styles.body_content}>
                            My recommendation is that You should try solving the
                            following questions. If the problem seems too hard dont give up
                            easily, try solving and then after some time read the editorial to gain some
                            insight into solving such questions.
                        </div>

                        <div className={styles.holder}>{item}</div>
                    </div>
                );
            default:
                return <div>Hello</div>;
        }
    };

    render() {
        console.log(this.props.pred);
        return (
            <div>
                {this.state.loader ? <Loader /> : <></>}
                <div className={this.state.loader ? styles.hide : styles.unh}>
                    {this.provider()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pred: state.pred,
    auth: state.auth,
});

export default connect(mapStateToProps, { getPred })(Predictor);
