import InputFieldBongchan from './InputField';
import InputLayoutBongchan from './InputLayout';
import InputLabelBongchan from './InputLabel';
import InputMessageBongchan from './InputMessage';

const InputBongchan = Object.assign(InputLayoutBongchan, {
  Label: InputLabelBongchan,
  Field: InputFieldBongchan,
  Message: InputMessageBongchan,
});

export default InputBongchan;
