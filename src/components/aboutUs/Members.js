// import React, {useEffect, useState} from 'react';
// import Div3ContentsLayout from "../layouts/GridContentsLayout";
// import {Link} from "react-router-dom";
//
// const Members = () => {
//
//
//     return (
//         <div style={{
//             position: 'relative',
//         }}>
//             <Div3ContentsLayout
//                 div1='2' span1='2' div2='7' span2='3' div3='12' span3='4'
//                 style={{
//                     backgroundColor: '#e8ecee',
//                     paddingTop:'7%',
//                     paddingBottom:'5%',
//                 }}
//
//                 first={
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                     }}>
//                         {emberList &&
//                             content.memberList.map((item, index) => {
//                                 return (
//                                     <img src={item.photo} alt='phto' key={index} style={{
//                                         flex: '1',
//                                         width:'7vw',
//                                         aspectRatio:'1.1/1',
//                                         overflow:'hidden',
//                                         margin:'5%'
//                                     }}/>
//
//                                 )
//                             })}
//                     </div>
//                 }
//
//                 second={
//                     <div style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'flex-start',
//                         alignContent:'center',
//                     }}>
//                         {content.memberList &&
//                             content.memberList.map((item, index) => {
//                                 return (
//                                     <span key={index} style={{
//                                         flex: '1',
//                                         width:'100%',
//                                         lineHeight:7.4,
//                                         fontSize:'1vw',
//                                         fontWeight:600,
//                                         whiteSpace:'nowrap',
//                                     }}>{item.name}</span>
//
//                                 )
//                             })}
//                     </div>
//                 }
//                 third={
//                         <div style={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'flex-start',
//                             alignContent:'center',
//                         }}>
//                             {content.memberList &&
//                                 content.memberList.map((item, index) => {
//                                     return (
//                                         <div key={index} style={{
//                                             flex: '1',
//                                             width:'100%',
//                                             lineHeight:7.4,
//                                             fontSize:'1vw',
//                                             fontWeight:600,
//                                             whiteSpace:'nowrap',
//                                             opacity:'70%'
//                                         }}>{item.position}</div>
//                                     )
//                                 })}
//                         </div>
//                 }
//             />
//
//         </div>
//     );
// };
//
// export default Members;