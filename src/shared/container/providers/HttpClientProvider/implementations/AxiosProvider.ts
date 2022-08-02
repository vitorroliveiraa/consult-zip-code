import axios from 'axios';

import { IAxiosProvider } from '../IAxiosProvider';

export class AxiosProvider implements IAxiosProvider {
  async findBy(zipCode: string) {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`
    );

    return response;
  }
}
