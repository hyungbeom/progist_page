import {Gradient} from "../temp/Gradient";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {AsciiRenderer, Center, Text3D} from "@react-three/drei";
import {useRef} from "react";


export default function IntroPage() {


    function Torusknot(props) {
        const ref = useRef()
        const viewport = useThree((state) => state.viewport)
        useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
        return (

            <Center rotation={[-0.5, -0.25, 0]} scale={Math.min(viewport.width, viewport.height) / 6} {...props}
                    ref={ref}>
                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/Inter_Bold.json"
                >
                    {`Pro\nGist`}
                    <meshNormalMaterial/>
                </Text3D>
            </Center>
        )
    }


    return <div style={{height: 'calc(100vh - 150px)', padding : 30}}>
        <Gradient/>


        <div style={{
            display: 'grid',
            color: 'white',
            gridTemplateColumns: '1fr 1fr 280px',
            gridTemplateRows: '0.5fr 2fr 120px',
            height: '100%'
        }}>
            <div></div>
            <div></div>
            <div></div>
            <div style={{fontSize: 90, color: 'white', paddingTop: 50}}>
                <div>Turning your</div>
                <div>vision</div>
                <div>Into <span style={{color: '#C17F00'}}>Reality</span></div>
            </div>
            <div style={{gridColumn: '2/4', gridRow: 2}}>
                <Canvas>
                    <color attach="background" args={['black']}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                    <pointLight position={[-10, -10, -10]}/>
                    <Torusknot/>
                    <AsciiRenderer fgColor="white" bgColor="transparent"/>
                </Canvas>

            </div>
            <div>

            </div>
            <div></div>
            <div></div>
            <div style={{fontSize: 25, gridRow: 3, gridColumn: 3}}>
                <div>We develop a novel</div>
                <div>ship to transport freight</div>
                <div style={{color: '#FF471D'}}>100% emession-free</div>
                <div><span style={{color: '#FF471D'}}>on-demand</span> and</div>
                <div><span style={{color: '#FF471D'}}>cheaper</span> than today</div>
                <div className="marquee" style={{paddingTop: 20, fontSize: 16}}>
                    <span>Scroll down to discover how it works.</span>
                </div>
            </div>
            <div style={{gridRow: 4}}>
                <div style={{paddingBottom: 20}}>Backed by these top-tier investors:</div>
                <span style={{fontWeight: 10, fontSize: 40}}>SOSV</span>
                <span style={{fontWeight: 600, fontSize: 40, paddingLeft: 50}}>FTTF</span>
            </div>
            <div></div>

        </div>

    </div>

}