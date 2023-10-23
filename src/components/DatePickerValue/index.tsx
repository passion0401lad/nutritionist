import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export interface Date_Picker_Value {
  className: string;
  label: string;
  value: Dayjs | null
  onChange: (date:Dayjs | null) => void;
}

export default function DatePickerValue(props:Date_Picker_Value) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
        <DatePicker
          label={props.label}
          value={props.value}
          // onChange={(newValue) => setValue(newValue)}
          onChange={(e) => props.onChange(e)}
          className={props.className}
        />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}