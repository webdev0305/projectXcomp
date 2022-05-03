
export default function Preloader(){
    return (
        <div className="preloader">
            <div>
            <img src="/loading.gif" alt="loading" />
            </div>
            {/* <svg className="mainSVG" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style={{transform: "scale(0.5)"}}>
            <defs>   
                <path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff"></path>
                <circle id="dot" cx="0" cy="0" r="5" fill="#fff"></circle>   
            </defs>
            <circle id="mainCircle" fill="none" stroke="none" strokeWidth="2" strokeMiterlimit="10" cx="400" cy="300" r="130"></circle>
            <path strokeMiterlimit="10" strokeWidth="2" stroke="none" fill="none" id="circlePath" d="M530 300 C530 371.79 471.79 430 400 430 328.2 430 270 371.79 270 300 270 228.2 328.2 170 400 170 471.79 170 530 228.2 530 300 z"></path>
            <g id="mainContainer" data-svg-origin="400 300" style={{transformOrigin: "0px 0px 0px"}}>
                <g id="car" data-svg-origin="0 0" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.789037, -0.614346, 0, 0, 0.614346, 0.789037, 0, 0, 0, 0, 1, 0, 300.201, 192.365, 0, 1)"}}>
                </g>
                <path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.321502, -2.43458, 0, 0, 2.43458, 0.321502, 0, 0, 0, 0, 1, 0, 523.464, 315.477, 0, 1); opacity: 0.00664269"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.42442, 1.71589, 0, 0, -1.71589, 2.42442, 0, 0, 0, 0, 1, 0, 529.075, 297.726, 0, 1); opacity: 0.00834152"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.771914, 2.56795, 0, 0, -2.56795, -0.771914, 0, 0, 0, 0, 1, 0, 547.419, 318.939, 0, 1); opacity: 0.0103714"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.0655073, -2.13544, 0, 0, 2.13544, -0.0655073, 0, 0, 0, 0, 1, 0, 521.287, 352.693, 0, 1); opacity: 0.0127785"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.67021, -1.47277, 0, 0, 1.47277, -1.67021, 0, 0, 0, 0, 1, 0, 528.21, 367.73, 0, 1); opacity: 0.0156132"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.38696, -2.34247, 0, 0, 2.34247, 1.38696, 0, 0, 0, 0, 1, 0, 503.409, 371.006, 0, 1); opacity: 0.0189299"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.23709, -1.87064, 0, 0, 1.87064, -1.23709, 0, 0, 0, 0, 1, 0, 512.649, 390.229, 0, 1); opacity: 0.0227879"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.82238, -1.83609, 0, 0, 1.83609, 1.82238, 0, 0, 0, 0, 1, 0, 489.485, 387.56, 0, 1); opacity: 0.0272506"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.719476, -2.75979, 0, 0, 2.75979, 0.719476, 0, 0, 0, 0, 1, 0, 483.075, 406.33, 0, 1); opacity: 0.0323866"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.21306, 1.71928, 0, 0, -1.71928, 1.21306, 0, 0, 0, 0, 1, 0, 489.83, 389.532, 0, 1); opacity: 0.0382695"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.79278, -0.179389, 0, 0, 0.179389, 2.79278, 0, 0, 0, 0, 1, 0, 463.776, 400.508, 0, 1); opacity: 0.0449777"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.383495, -2.49557, 0, 0, 2.49557, -0.383495, 0, 0, 0, 0, 1, 0, 460.059, 432.325, 0, 1); opacity: 0.0525952"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.96891, -1.30876, 0, 0, 1.30876, -1.96891, 0, 0, 0, 0, 1, 0, 461.957, 438.272, 0, 1); opacity: 0.0612117"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.92376, 2.08463, 0, 0, -2.08463, 1.92376, 0, 0, 0, 0, 1, 0, 443.985, 408.968, 0, 1); opacity: 0.0709221"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.995229, -2.39316, 0, 0, 2.39316, 0.995229, 0, 0, 0, 0, 1, 0, 418.18, 439.413, 0, 1); opacity: 0.0818274"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.89082, -0.333043, 0, 0, 0.333043, 1.89082, 0, 0, 0, 0, 1, 0, 409.656, 427.102, 0, 1); opacity: 0.0940349"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.12564, -2.1657, 0, 0, 2.1657, 1.12564, 0, 0, 0, 0, 1, 0, 393.532, 440.714, 0, 1); opacity: 0.107658"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.30879, -0.458837, 0, 0, 0.458837, 2.30879, 0, 0, 0, 0, 1, 0, 381.874, 426.634, 0, 1); opacity: 0.122815"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-2.25652, 0.369051, 0, 0, -0.369051, -2.25652, 0, 0, 0, 0, 1, 0, 396.589, 439.69, 0, 1); opacity: 0.139634"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.396186, 1.94803, 0, 0, -1.94803, -0.396186, 0, 0, 0, 0, 1, 0, 381.17, 421.069, 0, 1); opacity: 0.158247"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.0351362, -2.41002, 0, 0, 2.41002, -0.0351362, 0, 0, 0, 0, 1, 0, 349.323, 438.376, 0, 1); opacity: 0.178794"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.4999, -0.64656, 0, 0, 0.64656, 2.4999, 0, 0, 0, 0, 1, 0, 331.905, 413.698, 0, 1); opacity: 0.201422"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.637135, -2.27603, 0, 0, 2.27603, 0.637135, 0, 0, 0, 0, 1, 0, 323.883, 423.777, 0, 1); opacity: 0.226286"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.507406, 2.39591, 0, 0, -2.39591, -0.507406, 0, 0, 0, 0, 1, 0, 338.822, 397.059, 0, 1); opacity: 0.253545"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.18753, -0.549637, 0, 0, 0.549637, 2.18753, 0, 0, 0, 0, 1, 0, 303.014, 393.145, 0, 1); opacity: 0.283371"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.86897, -0.995024, 0, 0, 0.995024, 1.86897, 0, 0, 0, 0, 1, 0, 294.056, 387.791, 0, 1); opacity: 0.31594"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.430162, 1.80703, 0, 0, -1.80703, 0.430162, 0, 0, 0, 0, 1, 0, 305.266, 369.364, 0, 1); opacity: 0.351437"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.32818, -1.38775, 0, 0, 1.38775, -1.32818, 0, 0, 0, 0, 1, 0, 294.323, 382.755, 0, 1); opacity: 0.390056"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.17786, 1.45721, 0, 0, -1.45721, -1.17786, 0, 0, 0, 0, 1, 0, 299.467, 356.204, 0, 1); opacity: 0.431997"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.628008, 1.41806, 0, 0, -1.41806, 0.628008, 0, 0, 0, 0, 1, 0, 285.17, 337.306, 0, 1); opacity: 0.47747"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.80788, 0.529974, 0, 0, -0.529974, 1.80788, 0, 0, 0, 0, 1, 0, 271.764, 325.012, 0, 1); opacity: 0.526695"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.14861, -1.29132, 0, 0, 1.29132, -1.14861, 0, 0, 0, 0, 1, 0, 277.207, 334.389, 0, 1); opacity: 0.579898"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.46118, -0.422508, 0, 0, 0.422508, 1.46118, 0, 0, 0, 0, 1, 0, 266.004, 306.573, 0, 1); opacity: 0.637317"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.27733, -0.292151, 0, 0, 0.292151, -1.27733, 0, 0, 0, 0, 1, 0, 280.796, 304.657, 0, 1); opacity: 0.699196"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.0934586, -1.27469, 0, 0, 1.27469, 0.0934586, 0, 0, 0, 0, 1, 0, 270.811, 291.599, 0, 1); opacity: 0.765791"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.03364, -0.620619, 0, 0, 0.620619, -1.03364, 0, 0, 0, 0, 1, 0, 281.796, 280.529, 0, 1); opacity: 0.837366"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.98531, -0.461904, 0, 0, 0.461904, -0.98531, 0, 0, 0, 0, 1, 0, 285.792, 267.466, 0, 1); opacity: 0.914196"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.412814, -0.916604, 0, 0, 0.916604, -0.412814, 0, 0, 0, 0, 1, 0, 285.669, 255.831, 0, 1); opacity: 0.996565"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.331246, 0.304389, 0, 0, -0.304389, 0.331246, 0, 0, 0, 0, 1, 0, 292.683, 235.276, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.145703, 0.0801168, 0, 0, -0.0801168, 0.145703, 0, 0, 0, 0, 1, 0, 299.605, 226.704, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.00291079, 0.047841, 0, 0, -0.047841, 0.00291079, 0, 0, 0, 0, 1, 0, 308.081, 217.668, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.00655404, -0.00633643, 0, 0, 0.00633643, 0.00655404, 0, 0, 0, 0, 1, 0, 316.612, 208.946, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.000519505, 0.000536936, 0, 0, -0.000536936, -0.000519505, 0, 0, 0, 0, 1, 0, 326.278, 200.839, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.06423e-06, 3.82106e-06, 0, 0, -3.82106e-06, -1.06423e-06, 0, 0, 0, 0, 1, 0, 336.611, 193.704, 0, 1); opacity: 1"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-2.26141, 1.78609, 0, 0, -1.78609, -2.26141, 0, 0, 0, 0, 1, 0, 366.745, 187.655, 0, 1); opacity: 0"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.1369, 2.02168, 0, 0, -2.02168, 2.1369, 0, 0, 0, 0, 1, 0, 356.344, 163.224, 0, 1); opacity: 0"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.44295, -1.00868, 0, 0, 1.00868, 2.44295, 0, 0, 0, 0, 1, 0, 354.167, 173.849, 0, 1); opacity: 0"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.632163, -2.10356, 0, 0, 2.10356, -0.632163, 0, 0, 0, 0, 1, 0, 377.91, 189.553, 0, 1); opacity: 0"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-2.20451, 1.67329, 0, 0, -1.67329, -2.20451, 0, 0, 0, 0, 1, 0, 414.181, 174.884, 0, 1); opacity: 2.57498e-06"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.602206, 2.74762, 0, 0, -2.74762, 0.602206, 0, 0, 0, 0, 1, 0, 416.574, 157.383, 0, 1); opacity: 7.08083e-06"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.256823, -2.68081, 0, 0, 2.68081, 0.256823, 0, 0, 0, 0, 1, 0, 408.452, 187.974, 0, 1); opacity: 1.64172e-05"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.72785, 1.05023, 0, 0, -1.05023, 1.72785, 0, 0, 0, 0, 1, 0, 428.607, 164.587, 0, 1); opacity: 3.37165e-05"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.970752, 1.7592, 0, 0, -1.7592, 0.970752, 0, 0, 0, 0, 1, 0, 447.599, 167.328, 0, 1); opacity: 6.32424e-05"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.70868, 2.0447, 0, 0, -2.0447, -1.70868, 0, 0, 0, 0, 1, 0, 474.47, 181.376, 0, 1); opacity: 0.000110565"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-2.03546, 1.17905, 0, 0, -1.17905, -2.03546, 0, 0, 0, 0, 1, 0, 483.852, 192.8, 0, 1); opacity: 0.000182737"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(0.745991, -2.85748, 0, 0, 2.85748, 0.745991, 0, 0, 0, 0, 1, 0, 463.354, 208.935, 0, 1); opacity: 0.000288467"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.10171, 0.628129, 0, 0, -0.628129, 2.10171, 0, 0, 0, 0, 1, 0, 480.693, 192.814, 0, 1); opacity: 0.000438296"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(2.06269, -0.357758, 0, 0, 0.357758, 2.06269, 0, 0, 0, 0, 1, 0, 486.018, 206.661, 0, 1); opacity: 0.000644771"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.86021, -1.2806, 0, 0, 1.2806, 1.86021, 0, 0, 0, 0, 1, 0, 491.585, 221.704, 0, 1); opacity: 0.000922624"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.68187, -1.3836, 0, 0, 1.3836, -1.68187, 0, 0, 0, 0, 1, 0, 516.978, 247.05, 0, 1); opacity: 0.00128894"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-0.556337, -2.18956, 0, 0, 2.18956, -0.556337, 0, 0, 0, 0, 1, 0, 514.155, 257.418, 0, 1); opacity: 0.00176334"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.90031, 1.08473, 0, 0, -1.08473, 1.90031, 0, 0, 0, 0, 1, 0, 520.203, 241.609, 0, 1); opacity: 0.00236816"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-2.20844, 1.94419, 0, 0, -1.94419, -2.20844, 0, 0, 0, 0, 1, 0, 549.31, 265.976, 0, 1); opacity: 0.0031286"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(1.99558, -0.762934, 0, 0, 0.762934, 1.99558, 0, 0, 0, 0, 1, 0, 519.242, 274.877, 0, 1); opacity: 0.00407293"}}></path><path id="puff" d="M4.5,8.3C6,8.4,6.5,7,6.5,7s2,0.7,2.9-0.1C10,6.4,10.3,4.1,9.1,4c2-0.5,1.5-2.4-0.1-2.9c-1.1-0.3-1.8,0-1.8,0
                s-1.5-1.6-3.4-1C2.5,0.5,2.1,2.3,2.1,2.3S0,2.3,0,4.4c0,1.1,1,2.1,2.2,2.1C2.2,7.9,3.5,8.2,4.5,8.3z" fill="#fff" data-svg-origin="5.2046380043029785 4.135243654251099" style={{transformOrigin: "0px 0px 0px", transform: "matrix3d(-1.37086, 2.18405, 0, 0, -2.18405, -1.37086, 0, 0, 0, 0, 1, 0, 550.764, 285.89, 0, 1); opacity: 0.00523266"}}>
                </path>
                <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="2s" repeatCount="indefinite"/>
            </g>

            </svg> */}
        </div>
    )
}
