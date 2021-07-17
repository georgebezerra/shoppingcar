import { useSelector } from 'react-redux'

export default function Message () {
    const isShow = useSelector((state) => state.layout.showMessage);
    return(
        <>
         {isShow &&
            <div className="container mt-3">
                <div className="alert alert-success" role="alert">
                    Cadastrado com sucesso!
                </div>
            </div>
          }
        </>
    )
}
