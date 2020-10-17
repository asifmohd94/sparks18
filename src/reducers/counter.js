const counterReducer=(state=0,action){
    switch(action.type){
        case 'add':
            return state+1
            case "delete":
                return state-1
    }
}