
import ButtonModule from './button_module/ButtonModule.jsx'
import ButtonInline from './ButtonInline.jsx'
import TestCardList from './TestCardList.jsx'
import Condition from './condition/Condition.jsx'

function App() {
  return (
    <>
      <Condition isTrue={true}/>
      <Condition isTrue={false}/>
      <Condition/>
      <TestCardList/>
      <ButtonModule/>
      <ButtonInline/>
    </>
  )
}

export default App
