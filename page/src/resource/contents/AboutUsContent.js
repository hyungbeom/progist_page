import {Link} from "react-router-dom";
import React from "react";
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

export const getAboutUsContent = () => {

    // page1
    const aboutUsTitle1 = 'CargoKite\'s journey\n' + 'was inspired by a\n' + 'passion for kitesurfing.'

    //page3
    const aboutUsTitle2=
        'Being a passionate kite surfer for\n' +
        'more than 20 years and an\n' +
        'engineer at heart, I was always\n' +
        'fascinated by the enormous\n' +
        'forces that a kite can generate.\n' +
        'Combined with the major\n' +
        'advances in control engineering\n' +
        'and in the use of kites as a\n' +
        'retrofit for ships I saw an\n' +
        'inflection point in technology\n' +
        'that enables a new ship class.'

    // page4

    const aboutUsImg1='././img/aboutUsImg1.png'

    const infoCardContents1={
        img: '././img/aboutUsImg2.jpg',
        title: 'We show the world it\'s possible.',
        subtitle:'CargoKite is a maritime hard tech company based in Munich, Germany. The company was founded in 2022 with the mission of sustainable and at the same time economically viable commercial shipping.\n' +
            '\n' + 'We are convinced that software solutions alone won\'t suffice to decarbonize the massive shipping industry. We have therefore developed an entirely new ship class to transport goods emission-free anytime to any port in the world.',
    }
    const infoCardContents2={
        title: 'Customer value',
        subtitle:'CargoKite\'s micro ships enable oversea transport that is not only 100% emission-free, but also supports the goals of modern supply chains: fast transport, just-in-time delivery, full transparency and most importantly cost savings.',
    }

    // page5

    const aboutUsTitle3='Let\'s meet our\n' + 'awesome team\n' + 'members.'

    const infoCardContents3= {
        subtitle: 'We are looking for mission-driven, skilled, and' + '\n' + 'kind people to help us build the sustainable' + '\n' + ' shipping technology of the future.',
        link:
            <Link to='/recruit'
                  style={{
                    color: 'inherit',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: 550,
                    }}>
                        Check our Job openings
                        <div style={{
                            backgroundColor: '#ff471d',
                            height: '0.12vh',
                            width: '11.5vw',
                            marginTop: '0.2vh'
                        }}/>
            </Link>
    }

    const memberList = [
        {name: 'Lee Hyung beom', position: 'Co-Founder&CTO', photo: '././img/member1.png'},
        {name: 'Kim Jin hwa', position:'Programer', photo:'././img/member2.png'},
        {name:'Kim Jin hwa', position:'Designer', photo:'././img/member3.png'},
        {name:'Kim Jin hwa', position:'Programer', photo:'././img/member4.png'},
        {name:'Kim Jin hwa', position:'Programer', photo:'././img/member5.png'},
    ]


    return {
        aboutUsTitle1,
        aboutUsTitle2,
        aboutUsTitle3,

        aboutUsImg1,

        infoCardContents1,
        infoCardContents2,
        infoCardContents3,

        memberList,
    }
}