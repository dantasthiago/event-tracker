import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEvento } from '../../interfaces/IFiltroDeEvento';
import { filtroDeEvento } from '../../state/atom'
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEvento>(filtroDeEvento)
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEvento = {}
    if (data){
       filtro.data = new Date(data);
    }else{
      filtro.data = null
    }
    setFiltroDeEvento(filtro)
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro