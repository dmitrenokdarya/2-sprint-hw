import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                height: 4,
                borderRadius: 10,
                '& .MuiSlider-track': {
                    color: 'rgba(0, 204, 34, 1)'
                },
                '& .MuiSlider-rail': {
                    color: 'rgba(139, 139, 139)'
                },
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(0, 204, 34, 1)',
                    '&::before':{
                        content: '""',
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'rgba(0, 204, 34, 1)',
                    }
                }
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
