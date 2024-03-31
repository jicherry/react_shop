import styled from "styled-components";

let Img = styled.div`
    backgroundigm : ${props  => props.bg };

`

function Detail(){
    const SunImage = ['선글라스.PNG' , '선글라스2.PNG' , '선글라스3.PNG' , '선글라스4.PNG' ,'선글라스5.PNG' ,
    '선글라스6.PNG' , '선글라스7.PNG' , '선글라스8.PNG' , '선글라스9.PNG' , '선글라스10.PNG']
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6 mt-4" style={ { marginLeft : '10px' , textAlign : 'left'} }>
                    <h4 className="pt-5" style={ {fontWeight : 'bold'} }>Sunglasses</h4>
                    <p>송강과 함께한 WONDEREGO의 새로운 크리스틴 시리즈를 만나보세요.</p>
                    <div style={ { display : 'flex' } }>
                    {
                        SunImage.map((props) => {
                            return(
                                <img src={require(`../img/${props}`)} style={ { padding : '15px' } } ></img>
                            
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;