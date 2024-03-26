import styled from "styled-components";

let Img = styled.div`
    backgroundigm : ${props  => props.bg };
`

function Detail(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Sunglasses</h4>
                    <p>송강과 함께한 WONDEREGO의 새로운 크리스틴 시리즈를 만나보세요.</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;