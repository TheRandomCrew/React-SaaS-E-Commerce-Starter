import React, { useState, useContext } from 'react'
import {
    Box,
    Button,
    FormField,
    Select,
    TextArea,
    TextInput
} from "grommet";
import globalContext from '../../../store/globalContext';

function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('Root Choose Styles');
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})
    const { actions: { setState } } = useContext(globalContext);

    const validate = () => {
        const errors = {};
        if (!name) {
            errors.name = "required";
        }
        if (!type) {
            errors.type = "required";
        }
        return errors;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Submit: \n', name, type)
        setErrors(validate)
        if(!errors){
            setState('pageName',name);
            console.log('submitted')
        }
    }

    return (
        <Box align="center">
            <Box width="medium" margin="large">
                <form
                    onSubmit={onSubmit}
                >
                    <FormField label="Name of your Software" error={errors.name}>
                        <TextInput
                            name="name"
                            placeholder='Jot something'
                            onChange={e => setName(e.target.value)}
                        />
                    </FormField>
                    
                    
                    <FormField label="Project Type" error={errors.type}>
                        
                        <Select
                            name="type"
                            options={["Root Choose Styles", "Remake Existing Software", "I have all the Assets Needed"]}
                            value={"Root Choose Styles"}
                            onChange={event => setType( event.value)}
                        />
                    </FormField>
                    <FormField label="Description">
                        <TextArea
                            name="description"
                            value={description || ""}
                            onChange={e=>setDescription(e.target.value)}
                        />
                    </FormField>
                    <Box
                        tag="footer"
                        margin={{ top: "medium" }}
                        align="center"
                    >
                        {/* <Button label="Cancel" /> */}
                        <Button type="submit" primary label="Next" />
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Form