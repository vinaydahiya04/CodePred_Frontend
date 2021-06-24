import React, { Component } from 'react';
import { getGraphData } from './../../actions/graphAction'
import { connect } from "react-redux";
import { Bar, Pie } from 'react-chartjs-2'
import Carousel from './../carousel/Carousel'

// import styles from './MainPage.module.css'
class MainPage extends Component {

    state = {
        handleReady: false,


    }

    componentDidMount() {

        console.log(this.props.auth)

        if (this.props.auth.codeforces_handle.length >= 3) {
            this.props.getGraphData(this.props.auth.codeforces_handle);

        }
    }

    render() {
        console.log(this.props.graph)

        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        }

        var fillColor = function (num) {
            var tr = []

            for (var i = 0; i < num; i++) {
                tr.push(dynamicColors())
            }

            return tr;
        }

        var level_bar_labels = []
        var level_bar_values = []

        var accuracy_pie_labels = []
        var accuracy_pie_values = []

        var tags_pie_labels = []
        var tags_pie_values = []

        if (this.props.graph.flag) {
            for (const [key, value] of Object.entries(this.props.graph.levels_data)) {
                level_bar_labels.push(key)
                level_bar_values.push(value)
            }

            for (const [key, value] of Object.entries(this.props.graph.accuracy_data)) {
                accuracy_pie_labels.push(key)
                accuracy_pie_values.push(value)
            }

            for (const [key, value] of Object.entries(this.props.graph.tags_data)) {
                tags_pie_labels.push(key)
                tags_pie_values.push(value)
            }


        }
        return (
            <div>
                {this.props.auth.flag == 0 ? (
                    <Carousel />

                ) : (
                    <div>
                        {this.props.auth.codeforces_handle}
                        {this.props.auth.codeforces_handle.length < 3 ? <div>Go to the profiles page and input your Codeforces handle</div> :

                            <>{
                                this.props.graph.flag == 0 ? (<div>Invalid handle</div>) : (<div className='graph_container'>


                                    <div className='graph_div' >

                                        <Bar options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            width: "100px",
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                }
                                            },
                                        }}

                                            legend={{
                                                display: false
                                            }}
                                            data={{

                                                labels: level_bar_labels,
                                                datasets: [{
                                                    data: level_bar_values,

                                                    backgroundColor: fillColor(level_bar_labels.length),


                                                    borderColor: fillColor(level_bar_labels.length),
                                                    borderWidth: 1
                                                }]



                                            }} />
                                    </div>


                                    <div className='graph_div'>

                                        <Pie options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                }
                                            },
                                            legend: {
                                                display: false
                                            }
                                        }}

                                            legend={{
                                                display: false
                                            }}
                                            data={{
                                                labels: tags_pie_labels,
                                                datasets: [{
                                                    data: tags_pie_values,

                                                    backgroundColor: fillColor(level_bar_labels.length),


                                                    borderColor: fillColor(level_bar_labels.length),
                                                    borderWidth: 1
                                                }]



                                            }}
                                        />


                                    </div>

                                    <div className='graph_div'>
                                        <Pie options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                }
                                            },
                                        }}
                                            data={{
                                                labels: accuracy_pie_labels,
                                                datasets: [{
                                                    data: accuracy_pie_values,

                                                    backgroundColor: fillColor(level_bar_labels.length),


                                                    borderColor: fillColor(level_bar_labels.length),
                                                    borderWidth: 1
                                                }]



                                            }}
                                        />
                                    </div>


                                </div>)
                            }</>
                        }

                    </div>
                )
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => (
    {
        graph: state.graph,
        auth: state.auth
    }
)

export default connect(mapStateToProps,
    {
        getGraphData,

    })(MainPage);