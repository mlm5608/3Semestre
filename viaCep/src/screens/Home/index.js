import { ContainerForm, InputsBox, ScrollForm } from "./style"
import { BoxInput } from "../../Components/BoxInput/index"
import { useEffect, useState } from "react"
import api from "../../Services/Service"


export const Home = () => {
    const [cep, setCep] = useState('')

    const [dados, setDados] = useState({
        district: "",
        street: "",   //bairro
        city: "", //cidade
        state: "",
        stateShortname: ""
    })

    const [log, setLog] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    const getItems = async () => {
        try {
            alert(" deu bom ")
            const promise = await api.get(`/${cep}`)

            setDados(promise.data.result)



            // setLog(promise.data.result.street)
            // setBairro(promise.data.result.district)
            // setCidade(promise.data.result.city)
            // setEstado(promise.data.result.state)
            // setUf(promise.data.result.stateShortname)

        } catch (error) {
            console.warn("Não foi possível encontrar esse cep.")
            console.warn(cep)
        }
    }

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='informar CEP'
                    placeholder='Cep...'
                    keyType='numeric'
                    maxLength={8}
                    fieldValue={cep}
                    editable
                    onChangeText={(e) => setCep(e)}
                    onEndEditing={getItems}
                />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    keyType='default'
                    fieldValue={dados.street}

                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    keyType='default'
                    fieldValue={dados.district}

                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    keyType='default'
                    fieldValue={dados.city}

                />

                <InputsBox>
                    <BoxInput
                        textLabel='Estado'
                        fieldWidth={68}
                        placeholder='Estado...'
                        keyType='default'
                        fieldValue={dados.state}

                    />
                    <BoxInput
                        textLabel='UF'
                        fieldWidth={23}
                        placeholder='UF'
                        keyType='default'
                        fieldValue={dados.stateShortname}
                    />
                </InputsBox>
            </ContainerForm>
        </ScrollForm>
    )
}