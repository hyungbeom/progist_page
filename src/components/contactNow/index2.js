import React, {useEffect} from 'react';
import {ContactNowContents} from "../../assets/contents/ContactNowContents";
import CI from "../../assets/images/CI.png";
import CI_text from "../../assets/images/CI_text.png";
import MapMarker from "../../assets/images/map_marker.png";

const ContactNow2 = () => {

    function KakaoMap(){

        useEffect(() => {
            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=def64a963694c7877a24f3fc0fc6b7aa&autoload=false`;
            script.async = true;

            script.onload = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(37.5149410, 127.0298906), // 좌표
                        level: 3 // 확대 레벨
                    };
                    const map = new window.kakao.maps.Map(container, options);

                    // 마커 이미지 설정
                    const imageSrc = MapMarker; // 마커 이미지 URL
                    const imageSize = new window.kakao.maps.Size(67, 94); // 마커 이미지의 크기
                    const imageOption = { offset: new window.kakao.maps.Point(34, 75) }; // 마커의 좌표에 대한 이미지의 위치 조정
                    const position = new window.kakao.maps.LatLng(37.5150748, 127.0290261);

                    // 마커 이미지 생성
                    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: position,
                        image: markerImage,
                    });
                });
            };

            document.head.appendChild(script);
        }, []);

        return(
        <div id='map_container'>
            <div id="map"/>
        </div>
        );
            };

            function ContactInfo() {
        return (
            <div className='flex column' id='contact_info_wrapper'>
                <div className='flex column' style={{alignItems: 'flex-end', marginBottom: '10%', }}>
                    <img src={CI} alt="CI" id="ci"v style={{padding: '0 4% 3% 0'}}/>
                    <img src={CI_text} alt="CI" id="ci_text" style={{width:'18%',}}/>
                </div>
                <div>
                {ContactNowContents.map((value, index) => (
                    <div key={index} id='contact_info_container'>
                        <div className='contact_info_index bold'>{value.index}</div>
                        <div className='contact_info_content subtitle'>{value.content}</div>
                    </div>
                ))}
                </div>
            </div>
        )
    }

    return (
        <div className='layout flex row' style={{paddingTop: '10%', boxSizing: 'border-box'}}>

            <KakaoMap/>
            <ContactInfo/>

        </div>
                );
};

export default ContactNow2;
