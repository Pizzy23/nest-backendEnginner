import { HttpException, Injectable } from '@nestjs/common';
import * as correios from 'correios-brasil';
import * as pluscodes from 'pluscodes';
import axios from 'axios';
@Injectable()
export class CepService {
  constructor() {}
  async validCep(cep: string): Promise<boolean> {
    try {
      await correios.consultarCep(cep);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getPlusCode(cep: string) {
    const adress = await correios.consultarCep(cep);
    return await this.plusCode(adress.bairro);
  }
  async plusCode(adress: string) {
    const coords = await this.getCoordinatesByAddress(adress);
    return this.encodePlusCode(coords.lat, coords.lng);
  }
  encodePlusCode(latitude: number, longitude: number): string {
    return pluscodes.encode({
      latitude: latitude,
      longitude: longitude,
    });
  }
  async getCoordinatesByAddress(
    address: string,
  ): Promise<{ lat: number; lng: number }> {
    try {
      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            address: address,
            key: process.env.MAPS,
          },
        },
      );

      const result = response.data.results[0];
      if (result) {
        const { lat, lng } = result.geometry.location;
        return { lat, lng };
      }

      throw new Error('Nenhum resultado encontrado para o endereço fornecido.');
    } catch (error) {
      throw new Error(
        'Erro ao obter coordenadas geográficas: ' + error.message,
      );
    }
  }
}
