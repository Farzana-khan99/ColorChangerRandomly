
'use client'

// export default function Home() {
//   function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   function changeBodyColor() {
//     const randomColor = getRandomColor();
//     document.body.style.backgroundColor = randomColor;
//   }
//   return (
//    <div>
//     <button onClick={changeBodyColor}>Change Body Color</button>
//    </div>
//   );
// }



export default function MyPage() {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBodyColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }
  return (
    <div>
      <button className=" border-2 py-1
      " onClick={changeBodyColor}>Change Body Color</button>
    </div>
  );
}


