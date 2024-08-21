import React, {useState} from "react";

const GetInTouch = () => {

    function PopupHead (){
        return (
            <div style={{
                backgroundColor:'#fff',
                position: "absolute",
                // backgroundColor: 'gray',
                width: '23%',
                padding: '6%',
                top:'-10%',
            }}>
                <div style={{
                    fontSize: '3vw',
                    lineHeight: 1.1,
                    fontWeight: 500,
                    marginTop:'2%'
                }}>
                    Get in touch with us!
                </div>
                <div style={{
                    fontSize: '1vw',
                    lineHeight: 1.6,
                    marginTop:'13%'
                }}>
                    We are currently working at full speed on the development of IT platform. Feel free to reach out to us
                    if you are keen on finding out more about Progist.
                </div>
            </div>
        )
    }

    function clickSendMessage(){}

    function SendButton(){
        return (
            <div style={{
                backgroundColor: '#fff',
                width: '32%',
                aspectRatio: '1.1/1',
                padding: '7%',
            }} onClick={clickSendMessage}>
                <div style={{
                    fontSize: '1.8vw',
                    fontWeight: 600,
                    textAlign: 'left',
                }}>Send message
                </div>
                <img src="././img/arrowIcon.png" alt='arrow' style={{width: '20%', marginTop:'38.5%'}}/>
            </div>
        )
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function InputBox(){
        return (
            <div style={{
                // backgroundColor: '#fff',
                width: 'auto',
                aspectRatio: '1.6/1',
                paddingLeft: '4%',
                color: 'white',
            }}>
                <input className='input' type='text'
                       value={name}
                       onChange={(e) => {
                           setName(e.target.value)
                       }}
                       placeholder={'Your name'}
                       style={{
                           width: '100%',
                           height: '22%',

                       }}>
                </input>
                <div style={{width: '100%', height: '0.1vh', backgroundColor: 'white', opacity:'30%'}}/>
                <input className='input' type='text'
                       value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}
                       placeholder={'Your email'}
                       style={{
                           width: '100%',
                           height: '22%',

                       }}>
                </input>
                <div style={{width: '100%', height: '0.1vh', backgroundColor: 'white', opacity:'30%'}}/>
                <input className='input' type='text'
                       value={message}
                       onChange={(e) => {
                           setMessage(e.target.value)
                       }}
                       placeholder={'Your message'}
                       style={{
                           width: '100%',
                           height: '53%',
                       }}>
                </input>
                <div style={{width: '100%', height: '0.1vh', backgroundColor: 'white', opacity:'30%'}}/>
            </div>
        )
    }

    function PopupContact(){
        return(
            <div style={{
                width: 'auto',
                paddingBottom:'10%',
                fontSize: '1vw',
                color: 'white',
            }}>
                Or just wanna say hi?<br/>
                <div style={{
                    fontSize: '1.2vw',
                    color: '#fff',
                    marginTop: '1%'
                }}>info@progist.co.kr
                </div>
                <div style={{backgroundColor: '#fff', height: '0.1vh', width: '10.2vw', marginTop: '1%'}}/>
            </div>
        )
    }

    function CloseButton(){
        return(
            <img src='././img/closeIcon.png' alt='close'
                 // onClick={}
                 style={{
                     position: 'absolute',
                     opacity:'70%',
                     width: '2.5%',
                     top:"4%",
                     right:'2.5%',
                 }}/>
        )
    }

    return (
        <div>
        <div style={{
            position:'fixed',
            backgroundColor: 'black',
            opacity: '80%',
            width:'100%',
            height:'100%',
            zIndex:20,
        }}> </div>
        <div style={{
            backgroundColor: '#fd471d',
            width: '54vw',
            aspectRatio: '1.56/1',
            padding: '4% 4% 0% 4%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            position:'fixed',
            zIndex:30,
            left:'20%',
            top:'20%'
        }}>
            <CloseButton/>
            <div style={{
                flex: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
                <PopupHead/>
                <PopupContact/>
            </div>
            <div style={{
                flex: 1.5,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
                <InputBox/>
                <SendButton/>
            </div>
        </div>

        </div>

    );
};

export default GetInTouch;