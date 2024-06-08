import { Box, RadioGroup, Typography } from '@mui/material';
import CustomRadio from 'components/CustomRadio/CustomRadio';
import sprite from '../../img/svg/symbol-defs.svg';
import { useFormContext } from 'react-hook-form';

const SexRadioGroup = ({ selectedSex, setSelectedSex }) => {
    const { setValue, formState: { errors } } = useFormContext();

    const handleRadioChange = (value) => {
        setSelectedSex(value);
        setValue('sex', value);
    };

    return (
        <Box sx={{ mt: '24px' }}>
            <RadioGroup row>
                <CustomRadio
                    selected={selectedSex === 'female'}
                    onChange={() => handleRadioChange('female')}
                    value="female"
                    color={"rgba(244, 63, 94, 0.1)"}
                    iconColor={"rgba(244, 63, 94, 1)"}
                    icon={
                        <svg width={20} height={20}>
                            <use href={`${sprite}#icon-female`} />
                        </svg>
                    }
                />
                <CustomRadio
                    selected={selectedSex === 'male'}
                    onChange={() => handleRadioChange('male')}
                    value="male"
                    color={"rgba(244, 63, 94, 0.10)"}
                    iconColor={"rgba(84, 173, 255, 1)"}
                    icon={
                        <svg width={20} height={20}>
                            <use href={`${sprite}#icon-male`} />
                        </svg>
                    }
                />
                <CustomRadio
                    selected={selectedSex === 'multiple'}
                    onChange={() => handleRadioChange('multiple')}
                    value="multiple"
                    color={"#FFF4DF"}
                    iconColor={"var(--secondary-color)"}
                    icon={
                        <svg width={20} height={20}>
                            <use href={`${sprite}#icon-healthicons_sexual-reproductive-health`} />
                        </svg>
                    }
                />
            </RadioGroup>
            {errors.sex && <Typography color="error">{errors.sex.message}</Typography>}
        </Box>
    );
};

export default SexRadioGroup;
