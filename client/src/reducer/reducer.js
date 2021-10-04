const initialState = {
    pokemons:[],
    pokemonsDetail:{},
    pokemonsAPI:[],
    pokemonsDB:[],
    pokemonsName:[],
    pokemonsFilter:[],
    types:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                pokemonsAPI: action.payload
            }

        case 'GET_POKEMON':
            return{
                ...state,
                pokemonsDetail: action.payload
            }

        case 'GET_NAME':
            return{
                ...state,
                pokemonsName: action.payload
            }

        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }

        case 'GENERICO':
            return{
                ...state,
                pokemons: action.payload
            }

        case 'FILTRADOS':
            return{
                ...state,
                pokemonsFilter: action.payload
            }

        default:
            return state;
    }
}

export default reducer;