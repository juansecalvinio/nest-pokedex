import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Agent } from 'https';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      httpsAgent: new Agent({ rejectUnauthorized: false }),
    });
  }

  async execute() {
    try {
      const { data } = await this.axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=400',
      );
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
