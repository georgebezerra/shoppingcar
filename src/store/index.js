import { createStore } from 'redux'

const INITIAL_STATE = [
    {
        name: 'Ferrari',
        url: 'https://s2.glbimg.com/RYlcw6bmUzcF_kxljoZGfhXMwR0=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/O/ETjpIzSLiA8pJG77gB4A/2020-05-30-ferrari-f8-tributo.jpg'
    },
    {
        name: 'Mercedes',
        url: 'https://diariodocomercio.com.br/wp-content/uploads/2021/04/mercedes-suv-cupe-0204-3.jpg'
    },
    {
        name: 'Audi',
        url: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/audi_a3_sportback_3.jpg?quality=70&strip=info'
    }
]


function reducer(state = INITIAL_STATE, action) {
    return state
}

export default createStore(reducer)
