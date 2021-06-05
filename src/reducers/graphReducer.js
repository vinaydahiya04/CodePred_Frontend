import { GETGRAPHDATA } from './../actions/types'

const initialState = {
    flag: false,
    data: [],
    tags_data: {},
    accuracy_data: {},
    levels_data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETGRAPHDATA:


            var dummy = action.payload.data

            if (dummy["status"] != "OK") {

                return {
                    ...state,
                    flag: false
                }
            }
            else {
                var data = []
                var tags_data = {}
                var accuracy_data = {}
                var levels_data = {}

                //state.flag = true;
                data = action.payload.data;
                for (var i = 0; i < dummy["result"].length; i++) {

                    if (accuracy_data[dummy["result"][i]["verdict"]]) accuracy_data[dummy["result"][i]["verdict"]]++;

                    else accuracy_data[dummy["result"][i]["verdict"]] = 1;



                    if (dummy["result"][i]["verdict"] == "OK") {




                        if (dummy["result"][i]["problem"]["rating"]) {

                            if (levels_data[dummy["result"][i]["problem"]["rating"]]) levels_data[dummy["result"][i]["problem"]["rating"]]++;

                            else levels_data[dummy["result"][i]["problem"]["rating"]] = 1;

                        }

                        if ("tags" in dummy["result"][i]["problem"]) {
                            for (var j = 0; j < dummy["result"][i]["problem"]["tags"].length; j++) {
                                if (tags_data[dummy["result"][i]["problem"]["tags"][j]]) tags_data[dummy["result"][i]["problem"]["tags"][j]]++;
                                else tags_data[dummy["result"][i]["problem"]["tags"][j]] = 1;
                            }
                        }
                    }
                }



                console.log(tags_data)



                return {
                    ...state,
                    tags_data: tags_data,
                    accuracy_data: accuracy_data,
                    levels_data: levels_data,
                    flag: true
                }
            };


        default:
            return state
    }
}