import { atom } from "recoil";
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEvento } from '../interfaces/IFiltroDeEvento';

export const listaDeEventosState = atom<IEvento[]>({
	key: "listaDeEventosState",
	default: [
		]
});

export const filtroDeEvento = atom<IFiltroDeEvento>({
	key: "fitroDeEvento",
	default: {}
})