import { ContainerForm, InputsBox, ScrollForm } from "./style"
import { BoxInput } from "../../Components/BoxInput/index"
import { useState } from "react"
import axios from "axios"


export const Home = () => {
    const [cep, setCep] = useState('09041310')
    const [log, setLog] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='informar CEP'
                    placeholder='Cep...'
                    keyType='numeric'
                    maxLength={9}
                    fieldValue={cep}
                    editable
                    onChangeText={ (tx) => setCep(tx)}
                />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    keyType='default'
                    fieldValue={log}
                    
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    keyType='default'
                    fieldValue={bairro}
                    
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    keyType='default'
                    fieldValue={cidade}
                    
                />

                <InputsBox>
                    <BoxInput
                        textLabel='Estado'
                        fieldWidth={68}
                        placeholder='Estado...'
                        keyType='default'
                        fieldValue={estado}
                        
                    />
                    <BoxInput
                        textLabel='UF'
                        fieldWidth={23}
                        placeholder='UF'
                        keyType='default'
                        fieldValue={uf}
                    />
                </InputsBox>
            </ContainerForm>
        </ScrollForm>
    )
}