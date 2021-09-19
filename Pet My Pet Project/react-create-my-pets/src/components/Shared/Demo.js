// import { useState, useEffect } from "react";

// const Demo = () => {

//     // const [state, setState] = useState({
//     //     count: 11,
//     //     step: 1
//     // });

//     const [count, setCount] = useState(1);
//     const [step, setStep] = useState(1);




//     const onCounterBtnClickHandler = () => {
//         // setState(oldState => ({ ...oldState, count: oldState.count + oldState.step }) );
//         setCount(oldState => oldState + step)
//     };

//     const onSelectBtnClickHandler = (e) => {
//         const stepValue = Number(e.target.value);
//         // setState(oldState => ({ ...oldState, step: stepValue }));
//         setStep(stepValue);
//     }

//     return (
//         <div>
//             <h1>Counter</h1>
//             <div>{count}</div>
//             <select name="step" id="step" onChange={onSelectBtnClickHandler}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//             </select>
//             <button onClick={onCounterBtnClickHandler}>Increment</button>
//         </div>
//     )
// }
// export default Demo;