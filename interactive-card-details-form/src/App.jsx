import { useState } from 'react'
import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
import Form from './Components/Form'
import { Wrapper, ImgBg, WhiteBg } from './styles/'
import tw from 'twin.macro'
function App() {
    const [inputFields, setInputFields] = useState([
        {
            id: 'card-holder-name',
            name: 'Name',
            focus: false,
            value: '',
            limit: 18,
            error: '',
        },
        {
            id: 'card-number',
            focus: false,
            name: 'Card Number',
            value: '',
            limit: 19,
            error: '',
        },
        {
            id: 'card-exp-mm',
            name: 'Expiry month',
            focus: false,
            value: '',
            limit: 2,
            error: '',
        },
        {
            id: 'card-exp-yy',
            name: 'Expiry year',
            focus: false,
            value: '',
            limit: 2,
            error: '',
        },
        {
            id: 'card-cvv',
            name: 'Cvv',
            focus: false,
            value: '',
            limit: 3,
            error: '',
        },
    ])

    return (
        <div className="App flex h-screen w-screen flex-col md:flex-row">
            <ImgBg>
                <Wrapper>
                    <CardBack inputFields={inputFields} />
                    <CardFront inputFields={inputFields} />
                </Wrapper>
            </ImgBg>
            <WhiteBg>
                <Wrapper>
                    <Form
                        inputFields={inputFields}
                        setInputFields={setInputFields}
                    />
                </Wrapper>
            </WhiteBg>
        </div>
    )
}

export default App
