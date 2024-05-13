import InputFieldBongchan from './InputField';
import InputLayoutBongchan from './InputLayout';
import InputLabelBongchan from './InputLabel';
import InputMessageBongchan from './InputMessage';
import InputBoxBongchan from './InputBox';

const InputBongchan = Object.assign(InputLayoutBongchan, {
  Label: InputLabelBongchan,
  Box: InputBoxBongchan,
  Field: InputFieldBongchan,
  Message: InputMessageBongchan,
});

export default InputBongchan;
