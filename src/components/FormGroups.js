import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';

export function EstadoFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText="Estado"
      floatingLabelFixed
      fullWidth
      onChange={(_, __, v) => handleChange(v, 'estado')}
    >
      {
        ESTADOS.map(
          val => <MenuItem key={val} value={val} primaryText={val} />
        )
      }
    </SelectField>
  )
}

export function TelefoneFormGroup({ handleChange, ...props }) {
  return (
    <div>
      <label htmlFor={props.id}>Telefone</label>
      <InputMask
        {...props}
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => handleChange(e.target.value, 'telefone')}
        value={props.value}
        mask="(99) 99999-9999"
        maskChar=" "
      />
    </div>
  )
}

export function RacaFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText={'Cor ou Raca'}
      floatingLabelFixed
      fullWidth
      onChange={(_, $_, v) => handleChange(v, 'raca')}
    >
      <MenuItem value={'preta'} primaryText="Preta" />
      <MenuItem value={'parda'} primaryText="Parda" />
    </SelectField>
  )
}

export function RadioGrupoBotoes(props) {
  return (
    <RadioButtonGroup
      name={props.id}
      defaultSelected={props.valorPadrao}
    >
      { props.botoes.map(
        val =>
          (<RadioButton
            className="inch-button"
            name={val.valor}
            key={val.valor}
            value={val.valor}
            label={val.label}
          />)
      )
      }
    </RadioButtonGroup>
  )
}

RadioGrupoBotoes.propTypes = {
  id: PropTypes.string,
  valorPadrao: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

RadioGrupoBotoes.defaultProps = {
  id: '',
  valorPadrao: '',
  botoes: []
};


export function CampoTexto(props) {
  return (
    <TextField
      id={props.id}
      type={props.type}
      maxLength={props.maxLen}
      hintText={props.placeholder}
      floatingLabelText={props.label}
      floatingLabelFixed
      autoComplete="off"
      fullWidth
      multiLine={props.type === 'textarea'}
    />
  );
}

CampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

CampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
};

const formGroupPropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

EstadoFormGroup.propTypes = { ...formGroupPropTypes };

TelefoneFormGroup.propTypes = { ...formGroupPropTypes };

RacaFormGroup.propTypes = { ...formGroupPropTypes };
