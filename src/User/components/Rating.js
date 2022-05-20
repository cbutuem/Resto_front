// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { Container, Radio, Rating } from "./RatingStyles";
// const Rate = () => {
//   const [rate, setRate] = useState(0);
//   return (
//     <Container>
//       {[...Array(5)].map((item, index) => {
//         const givenRating = index + 1;
//         return (
//           <label>
//             <Radio
//               type="radio"
//               value={givenRating}
//               onClick={() => {
//                 setRate(givenRating);
//                 console.log(givenRating);
//               }}
//             />
//             <Rating>
//               <FaStar
//                 color={
//                   givenRating < rate || givenRating === rate
//                     ? "000"
//                     : "rgb(192,192,192)"
//                 }
//               />
//             </Rating>
//           </label>
//         );
//       })}
//     </Container>
//   );
// };
  
// export default Rate;