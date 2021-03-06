import { atom } from "recoil";
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEvento } from '../interfaces/IFiltroDeEvento';
import { eventosAsync } from './seletores';

export const listaDeEventosState = atom<IEvento[]>({
	key: "listaDeEventosState",
	default: eventosAsync
});

export const filtroDeEvento = atom<IFiltroDeEvento>({
	key: "fitroDeEvento",
	default: {}
})