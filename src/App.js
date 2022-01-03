import logo from './logo.svg';
import './App.css';

function App() {
  let names=[
    'Steven Paul Jobs',
    'Bill Gates',
    'Mark Elliot Zuckberberg',
    'Elon Musk',
    'Warren Edward Buffett',
    'Larry Page',
    'Tim Cook',
    'Lloyd Blankfein'
  ]
  let ceoList=[
    {first:'Steven', middle:'Paul', last:'Jobs'},
    {first:'Bill', last:'Gates'},
    {first:'Mark', middle:'Elliot', last:'Zuckberberg'},
    {first:'Elon', last:'Musk'},
    {first:'Warren', middle:'Edward', last:'Buffett'},
    {first:'Larry', last:'Page'},
    {first:'Tim', last:'Cook'},
    {first:'Lloyd', last:'Blankfein'} 
  ]

  let Q1_1 = names.map((item)=>
    item.toUpperCase()
  )
  console.log('Q1-1: '+ Q1_1)

  let Q1_2 = ceoList.map((item)=>{
    return item.first
  })
  console.log('Q1-2: '+ Q1_2)

  let Q1_3 = ceoList.map((item)=>{
    return item.first[0]
  })
  console.log('Q1-3: '+ Q1_3)

  let Q2_1 = names.filter((item)=>{
    return item.includes('a')
  })
  console.log('Q2-1: '+ Q2_1)

  let Q2_2 = names.filter((item)=>{
    return item.includes()
  })
  console.log('Q2-2: '+ Q2_2)

  let Q3_1 = names.some((item)=>{
    return item.length >= 20
  })
  console.log('Q3-1: '+ Q3_1)

  let Q3_2 = ceoList.some((item)=>{
    return item.first || item.middle.includes('p'||'P')
  })
  console.log('Q3-2: '+ Q3_2)

  let Q4_1 = names.every((item)=>{
    return item.length >= 20
  })
  console.log('Q4-1: '+ Q4_1)

  let Q4_2 = names.every((item)=>{
    return item.includes('a')
  })
  console.log('Q4-2: '+ Q4_2)

  let Q5_1 = names.find((item)=>{
    return item.length >= 20
  })
  console.log('Q5-1: '+ Q5_1)

  let Q5_2 = ceoList.find((item)=>{
    return item.middle
  })
  console.log('Q5-2: '+ Q5_2)

  let Q6_1 = names.findIndex((item)=>{
    return item.length >= 20
  })
  console.log('Q6_1: '+ Q6_1)

  let Q6_2 = ceoList.findIndex((item)=>{
    return item.middle
  })
  console.log('Q6_2: '+ Q6_2)

  return (
    <>
      <h1>배열함수 문제</h1>
      <h4>1. map 문제</h4>
      <p>1)모든 이름을 대문자로 바꾸어서 출력하시오.</p>
      <p>2)성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])</p>
      <p>3)이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])</p>
      <h4>2. filter 문제</h4>
      <p>1)이름에 a를 포함한 사람들을 출력하시오.</p>
      <p>2)이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)</p>
      <h4>3. some 문제</h4>
      <p>1)전체 이름의 길이가 20자 이상인 사람이 있는가?</p>
      <p>2)성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)</p>
      <h4>4. every 문제</h4>
      <p>1)모두의 전체 이름의 길이가 20자 이상인가?</p>
      <p>2)모두의 이름에 a 가 포함되어 있는가?</p>
      <h4>5. find 문제</h4>
      <p>1)전체 이름의 길이가 20자 이상인 사람을 찾으시오.</p>
      <p>2)미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)</p>
      <h4>6. findIndex 문제</h4>
      <p>1)전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.</p>
      <p>2)미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.</p>
    </>
  );
}

export default App;
